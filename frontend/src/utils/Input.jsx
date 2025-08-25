import React from "react";
import { FiSearch } from "react-icons/fi";

const Input = ({ placeholder = "Search", className = "" }) => {
  return (
    <div className={`flex items-center bg-gray-100 rounded-full px-3 py-1 w-60 ${className}`}>
      <FiSearch className="w-5 h-5 text-gray-500 flex-shrink-0" />
      <input
        type="search"
        placeholder={placeholder}
        className="bg-transparent w-50 flex-1 outline-none p-2 text-base placeholder-gray-500"
      />
    </div>
  );
};

export default Input;
