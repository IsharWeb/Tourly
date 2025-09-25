import { useState, useEffect, useRef } from "react";
// Components
import Toolbar from "../home/Toolbar.jsx";
import Navbar from "../home/Navbar.jsx";
import Input from "../../utils/Input.jsx";
// Icons
import { 
  MdFlight, 
  MdHotel, 
  MdBeachAccess, 
  MdDirectionsBus, 
  MdHiking, 
  MdDirectionsBike, 
  MdPool, 
  MdMap, 
  MdCameraAlt, 
  MdLocalDining, 
  MdTrain, 
  MdSubway, 
  MdDirectionsBoat, // Updated: Boat icon
  MdDirectionsCar,  // Updated: Car icon
  MdDirectionsWalk, // Updated: Walking icon
  MdTune 
} from "react-icons/md";

export default function HeroSection() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY.current) setShowNavbar(true); // Scroll up → show navbar
      else if (y > lastY.current && y > 80) setShowNavbar(false); // Scroll down → hide navbar
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Travel-related icons
  const travelOptions = [
    { icon: MdFlight, label: "Flights" },
    { icon: MdHotel, label: "Hotels" },
    { icon: MdBeachAccess, label: "Beaches" },
    { icon: MdDirectionsBus, label: "Tours" },
    { icon: MdHiking, label: "Hiking" },
    { icon: MdDirectionsBike, label: "Bike Tours" },
    { icon: MdPool, label: "Resorts" },
    { icon: MdMap, label: "Guides" },
    { icon: MdCameraAlt, label: "Sightseeing" },
    { icon: MdLocalDining, label: "Food" },
    { icon: MdTrain, label: "Train Travel" },
    { icon: MdSubway, label: "City Transport" },
    { icon: MdDirectionsBoat, label: "Cruises" },
    { icon: MdDirectionsCar, label: "Car Rentals" },
    { icon: MdDirectionsWalk, label: "Walking Tours" }
  ];

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      {showNavbar && <Navbar />}

      {/* Hero Section */}
      <section className="flex flex-col border-b border-gray-200 items-center justify-center px-4 sm:px-6 py-24 min-h-screen text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
          Find Your Perfect Tour
        </h1>

        {/* Travel Icons Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-500 text-3xl sm:text-4xl">
          {travelOptions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:text-gray-600 transition-colors"
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
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

      {/* Toolbar for hidden navbar */}
      {!showNavbar && <Toolbar />}
    </div>
  );
}
