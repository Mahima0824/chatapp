import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSidebar } from "../Context/context";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ProfileModal() {
  const { profilemodel, setProfilemodel } = useSidebar();
  const [name, setName] = useState("Mahima");
  const [bio, setBio] = useState("This is my bio...");
  const [email, setEmail] = useState("mahima@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXQlMjBtb2RhbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
  );

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
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
                    src={image}
                    className="w-full h-full object-cover"
                    alt="User"
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
            <div className="relative w-full mt-4 space-y-4">
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  autoFocus
                />
              ) : (
                <div className="flex justify-between items-center border p-3 border-gray-600 text-white rounded-lg bg-gray-800">
                  <h2 className="text-lg font-medium">{name}</h2>
                  <PencilIcon
                    className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-400 transition"
                    onClick={() => setIsEditingName(true)}
                  />
                </div>
              )}
              {isEditingBio ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  onBlur={() => setIsEditingBio(false)}
                  className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  autoFocus
                />
              ) : (
                <div className="flex justify-between items-center border p-3 border-gray-600 text-gray-400 rounded-lg bg-gray-800">
                  <p>{bio}</p>
                  <PencilIcon
                    className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-400 transition"
                    onClick={() => setIsEditingBio(true)}
                  />
                </div>
              )}
              {isEditingEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setIsEditingEmail(false)}
                  className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  autoFocus
                />
              ) : (
                <div className="flex justify-between items-center border p-3 border-gray-600 text-gray-400 rounded-lg bg-gray-800">
                  <p>{email}</p>
                  <PencilIcon
                    className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-400 transition"
                    onClick={() => setIsEditingEmail(true)}
                  />
                </div>
              )}
              {isEditingPhone ? (
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setIsEditingPhone(false)}
                  className="w-full p-3 bg-gray-800 border border-gray-500 text-white rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  autoFocus
                />
              ) : (
                <div className="flex justify-between items-center border p-3 border-gray-600 text-gray-400 rounded-lg bg-gray-800">
                  <p>{phone}</p>
                  <PencilIcon
                    className="w-5 h-5 cursor-pointer text-gray-400 hover:text-blue-400 transition"
                    onClick={() => setIsEditingPhone(true)}
                  />
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                onClick={() => setProfilemodel(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-md"
                onClick={() => setProfilemodel(false)}
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
