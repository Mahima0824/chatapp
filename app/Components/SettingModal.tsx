import { Transition, Dialog } from "@headlessui/react";
import { useSidebar } from "../Context/context";
import { Fragment } from "react";
import {
  IoClose,
  IoPerson,
  IoLockClosed,
  IoNotifications,
  IoChatbubbles,
  IoColorPalette,
  IoHelpCircle,
} from "react-icons/io5";


const SettingModal = () => {
    const { settingmodel, setSettingmodel,setProfilemodel } = useSidebar();
    const settings = [
      { title: "Account", icon: <IoPerson />, onClick: () => setProfilemodel(true) },
      { title: "Privacy", icon: <IoLockClosed /> },
      { title: "Notifications", icon: <IoNotifications /> },
      { title: "Chat Settings", icon: <IoChatbubbles /> },
      { title: "Theme", icon: <IoColorPalette /> },
      { title: "Help", icon: <IoHelpCircle /> },
    ];

  return (
    <Transition appear show={settingmodel} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClose={() => setSettingmodel(false)}
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-lg transition-opacity" />

        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative w-96 bg-gray-900/80 backdrop-blur-lg border border-gray-700 text-white rounded-xl shadow-2xl p-6">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={() => setSettingmodel(false)}
            >
              <IoClose size={24} />
            </button>
            <Dialog.Title className="text-xl font-semibold text-center">
              ⚙️ Settings
            </Dialog.Title>
            <div className="mt-6 space-y-3">
              {settings.map((item, index) => (
                <SettingItem key={index} title={item.title} icon={item.icon} onClick={item.onClick} />
              ))}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

const SettingItem = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
}) => (
  <div
    className="flex items-center gap-4 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50 transition"
    onClick={onClick}
  >
    <span className="text-lg text-gray-300">{icon}</span>
    <span className="text-gray-300">{title}</span>
  </div>
);

export default SettingModal;
