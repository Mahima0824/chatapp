import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSidebar } from "../Context/context";
import { X } from "lucide-react";

const EditModal = ({ message }: { message: string }) => {
  const { editmodel, setEditmodel } = useSidebar();

  return (
    <Transition appear show={editmodel} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setEditmodel(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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
              <Dialog.Panel className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
                <button
                  onClick={() => setEditmodel(false)}
                  className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-lg  text-white font-semibold mb-4">
                  Edit Message
                </h2>
                <textarea
                  className="w-full focus:border-none focus:outline-none bg-zinc-700 text-white p-2 rounded-md"
                  rows={3}
                  onChange={(e) => e.target.value}
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setEditmodel(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setEditmodel(false);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default EditModal;
