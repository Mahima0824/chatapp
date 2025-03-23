"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

let local = "http://localhost:5000/api/v1";
let live = "https://chatapp-backend-6i7e.onrender.com/api/v1";

const NEXT_BACKEND_URL = live;

interface ApiContextType {
  registerUser: (formData: any) => Promise<any>;
  loginUser: (formData: any) => Promise<any>;
  useData: any;
  updateUser: any;
  getUser: any;
  getAllUser: any;
  getUserFriends: any;
  getChat: any;
  SendMsg: any;
  getconvertion: any;
  friendRes: any;
}

const CreateApiContext = createContext<any | undefined>(undefined);

export const useApiContext = (): ApiContextType => {
  const context = useContext(CreateApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

interface ApiProviderProps {
  children: ReactNode;
}

const ApiProvider = ({ children }: ApiProviderProps) => {
  const router = useRouter();

  const [useData, setUseData] = useState<any>(null);
  // Register API function
  const registerUser = async (formData: any) => {
    try {
      const response = await axios.post(
        `${NEXT_BACKEND_URL}/register`,
        formData
      );
      toast.success(response.data.message);
      // Redirect to login page after successful registration
      if (response.data) {
        router.push("/login");
      }
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed");
      throw new Error("Registration failed");
    }
  };

  // Login API function
  const loginUser = async (formData: any) => {
    try {
      const response = await axios.post(`${NEXT_BACKEND_URL}/login`, formData);

      // Store the token in localStorage
      await localStorage.setItem("chatapptoken", response.data.token);

      toast.success(response.data.message);

      // Redirect to a protected page after successful login
      router.push("/steps");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
      throw new Error("Login failed");
    }
  };

  const getUser = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      // Make the GET request with the token in the headers
      const response = await axios.get(`${NEXT_BACKEND_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUseData(response.data.user);
      return response.data.user;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch user data");
      throw new Error("get failed");
    }
  };

  // GET ALL user

  const getAllUser = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      // Make the GET request with the token in the headers
      const response = await axios.get(`${NEXT_BACKEND_URL}/getAllUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.users;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to fetch user data");
      throw new Error("get failed");
    }
  };

  const getconvertion = async ({ reciverId }: any) => {
    try {
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      const response = await axios.get(
        `${NEXT_BACKEND_URL}/getchats/${reciverId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      // throw new Error("get failed");
    }
    // getChat
  };
  // GET USER FRIENDLIST

  const getUserFriends = async () => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      // Make the GET request with the token in the headers
      const response = await axios.get(`${NEXT_BACKEND_URL}/getUserfriend`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.friends;
    } catch (error: any) {
      throw new Error("get failed");
    }
  };

  const updateUser = async ({ formData, userId }: any) => {
    try {
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      // Make the PUT request with the token and form data
      const response = await axios.put(
        `${NEXT_BACKEND_URL}/update/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the user data in context
      setUseData(response.data.user);

      toast.success("Profile updated successfully!");
      return response.data.user;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Profile update failed");
      throw new Error("Profile update failed");
    }
  };

  // SEND MSG

  const SendMsg = async ({ msg }: any) => {
    console.log(msg, "msg============");
    try {
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }
      const response = await axios.post(
        `${NEXT_BACKEND_URL}/send-message`,
        msg,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const friendRes = async ({ type, data }: any) => {
    try {
      const token = localStorage.getItem("chatapptoken");

      if (!token) {
        throw new Error("No token found, user is not authenticated.");
      }

      let response;

      // Make a decision based on the type of request
      switch (type) {
        case "send":
          response = await axios.post(
            `${NEXT_BACKEND_URL}/send-friend-request`,
            data, // Changed msg to data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;

        case "send-remove":
          response = await axios.post(
            `${NEXT_BACKEND_URL}/send-back-friend-request`,
            data, // Changed msg to data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;
        // send-back-friend-request
        case "accept":
          response = await axios.post(
            `${NEXT_BACKEND_URL}/accept-friend-request`,
            data, // Changed msg to data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;

        case "reject":
          response = await axios.post(
            `${NEXT_BACKEND_URL}/reject-friend-request`,
            data, // Changed msg to data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;

        case "remove-friend":
          response = await axios.post(
            `${NEXT_BACKEND_URL}/remove-friend`,
            data, // Changed msg to data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;
        // remove-friend
        default:
          throw new Error("Invalid action type.");
      }

      // Return the response data if request is successful
      return response.data;
    } catch (error) {
      console.log("Error in friend request operation: ", error);
    }
  };

  return (
    <CreateApiContext.Provider
      value={{
        getUser,
        updateUser,
        registerUser,
        loginUser,
        useData,
        setUseData,
        getAllUser,
        getUserFriends,
        getconvertion,
        SendMsg,
        friendRes,
      }}
    >
      {children}
    </CreateApiContext.Provider>
  );
};

export { ApiProvider, CreateApiContext };
