import React from "react";
import { Link } from "react-router-dom";
import AdsSection from "../components/AdsSection.jsx";
import CountryCard from "../components/articles/CountryCard.jsx";
import ArticleCard from "../components/articles/ArticleCard.jsx";
import { articles , countries } from "../data/articles.js";

const Home = () => {

  return (
    <div className="py-30">

      {/* Countries Section */}
      <section className="max-w-7xl px-2 mx-auto w-full border-b border-gray-200 py-30 bg-gray-50">
        <CountryCard countries={countries} />
      </section>

      {/* Ads Section */}
      <section className="w-full bg-white border-b border-gray-200 py-30">
        <AdsSection />
      </section>

      {/* Articles Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Articles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              image={article.image}
              link={article.link}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
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
