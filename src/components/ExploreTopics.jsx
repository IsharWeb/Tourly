import React from "react";
import { FiSearch } from "react-icons/fi";

// import { Search } from "lucide-react"; // Assuming you're using lucide-react for icons

const topics = [
    "Life", "World", "Technology", "Software Development",
    "Culture", "Media", "Self Improvement", "Society", "Work", "Programming"
];

export default function ExploreTopics() {

    return (

        <div className="font-sans text-gray-800 bg-white">

            {/* Explore Topics Section */}
            <section className="px-6 py-6">

                <div className="flex flex-wrap justify-center gap-3 mb-14">

                    <button
                        className="px-3 py-1.5 rounded-full border border-gray-300 
                         text-sm text-gray-700 font-medium
                         hover:border-gray-500 hover:bg-gray-100 
                         transition"
                    >
                        <FiSearch className="w-5 h-5 text-gray-500 absolute" />
                        <p className="pl-6">Explore topics</p>
                    </button>

                    {topics.map(topic => (
                        <button
                            key={topic}
                            className="px-5 py-1.5 rounded-full  bg-gray-100 
                         text-sm text-gray-700 font-medium 
                         hover:border-gray-500 hover:bg-gray-200 
                         transition"
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                <h2 className="text-5xl font-serif font-bold text-center mb-10 tracking-tight">
                    Explore topics
                </h2>
                <div className="flex justify-center mb-6">
                    <div className="flex items-center bg-gray-100 rounded-full py-3 px-5  w-2xl">
                        <FiSearch className="w-5 h-5 text-gray-500" />
                        <input
                            type="search"
                            placeholder="Search all topics"
                            className="bg-transparent flex-1 outline-none p-2 text-sm placeholder-gray-500"
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Recommended:{" "}
                    <span className="text-black font-medium px-1">Programming</span>
                    <span className="text-black font-medium px-1">Data Science</span>
                    <span className="text-black font-medium px-1">Technology</span>
                </p>
            </section>
        </div>
    );
}
