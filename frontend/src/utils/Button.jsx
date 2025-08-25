import React from "react";

// Reusable Button component
const Button = ({ name = "Ishar Button", icon }) => {
    return (
        <button
            type="button"
            // Flex layout for icon + text, proportional padding, hover effects
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-gray-100 text-sm text-gray-500 font-medium 
                       hover:bg-gray-200 hover:text-gray-700 
                       transition">
            {icon && <span className="w-4 h-4 flex items-center">{icon}</span>}
            <span>{name}</span>
        </button>
    );
};

export default Button;
