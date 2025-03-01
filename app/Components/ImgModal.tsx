"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { useSidebar } from "../Context/context";

interface ImgModalProps {
    imgmodel: boolean;
    setIsmodel: () => void;
    selectedImage:any;
}

const ImgModal: React.FC = () => {
    const { imgmodel, setIsmodel, selectedImage } = useSidebar();
  
    return (
      <Transition show={imgmodel} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsmodel(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md" />
          </Transition.Child>
  
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative max-w-3xl mx-auto">
                <button
                  onClick={() => setIsmodel(false)}
                  className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    className="w-full h-auto rounded-lg shadow-xl"
                    alt="Full View"
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
  
  export default ImgModal;
