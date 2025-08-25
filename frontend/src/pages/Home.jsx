import React from "react";
import { Link } from "react-router-dom";
import AdsSection from "../components/AdsSection.jsx";
import CountryCard from "../components/CountryCard.jsx";
import ArticleCard from "../components/ArticleCard.jsx";

const Home = () => {
  const countries = [
    {
      name: "France",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
      link: "/articles/france",
    },
    { name: "Japan", image: "/images/japan.jpg", link: "/articles/japan" },
    { name: "Italy", image: "/images/italy.jpg", link: "/articles/italy" },
  ];

  const articles = [
    { id: 1, title: "Paris in Spring", image: "/images/paris.jpg", link: "/articles/paris" },
    { id: 2, title: "Tokyo Nights", image: "/images/tokyo.jpg", link: "/articles/tokyo" },
    { id: 3, title: "Rome Adventures", image: "/images/rome.jpg", link: "/articles/rome" },
  ];

  return (
    <div className="pt-48">
      {/* Ads Section */}
      <AdsSection />

      {/* Countries Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore by Country</h2>
        <CountryCard countries={countries} />
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
