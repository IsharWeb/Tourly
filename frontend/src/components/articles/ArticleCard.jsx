// ❌ REMOVE THIS LINE (it's wrong)
// import { articles } from "../data/articles";

// ✅ ArticleCard should only display props:
const ArticleCard = ({ title, image, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <a href={link} className="text-blue-500 underline">Read more</a>
      </div>
    </div>
  );
};

export default ArticleCard;
