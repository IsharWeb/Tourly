import { useParams } from "react-router-dom";
import articles from "../data/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div className="text-center mt-20 text-red-500">Article not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{article.title}</h1>
      <img src={article.image} alt={article.title} className="rounded-lg mb-6" />
      <p className="text-gray-700 dark:text-gray-200">{article.content}</p>
    </div>
  );
};

export default Article;