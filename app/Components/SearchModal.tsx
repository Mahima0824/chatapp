import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import CalenderModal from "./CalenderModal";
interface SearchProps {
  setSearch?: any;
}

const SearchModal: React.FC<SearchProps> = ({ setSearch }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return (
    <div className="py-4 px-6 glassBg border-b border-gray-700 shadow-lg backdrop-blur-lg">
      <div className="flex gap-44 items-center justify-between ">
        <div className="flex gap-4 flex-1 items-center">
          <button
            type="button"
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            onClick={() => setSearch(false)}
          >
            <div className="rounded-full h-9 w-9 flex items-center rotate-180 justify-center bg-black dark:bg-zinc-900 transition duration-200 transform hover:scale-105">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 h-6 w-6"
                transition={{ duration: 0.3 }}
              >
                <motion.path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </motion.svg>
            </div>
            <span className="text-lg font-medium">Back</span>
          </button>
          <div className="w-full">
            <PlaceholdersAndVanishInput
              onChange={(e: any) => console.log(e.target.value)}
              onSubmit={() => console.log("submit")}
              placeholders={["Search..."]}
            />
          </div>
        </div>
        <div>
          <button
            className="flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all"
            onClick={() => setIsCalendarOpen(true)}
          >
            <SlCalender />
          </button>
          <CalenderModal
            isOpen={isCalendarOpen}
            closeModal={() => setIsCalendarOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
