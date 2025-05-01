"use client";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSidebar } from "../Context/context";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import { useApiContext } from "../Context/Api";

export default function ProfileModal() {
  const { profilemodel, setProfilemodel } = useSidebar();
  const { updateUser, getUser, useData } = useApiContext(); // Use the context
  const [data, setData] = useState<any>();
  const [image, setImage] = useState<string | null>(null);
  const getuserData = async () => {
    let user = await getUser();
    setData(user);
    setImage(user?.image || null);
  };

  useEffect(() => {
    getuserData();
  }, []);
  const formik = useFormik({
    initialValues: {
      username: useData?.username || "", // Default name from data data
      bio: useData?.bio || "", // Default bio from data data
      email: useData?.email || "", // Default email from data data
      phone: useData?.phone || "", // Default phone from data data
      image: useData?.image || "", // Default image from data data
    },
    onSubmit: async (values) => {
      const userId = useData?._id; // Get the data ID from context
      const formData = new FormData();
      formData.append(
        "username",
        values.username !== undefined ? values.username : data.username
      );
      formData.append("bio", values.bio !== undefined ? values.bio : data.bio);

      // Append the image if it's selected
      if (values.image) {
        formData.append("image", values.image); // Attach image file
      }

      try {
        const response = await updateUser({ formData, userId }); // Call the updateUser function to update the profile
        await getUser(); // Fetch updated data data if needed
        setProfilemodel(false); // Close the modal after saving
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
  });

  // Handle image change
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file); // Set the image in Formik state
    }
  };

  return (
    <Transition show={profilemodel} as={Fragment}>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-opacity" />
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex justify-center items-center"
        onClose={() => setProfilemodel(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition ease-in-out duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          <Dialog.Panel className="w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl p-6 rounded-2xl border border-gray-700 backdrop-blur-xl">
            <div className="flex justify-between items-center border-b border-gray-600 pb-3">
              <Dialog.Title className="text-xl font-bold text-gray-200">
                Profile
              </Dialog.Title>
              <XMarkIcon
                className="w-6 h-6 cursor-pointer text-gray-400 hover:text-white transition"
                onClick={() => setProfilemodel(false)}
              />
            </div>
            <div className="flex flex-col items-center gap-4 mt-5">
              <label htmlFor="image-upload" className="cursor-pointer relative">
                <Avatar className="w-28 h-28 border-4 border-blue-500 rounded-full shadow-xl transition-transform hover:scale-105">
                  <AvatarImage
                    src={
                      formik.values.image
                        ? URL.createObjectURL(formik.values.image)
                        : useData?.image
                    }
                    className="w-full h-full object-cover"
                    alt="data"
                  />
                </Avatar>
                <PencilIcon className="absolute bottom-1 right-1 w-6 h-6 text-gray-300 bg-gray-800 p-1 rounded-full shadow-md hover:text-blue-400" />
              </label>
              <input
                type="file"
                id="image-upload"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="relative w-full mt-4 space-y-4">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="username"
                    value={
                      formik.values.username
                        ? formik.values.username
                        : useData?.username
                    }
                    onChange={formik.handleChange}
                    className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Bio Field */}
                <div>
                  <textarea
                    name="bio"
                    value={formik.values.bio ? formik.values.bio : useData?.bio}
                    onChange={formik.handleChange}
                    className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your bio"
                    rows={3}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    disabled
                    value={useData?.email}
                    className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={useData?.phone}
                    readOnly
                    disabled
                    className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                  onClick={() => setProfilemodel(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-md"
                >
                  Save
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
