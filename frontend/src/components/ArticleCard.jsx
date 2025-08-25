import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ArticleCard = ({ article }) => {
  if (!article) return null;

  const defaultImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  const rating = article.rating || 4.5;
  const reviewCount = article.reviewCount || 200;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-4 h-4" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full max-w-xs rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition flex flex-col">
      <Link to={`/article/${article.id || "#"}`} className="flex flex-col h-full">
        {/* Image with title overlay */}
        <div className="relative h-48">
          <img
            src={article.image || defaultImage}
            alt={article.title || "Article image"}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
            <h2 className="text-lg font-semibold text-white leading-tight line-clamp-2 min-h-[3rem]">
              {article.title || "Untitled Article"}
            </h2>
          </div>
        </div>

        {/* Description + rating */}
        <div className="p-3 flex flex-col flex-1">
          <div className="flex items-center space-x-1 mb-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-600">({reviewCount})</span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2 flex-1 min-h-[3rem] mb-2">
            {article.description || "No description available."}
          </p>
          <span className="text-green-700 font-medium hover:underline">
            Read More →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
