import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countries } from "../data/data";
import ArticleCard from "../components/articles/ArticleCard";

const Countries = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const selectedCountry = countryName || null;

  const filteredArticles = selectedCountry
    ? countries.find(
        (c) => c.name.toLowerCase() === selectedCountry.toLowerCase()
      )?.articles || []
    : [];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Section title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Explore Countries</h1>
        <p className="text-gray-600 mt-2">
          Select a country to see travel articles, guides, and hidden gems.
        </p>
      </div>

      {/* Country cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {countries.map((country) => (
          <div
            key={country.name}
            onClick={() => navigate(`/countries/${country.name.toLowerCase()}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" && navigate(`/countries/${country.name.toLowerCase()}`)
            }
            className={`cursor-pointer bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition transform hover:scale-105 border-2 ${
              selectedCountry &&
              selectedCountry.toLowerCase() === country.name.toLowerCase()
                ? "border-indigo-500"
                : "border-transparent"
            }`}
          >
            <div className="h-56 w-full relative">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h3 className="text-2xl font-bold">{country.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Articles section */}
      {selectedCountry && (
        <>
          <h2 className="text-3xl font-bold mb-6">
            Articles about {selectedCountry}
          </h2>
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500">
              No articles available for {selectedCountry}.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  image={article.image}
                  link={`/article/${article.id}`}
                  shortDesc={article.shortDesc}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Countries;
