import React from "react";
import {  ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
      transition={Zoom}
    />
  );
};

export default ToastProvider;
