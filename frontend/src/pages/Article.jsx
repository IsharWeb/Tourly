import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
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
      <div className="max-w-3xl mx-auto px-10 py-30">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-serif">
          {article.title}
        </h1>
        <img src={article.image} alt={article.title} className="rounded-lg mb-6" />
        <p className="text-gray-700 dark:text-gray-200">{article.content}</p>
      </div>

      {/* Recommended articles */}
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
    </>
  );
};

export default Article;
