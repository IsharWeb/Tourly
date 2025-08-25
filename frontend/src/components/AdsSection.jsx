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
    <section className="w-full bg-white border-t border-gray-200 py-10">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Main section title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Travel Deals You Can't Miss
          </h2>
          <p className="mt-2 text-gray-600 text-sm max-w-2xl mx-auto">
            Explore exclusive discounts on flights, hotels, and vacation packages —
            hand-picked just for you.
          </p>
        </div>

        {/* Inline scrolling cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className={`min-w-[240px] p-5 rounded-lg ${ad.bg} flex flex-col items-start justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group`}
            >
              <h3 className="text-gray-900 font-semibold text-base mb-2 tracking-tight group-hover:font-bold transition">
                {ad.title}
              </h3>
              <p className="text-gray-700 text-sm leading-snug">
                {ad.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
