import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640); // sm breakpoint

  // handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setShow(false);
      else setShow(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // handle resize to switch layouts
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`w-full border-b border-gray-200 bg-white fixed top-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-3">
        <div className="flex justify-between items-center h-16">

          {isDesktop ? (
            /* ===== DESKTOP NAV ===== */
            <>
              {/* Left side */}
              <div className="flex items-center gap-6">
                <h1 className="text-3xl font-serif font-bold">Tourly</h1>
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-60">
                  <FiSearch className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent w-50 flex-1 outline-none p-2 text-base placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center  gap-8">
                <div className="flex items-center gap-1 cursor-pointer">
                    
                  <HiOutlinePencilAlt className="
                         hover:text-gray-700 w-6 h-6 text-gray-500" />
                  <button className="text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer font-medium">
                    Write
                  </button>
                </div>
                <button className=" 
                         px-4 py-2 rounded-full  bg-gray-100 
                         text-sm text-gray-500 font-medium 
                         hover:border-gray-500 hover:bg-gray-200 
                         hover:text-gray-700
                         transition">
                  Subscribe
                </button>

               
                <MdOutlineDarkMode className="hover:text-gray-700
                w-6 h-6 text-gray-500 cursor-pointer " />
              </div>
            </>
          ) : (
            /* ===== MOBILE NAV ===== */
            <>
              {/* Left side */}
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-serif font-bold">T</h1>
                <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 w-34">
                  <FiSearch className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-24 bg-transparent flex-1 outline-none p-1 text-sm placeholder-gray-500"
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
