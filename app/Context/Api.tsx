"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NEXT_BACKEND_URL = "http://localhost:5000/api/v1"; // Replace with your actual backend URL

interface ApiContextType {
  registerUser: (formData: any) => Promise<any>;
  loginUser: (formData: any) => Promise<any>;
  useData:any;
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
      localStorage.setItem("chatapptoken", response.data.token);
      toast.success(response.data.message);

      // Redirect to a protected page after successful login
      setUseData(response.data);
      router.push("/steps");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
      throw new Error("Login failed");
    }
  };

  return (
    <CreateApiContext.Provider
      value={{ registerUser, loginUser, useData, setUseData }}
    >
      {children}
    </CreateApiContext.Provider>
  );
};

export { ApiProvider, CreateApiContext };
