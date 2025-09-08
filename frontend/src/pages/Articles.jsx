import React from "react";
import { useParams, Link } from "react-router-dom";
import CountryCard from "../components/articles/CountryCard.jsx";
import ArticleCard from "../components/articles/ArticleCard.jsx";
import { countries, articles } from "../data/data.js";

const Articles = () => {
  const { countryName } = useParams();

  // Normalize countryName (first letter uppercase for display)
  const selectedCountry = countryName
    ? countries.find(
        (c) => c.name.toLowerCase() === countryName.toLowerCase()
      )
    : null;

  // Filter articles
  const filteredArticles = countryName
    ? articles.filter(
        (article) => article.country.toLowerCase() === countryName.toLowerCase()
      )
    : articles;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        {selectedCountry
          ? `Articles about ${selectedCountry.name}`
          : "Explore Articles by Country"}
      </h1>

      {/* Show all countries if no specific one is selected */}
      {!selectedCountry && (
        <section className="mb-16">
          <CountryCard countries={countries} />
        </section>
      )}

      {/* Articles */}
      <section>
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                image={article.image}
                shortDesc={article.shortDesc}
                // Link goes to /article/:countryName/:id
                link={`/article/${article.country.toLowerCase()}/${article.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No articles available for this country yet.
          </p>
        )}
      </section>

      {/* Back link */}
      {selectedCountry && (
        <div className="mt-12 text-center">
          <Link
            to="/articles"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            ← Back to All Articles
          </Link>
        </div>
      )}
    </div>
  );
};

export default Articles;
