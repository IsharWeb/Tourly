import { useParams } from "react-router-dom";
import { articles } from "../data/data";
import ArticleCard from "../components/articles/ArticleCard";

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id); // If id is string in data

  if (!article) {
    return (
      <div className="text-center mt-20 py-30 text-red-500 text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
        Article not found.
      </div>
    );
  }

  return (
    <>
      {/* Article read section */}
      {/* here we need semple article                  lesson when user click on articlecard to go directly in article page where showr article title and despriptionn images i mean show me all post about the card      but when i click onn car to show me that errr "The server is configured with a public base URL of /Tourly/ - did you mean to visit /Tourly/article/italy instead?"   when i click on that link to show                   Tourly
Search
Write
Subscribe
Find Your Perfect Tour
Flights
Hotels
Beaches
Tours
Search for tours, cities, or experiences...
Tourly
Article not found.
© 2025 TravelAdvisor by Ishar. All rights reserved.*/}
      <div className="max-w-3xl mx-auto px-10 py-30">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-serif">
          {article.title}
        </h1>
        <img src={article.image} alt={article.title} className="rounded-lg mb-6" />
        <p className="text-gray-700 dark:text-gray-200">{article.content}</p>
      </div>

      {/* here we need semple article                  lesson when user click on articlecard to go directly in article page where showr article title and despriptionn images i mean show me all post about the card*/}
      <div className="flex flex-wrap justify-center gap-6">
        {articles
          .filter(a => a.id !== article.id) // don't show current article again
          .map(a => (
            <ArticleCard
              key={a.id}
              title={a.title}
              image={a.image}
              link={`/articles/${a.id}`}
            />
          ))}
      </div>


      {/* Recommended articles  show me below */}

    </>
  );
};

export default Article;
