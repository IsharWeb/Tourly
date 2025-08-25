const TravelCard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TravelCard;