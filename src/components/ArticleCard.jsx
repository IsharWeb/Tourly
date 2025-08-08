import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
    <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{article.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{article.description}</p>
      <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">
        Read More →
      </Link>
    </div>
  </div>
);
export default ArticleCard;
