import React from "react";

const Input = () => {
    return (
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-60">
            <FiSearch className="w-5 h-5 text-gray-500" />
            <input
                type="search"
                placeholder="Search"
                className="bg-transparent flex-1 outline-none p-2 text-sm placeholder-gray-500"
            />
        </div>
    )
}

export default Input