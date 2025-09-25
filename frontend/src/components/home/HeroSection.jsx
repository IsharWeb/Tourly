import { useState, useEffect, useRef } from "react";
import Toolbar from "../home/Toolbar.jsx";
import Navbar from "../home/Navbar.jsx";
import Input from "../../utils/Input.jsx";
import { FiSearch } from "react-icons/fi";
import {
  MdExplore,
  MdFavoriteBorder,
  MdPerson,
  MdFlight,
  MdHotel,
  MdBeachAccess,
  MdDirectionsBus,
  MdTune,
} from "react-icons/md";

export default function HeroSection() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY.current) setShowNavbar(true);
      else if (y > lastY.current && y > 80) setShowNavbar(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {showNavbar && <Navbar />}

      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 min-h-screen border-b border-gray-200">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-12 tracking-tight">
          Find Your Perfect Tour
        </h1>

        {/* Travel Icons Row */}
        <div className="flex flex-wrap justify-center gap-10 mb-14 text-gray-600">
          {[
            { icon: MdFlight, label: "Flights" },
            { icon: MdHotel, label: "Hotels" },
            { icon: MdBeachAccess, label: "Beaches" },
            { icon: MdDirectionsBus, label: "Tours" },
            { icon: MdExplore, label: "Explore" },
            { icon: MdFavoriteBorder, label: "Favorites" },
            { icon: MdPerson, label: "Profile" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group transition"
            >
              <item.icon className="w-7 h-7 text-gray-500 transition group-hover:text-gray-700" />
              <span className="mt-1 text-sm font-medium text-gray-500 transition group-hover:text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center bg-gray-100 rounded-full p-5 h-14 w-full shadow-sm">
            {/* Left Search Icon */}
            <FiSearch className="w-7 h-7 text-gray-500 transition group-hover:text-gray-700" />

            {/* Input */}
            <Input
              placeholder="Search for tours, cities, or experiences..."
              className="flex-1 bg-transparent outline-none px-3 py-2.5 text-base placeholder-gray-500"
            />

            {/* Right Filter Icon */}
            <MdTune className="w-7 h-7 text-gray-500 transition group-hover:text-gray-700" />
          </div>

        </div>

      </section>

      {!showNavbar && <Toolbar />}
    </div>
  );
}
