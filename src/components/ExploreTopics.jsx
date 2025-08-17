import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";

// Updated travel-related topics
const topics = [
    "France", "Japan", "Brazil", "Italy", "Australia",
    "Beaches", "Mountains", "Historical Sites", "Adventure", "Culture"
];

export default function ExploreTopics() {

    return (

        <div className="font-sans text-gray-800 bg-white">

            {/* Explore Topics Section */}
            <section className="px-6 py-26">

                <div className="flex flex-wrap justify-center gap-3 mb-14">

                    <button
                        className="px-3 py-1.5 rounded-full border border-gray-300 
                         text-sm text-gray-700 font-medium
                         hover:border-gray-500 hover:bg-gray-100 
                         transition"
                    >
                        <FiCompass className="w-5 h-5 text-gray-700 absolute" />
                        <p className="pl-7">Explore destinations</p>
                    </button>

                    {topics.map(topic => (
                        <button
                            key={topic}
                            className="px-4 py-2 rounded-full  bg-gray-100 
                         text-sm text-gray-500 font-medium 
                         hover:border-gray-500 hover:bg-gray-200 
                         hover:text-gray-700
                         transition"
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                <h2 className="text-5xl font-serif font-bold text-center mb-10 tracking-tight">
                    Explore destinations
                </h2>
                <div className="flex justify-center mb-6">
                    <div className="flex items-center bg-gray-100 rounded-full py-3 px-5  w-2xl">
                        <FiSearch className="w-5 h-5 text-gray-500" />
                        <input
                            type="search"
                            placeholder="Search countries or places"
                            className="bg-transparent flex-1 outline-none p-2 text-sm placeholder-gray-500"
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Recommended:{" "}
                    <span className="text-black font-medium px-1">Italy</span>
                    <span className="text-black font-medium px-1">Japan</span>
                    <span className="text-black font-medium px-1">Beaches</span>
                </p>
            </section>
        </div>
    );
}
