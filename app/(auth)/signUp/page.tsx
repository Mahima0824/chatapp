"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock, FaCamera } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null as File | null,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/steps");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#101018]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white bg-opacity-10 max-w-full w-[500px] mx-auto backdrop-blur-lg px-10 py-8 rounded-3xl shadow-2xl  border border-gray-600"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create an Account
        </h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              boxShadow: "0px 4px 10px rgba(0, 198, 255, 0.5)",
            }}
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg transition-all"
          >
            Sign Up
          </motion.button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <div className="flex  items-center gap-2 w-fit mx-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.1)",
            }}
            className="w-fit flex items-center justify-center  gap-3 p-3 border border-gray-500 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all"
          >
            <FcGoogle className="text-xl" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.1)",
            }}
            className="w-fit flex items-center justify-center gap-3 p-3 border border-gray-500 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
          >
            <FaFacebook className="text-xl" />
          </motion.button>
        </div>
        <p className="text-gray-300 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Sign In
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
