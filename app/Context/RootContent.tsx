"use client";
import React, { useEffect } from "react";
import { SidebarProvider } from "./context";
import { ChatProvider } from "./ChatContext";
import { ApiProvider } from "./Api";
import { useRouter } from "next/navigation";

function RootContent({ children }: any) {
  const router = useRouter();

  return (
    <ApiProvider>
      <SidebarProvider>
        <ChatProvider>{children}</ChatProvider>
      </SidebarProvider>
    </ApiProvider>
  );
}

export default RootContent;
