import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  FaMicrophone,
  FaPhoneSlash,
  FaVolumeUp,
  FaCommentDots,
} from "react-icons/fa";
import { Usemodel } from "../Context/context";
type ModalProps = {};

const VoiceCallModal: React.FC<ModalProps> = () => {
  const { voicemodel, setVoicemodel } = Usemodel() || {};
  return (
    <Transition appear show={voicemodel} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setVoicemodel(false)}
      >
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm bg-[#121212] text-white rounded-xl shadow-xl p-6 flex flex-col items-center">
            <Dialog.Title className="text-xl font-semibold text-center">
              Voice Call
            </Dialog.Title>
            <div className="mt-6 w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400">User</span>
            </div>
            <p className="mt-4 text-gray-400">00:15 • Calling...</p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaMicrophone size={20} />
              </button>
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaVolumeUp size={20} />
              </button>
              <button
                className="p-3 bg-red-600 rounded-full hover:bg-red-500"
                onClick={() => setVoicemodel(false)}
              >
                <FaPhoneSlash size={20} />
              </button>
              <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaCommentDots size={20} />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VoiceCallModal;
