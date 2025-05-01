"use client";
import { useApiContext } from "@/app/Context/Api";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const SERVER_URL = "http://localhost:5000"; // Adjust to your backend URL

const useOnlineStatus = (userinfo: any) => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const socketRef = useRef<any>(null);
  const pathname = usePathname(); // ✅ Correct way to track the current page in App Router
  const { onlineuserupdate, setOnlineuserupdate } = useApiContext();

  useEffect(() => {
    if (!userinfo?._id) return; // Ensure user is logged in

    // Initialize Socket.io connection
    socketRef.current = io(SERVER_URL, { withCredentials: true });

    // Function to update user status
    const updateStatus = () => {
      if (pathname === "/chatapp") {
        socketRef.current.emit("userOnline", { userId: userinfo._id });
      } else {
        socketRef.current.emit("userOffline", { userId: userinfo._id });
      }
    };

    // Emit online status immediately if user is on "/chatapp"
    updateStatus();

    // Listen for server updates on online users
    socketRef.current.on("onlineStatus", (users: any[]) => {
      setOnlineuserupdate(users);
    });

    // Detect navigation change
    window.addEventListener("popstate", updateStatus);

    // Detect tab close or refresh
    const handleBeforeUnload = () => {
      socketRef.current.emit("userOffline", { userId: userinfo._id });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function
    return () => {
      if (socketRef.current) {
        socketRef.current.emit("userOffline", { userId: userinfo._id });
        socketRef.current.disconnect();
      }
      window.removeEventListener("popstate", updateStatus);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userinfo, pathname]);

  return onlineUsers;
};

export default useOnlineStatus;
