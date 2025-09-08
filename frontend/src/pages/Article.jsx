import { useParams, Link } from "react-router-dom";
import { articles } from "../data/data";
import ArticleCard from "../components/articles/ArticleCard";

const Article = () => {
  const { countryName, id } = useParams();

  // Find the article by both country and id
  const article = articles.find(
    (a) =>
      a.id.toString() === id &&
      a.country.toLowerCase() === countryName.toLowerCase()
  );

  if (!article) {
    return (
      <div className="text-center mt-20 py-30 text-red-500 text-4xl sm:text-6xl font-bold mb-8 tracking-tight">
        Article not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Article details */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 font-serif">
        {article.title}
      </h1>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded-lg mb-8"
      />
      <p className="text-lg leading-relaxed text-gray-700 mb-12">
        {article.content}
      </p>

      {/* Related articles from the same country */}
      <h2 className="text-2xl font-semibold mb-6">
        More from {article.country}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles
          .filter(
            (a) =>
              a.id !== article.id &&
              a.country.toLowerCase() === article.country.toLowerCase()
          )
          .map((a) => (
            <ArticleCard
              key={a.id}
              id={a.id}
              countryName={a.country}
              title={a.title}
              image={a.image}
              shortDesc={a.shortDesc}
            />
          ))}
      </div>

      {/* Back button */}
      <div className="mt-12 text-center">
        <Link
          to={`/articles/${article.country.toLowerCase()}`}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          ← Back to {article.country} Articles
        </Link>
      </div>
    </div>
  );
};

export default Article;
