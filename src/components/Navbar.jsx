import { FiSearch } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Navbar() {

  return (
    <nav className="w-full position-sticky border-b border-gray-200 bg-white">
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-16">
          <div className="flex justify-flex-start  items-center gap-6">

            {/* Logo - Medium style */}
            <h1 className="text-3xl font-serif font-bold tracking-tight">Medium</h1>

            {/* Search Icon */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-60">
              <FiSearch className="w-5 h-5 text-gray-500" />
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent flex-1 outline-none p-2 text-sm placeholder-gray-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-flex-end  items-center  gap-12">
            <div className="flex items-center gap-6">

              {/* Write Icon + Text */}
              <div className="flex items-center gap-1 cursor-pointer">
                <HiOutlinePencilAlt className="w-6 h-6 m-0 text-gray-500" />
                <button className="text-sm text-gray-700 hover:text-black transition">Write</button>
              </div>
              <button className="text-sm font-medium text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

