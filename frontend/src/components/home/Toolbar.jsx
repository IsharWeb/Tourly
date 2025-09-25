import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode, MdTune } from "react-icons/md";

export default function Toolbar() {
  return (
    <div className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <h1 className="text-xl sm:text-3xl font-serif font-bold">Tourly</h1>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <FiSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
            <MdTune className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
            <MdOutlineDarkMode className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
