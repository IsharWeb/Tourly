const ArticleCard = ({
  title,
  image,
  link,
  description = "",
  rating = 4.9,
  reviews = 128,
  shortDesc = "",
  featured = false
}) => {
  // Create an array for 5 stars
  const stars = Array(5).fill(0);

  // Ensure description is truncated to about 70 characters
  // const shortDesc =
  //   description.length > 70 ? description.slice(0, 67) + "..." : description;

  return (
    <div className="max-w-md w-100 bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt={title} />
        {featured && (
          <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2 font-medium">{title}</h1>
        <p className="text-gray-600 mb-4 text-sm">{shortDesc}</p>
        <div className="flex items-center mb-3">
          {stars.map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 mr-1 ${i < Math.round(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 
                1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 
                0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 
                00-.364 1.118l1.07 3.292c.3.921-.755 
                1.688-1.54 1.118l-2.8-2.034a1 1 0 
                00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-600 text-sm ml-1">
            {rating} ({reviews} reviews)
          </span>
        </div>
        <a
          href={link}
          target="blank"
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
