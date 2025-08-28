import { useState, useEffect, useRef } from "react";
import Toolbar from "../home/Toolbar.jsx";
import Navbar from "../home/Navbar.jsx";
import Input from "../../utils/Input.jsx";
import { MdExplore, MdFavoriteBorder, MdPerson, MdFlight, MdHotel, MdBeachAccess, MdDirectionsBus, MdTune } from "react-icons/md";

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

      <section className="flex flex-col border-b border-gray-200 items-center justify-center px-4 sm:px-6 py-24 min-h-screen text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
          Find Your Perfect Tour
        </h1>

        {/* Travel Icons Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-500 text-3xl sm:text-4xl">
          {[
            { icon: MdFlight, label: "Flights" },
            { icon: MdHotel, label: "Hotels" },
            { icon: MdBeachAccess, label: "Beaches" },
            { icon: MdDirectionsBus, label: "Tours" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:text-gray-600 transition-colors"
            >
              <item.icon className="w-6 h-56text-gray-500 flex-shrink-0" />
              <span className="mt-1 text-sm sm:text-base font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-lg">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 sm:px-6 sm:py-3 text-lg sm:text-2xl">
            <Input
              placeholder="Search for tours, cities, or experiences..."
              className="flex-1 bg-transparent outline-none text-lg sm:text-2xl placeholder-gray-500"
            />
            {/* Filter Icon */}
            <MdTune className="w-6 h-6 text-gray-500 transition hover:text-gray-600" />
          </div>
        </div>
      </section>

      {!showNavbar && <Toolbar />}
    </div>
  );
}
