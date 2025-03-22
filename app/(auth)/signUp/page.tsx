"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa"; // Add FaPhone icon
import { FcGoogle } from "react-icons/fc";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useApiContext } from "@/app/Context/Api";

const init = {
  username: "",
  email: "",
  password: "",
  phone: "", // Add phone to initialValues
};
const SignUp = () => {
  const { registerUser } = useApiContext(); // Access the context
  const router = useRouter();

  const validateForm = (values: any) => {
    const errors: { [key: string]: string } = {};
    const { username, email, password, phone } = values;

    if (!username || username.length < 3) {
      errors.username = "Username must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Optional phone number validation (if you want to make phone validation stricter)
    const phoneRegex = /^[0-9]{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number (10 digits).";
    }

    return errors;
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, setErrors }: any
  ) => {
    try {
      console.log(values, "values");
      await registerUser(values); // Call the API function from context
      // Redirect after successful registration
    } catch (error) {
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#101018]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white bg-opacity-10 max-w-full w-[500px] mx-auto backdrop-blur-lg px-10 py-8 rounded-3xl shadow-2xl border border-gray-600"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create an Account
        </h2>

        <Formik
          initialValues={init}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="flex flex-col space-y-5">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-400 text-sm"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-400 text-sm"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-400 text-sm"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />{" "}
                {/* Phone icon */}
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone (Optional)"
                  className="w-full pl-12 p-3 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-400 text-sm"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(to right, #00c6ff, #0072ff)",
                  boxShadow: "0px 4px 10px rgba(0, 198, 255, 0.5)",
                }}
                type="submit"
                disabled={isSubmitting}
                className="w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg transition-all"
              >
                Sign Up
              </motion.button>
            </Form>
          )}
        </Formik>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        <div className="flex items-center gap-2 w-fit mx-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.1)",
            }}
            className="w-fit flex items-center justify-center gap-3 p-3 border border-gray-500 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all"
          >
            <FcGoogle className="text-xl" />
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
