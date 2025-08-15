import React, { useState } from 'react';
import ExploreTopics from '../components/ExploreTopics.jsx';

const Home = () => {
  const articles = [1, 2, 3]; // Placeholder articles


  return (
    <div>
      {/* Explore Topics Section */}
      <ExploreTopics />
      <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">

        {/* Articles Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((item) => (
            <div
              key={item}
              tabIndex={0}
              aria-label={`Article ${item}`}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={`Article Cover ${item}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 hover:underline transition-colors duration-200 cursor-pointer">
                  Article Title {item}
                </h2>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  A brief excerpt that mimics Medium's style — minimal, clean, and engaging. This is a placeholder.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Author Name</span>
                  <span>•</span>
                  <span>Oct 23, 2023</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  );
};

export default Home;