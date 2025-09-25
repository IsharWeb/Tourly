import { FiSearch } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  const isDesktop = window.innerWidth >= 640; // Direct check instead of state

  return (
    <nav className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex justify-between items-center h-16">
          {isDesktop ? (
            /* ===== DESKTOP NAV ===== */
            <>
              {/* Left side */}
              <div className="flex items-center gap-6">
          <h1 className="text-xl sm:text-3xl font-serif font-bold">Tourly</h1>
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-72">
                  <FiSearch className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent flex-1 outline-none px-2 py-1.5 text-base placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-1 cursor-pointer group">
                  <HiOutlinePencilAlt className="w-6 h-6 text-gray-500 transition group-hover:text-gray-600" />
                  <button className="text-sm text-gray-500 font-medium transition group-hover:text-gray-600">
                    Write
                  </button>
                </div>

                <button className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-600 font-medium hover:bg-gray-200 hover:text-gray-700 transition">
                  Subscribe
                </button>

                <IoNotificationsOutline className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
                <MdOutlineDarkMode className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </>
          ) : (
            /* ===== MOBILE NAV ===== */
            <>
              {/* Left side */}
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-serif font-bold">Tourly</h1>
                <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 w-32">
                  <FiSearch className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-20 bg-transparent flex-1 outline-none p-1 text-xs placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                <HiOutlinePencilAlt className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
                <IoNotificationsOutline className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
                <MdOutlineDarkMode className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
