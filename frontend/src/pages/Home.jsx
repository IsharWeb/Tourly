import React from "react";
import { Link } from "react-router-dom";
import AdsSection from "../components/AdsSection.jsx";
import CountryCard from "../components/articles/CountryCard.jsx";
import ArticleCard from "../components/articles/ArticleCard.jsx";
import { articles, countries } from "../data/data.js";
import Button from "../utils/Button.jsx";

const Home = () => {
  return (
    <div className="w-full">

      {/* Countries Section */}
      <section className="max-w-7xl mx-auto px-2 border-b border-gray-200 py-20 bg-gray-50">
        <CountryCard countries={countries} />
      </section>

      {/* Ads Section */}
      <section className="w-full bg-white border-b border-gray-200 py-20">
        <AdsSection />
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              image={article.image}
              shortDesc={article.shortDesc}
              link={article.link}
            />
          ))}
        </div>

        <div className="mt-10 text-center space-x-4">
          <Button />
          <Link
            to="/articles"
            className="inline-block px-6 py-2 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition"
          >
            View All Articles
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
