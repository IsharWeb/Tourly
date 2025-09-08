import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ title, image, link, shortDesc }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{shortDesc}</p>
        <Link 
          to={link} 
          className="text-indigo-600 font-bold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
