"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaCamera } from "react-icons/fa";
import { useApiContext } from "../Context/Api";

const ProfileSetup = () => {
  const router = useRouter();
  const { useData, setUseData } = useApiContext();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  console.log(useData);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Updated:", { name, bio, image });
    router.push("/chatapp");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#101018] text-white p-6">
      <div className="flex flex-col items-center bg-white bg-opacity-10 max-w-full w-[500px] mx-auto backdrop-blur-lg px-10 py-8 rounded-3xl shadow-2xl border border-gray-600">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Complete Your Profile
        </h1>
        <div
          onClick={handleImageClick}
          className="relative cursor-pointer w-28 h-28 mb-4 border-4 border-blue-500 rounded-full overflow-hidden shadow-lg hover:opacity-80 transition-all"
        >
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-700 text-gray-400">
              <FaUser className="text-4xl" />
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <label
          className="mb-6 cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
          onClick={handleImageClick}
        >
          <FaCamera className="text-lg" />
          Upload Profile Picture
        </label>

        <form
          className="w-full flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />

          <textarea
            placeholder="Enter your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            rows={3}
            required
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition-all"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
