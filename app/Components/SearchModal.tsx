import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import CalenderModal from "./CalenderModal";
import { useTheme } from "../Context/ThemeContext"; 

interface SearchProps {
  setSearch: (value: boolean) => void;
}

const SearchModal: React.FC<SearchProps> = ({ setSearch }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div
      className={`py-4 px-6 border-b shadow-lg backdrop-blur-lg transition-all duration-300 ${
        theme === "dark"
          ? "glassBg border-gray-700 bg-gray-900 text-white"
          : "bg-white border-gray-300 text-black"
      }`}
    >
      <div className="flex gap-6 items-center justify-between">
        <div className="flex gap-4 flex-1 items-center">
          <button
            type="button"
            className="flex items-center gap-3 transition"
            onClick={() => setSearch(false)}
          >
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center transition duration-200 transform hover:scale-105 ${
                theme === "dark" ? "bg-black dark:bg-zinc-900" : "bg-gray-200"
              }`}
            >
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
                className={`h-5 w-5 rotate-180 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
                transition={{ duration: 0.3 }}
              >
                <motion.path d="M5 12h14" />
                <motion.path d="M13 18l6 -6" />
                <motion.path d="M13 6l6 6" />
              </motion.svg>
            </div>
            <span className="text-lg font-medium">Back</span>
          </button>
          <div className="w-full">
            <PlaceholdersAndVanishInput
              arrow={true}
              onChange={handleSearch}
              placeholders={["Search..."]}
            />
          </div>
        </div>
        <div>
          <button
            className="flex items-center justify-center gap-2 w-8 h-8 rounded-full shadow-md transition-all"
            style={{
              backgroundColor: theme === "dark" ? "#2A2A36" : "#f0f0f0",
              color: theme === "dark" ? "white" : "black",
            }}
            onClick={() => setIsCalendarOpen(true)}
          >
            <SlCalender />
          </button>
          {isCalendarOpen && (
            <CalenderModal
              isOpen={isCalendarOpen}
              closeModal={() => setIsCalendarOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
