import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  FaMicrophone,
  FaVideo,
  FaPhoneSlash,
  FaComments,
} from "react-icons/fa";
import { Usemodel } from "../Context/context";

type ModalProps = {
  
};

const VideoCallModal: React.FC<ModalProps> = () => {
  const { videomodel, setVideomodel } = Usemodel() || {};

  return (
    <Transition
      appear
      show={videomodel}
      as={Fragment}
    
    >
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setVideomodel(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl h-[85vh] bg-[#121212] text-white rounded-xl shadow-xl p-6 flex flex-col">
            <Dialog.Title className="text-xl font-semibold text-center">
              Video Call
            </Dialog.Title>
            <div className="flex-1 flex items-center justify-center bg-gray-800 rounded-lg mt-4">
              <p className="text-gray-400">Live Video Call Feed</p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaMicrophone size={20} />
              </button>
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaVideo size={20} />
              </button>
              <button
                className="p-3 bg-red-600 rounded-full hover:bg-red-500"
                onClick={() => setVideomodel(false)}
              >
                <FaPhoneSlash size={20} />
              </button>
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaComments size={20} />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoCallModal;
