export default function AdSection() {
  const ads = [
    {
      id: 1,
      title: "Dream Vacation Awaits",
      description: "Snag unbeatable deals to top destinations now.",
      bg: "bg-gray-100"
    },
    {
      id: 2,
      title: "Fly Smart, Pay Less",
      description: "Exclusive flight discounts you won't find elsewhere.",
      bg: "bg-gray-200"
    },
    {
      id: 3,
      title: "Stay in Style",
      description: "Luxury hotels at prices that make sense.",
      bg: "bg-gray-100"
    },
    {
      id: 4,
      title: "Your Journey, Our Deals",
      description: "Discover offers tailored for your next adventure.",
      bg: "bg-gray-200"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Main section title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight py-10">
          Travel Ads You Can't Miss
        </h2>
        <p className="pb-8 text-gray-600 max-w-2xl mx-auto">
          Explore more ads, discounts on flights, hotels, and vacation packages —
          hand-picked just for you.
        </p>
      </div>

      {/* Three cards layout */}
      <div className="flex gap-4">
        {ads.slice(0, 3).map((ad, idx) => (
          <div
            key={ad.id}
            className={`
              ${ad.bg} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group p-5 
              flex flex-col justify-between 
              ${idx === 1 ? "flex-[2] min-h-[280px]" : "flex-1 min-h-[220px]"}
            `}
          >
            <h1 className="text-2xl font-serif py-4 font-bold">{ad.title}</h1>
            <p className="text-gray-600 leading-snug">{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
