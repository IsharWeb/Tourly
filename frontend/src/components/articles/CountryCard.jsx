import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdChevronLeft,
  MdChevronRight
} from "react-icons/md";

const CountryCard = ({ countries }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollDirection = useRef(1); // 1 = right, -1 = left

  useEffect(() => {
    startScrolling();
    return stopScrolling; // cleanup on unmount
  }, []);

  const startScrolling = () => {
    stopScrolling(); // clear previous interval if any
    scrollInterval.current = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;

      // Reverse scroll direction at ends
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollDirection.current = -1;
      } else if (container.scrollLeft <= 0) {
        scrollDirection.current = 1;
      }

      // Instant step scroll for smooth visual effect
      container.scrollBy({ left: scrollDirection.current * 2 });
    }, 20); // slightly slower interval for smoothness
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  // Scroll manually by ~4 cards
  const manualScroll = (dir) => {
    stopScrolling(); // pause auto-scroll when manually scrolling
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector(".country-card");
    const cardWidth = card ? card.offsetWidth : 300;
    container.scrollBy({ left: dir * cardWidth * 3, behavior: "smooth" });
  };

  return (
    <>
      <div className="text-center px-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight py-10">
          Travel Deals You Can't Miss
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore exclusive discounts on flights, hotels, and vacation packages —
          hand-picked just for you.
        </p>
      </div>


      <div className="relative max-w-screen-xl mx-auto py-8  group"

        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
      >

        <div
          className=""
          
        >


          {/* Left Arrow */}
          <button
            onClick={() => manualScroll(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MdChevronLeft className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hidden"
          >
            <div className="flex flex-nowrap gap-6">
              {countries.map((country) => (
                <div
                  key={country.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(country.link)}
                  onKeyDown={(e) => e.key === "Enter" && navigate(country.link)}
                  className="country-card cursor-pointer max-w-xs w-100 bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden relative group"
                >
                  {/* Image container */}
                  <div className="w-full h-96 relative">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 ">
                      <h3 className="text-3xl font-serif font-bold">{country.name}</h3>
                      <p className="text-sm">{country.description}</p>

                    </div>
                    <button>ksjadflsadkjf</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => manualScroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MdChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default CountryCard;
