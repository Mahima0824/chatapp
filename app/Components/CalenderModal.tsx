import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { motion } from "framer-motion";

interface CalendarModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setCalanderValue?: any;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  closeModal,
  setCalanderValue,
}) => {
  let selectValue;
  const hadlingchange = (e:any) => {
    selectValue = e;
    setCalanderValue(selectValue)
    closeModal();
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="transition transform duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition transform duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-fit   text-white ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-fit mx-auto"
              >
                <p className="">{selectValue}</p>
                <DayPicker
                  mode="single"
                  className="rounded-lg bg-[#2A2A36] w-fit mx-auto px-8 py-3 text-white"
                  onSelect={(e) => hadlingchange(e)}
                />
              </motion.div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CalendarModal;
