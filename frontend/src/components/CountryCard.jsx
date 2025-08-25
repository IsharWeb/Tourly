import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {countries.map((country) => (
        <div
          key={country.name}
          onClick={() => navigate(country.link)}
          className="cursor-pointer max-w-xs w-full bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
        >
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-3 text-center">
            <h3 className="text-lg font-medium text-gray-800 hover:font-bold transition">
              {country.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
