    import TravelCard from "../components/TravelCard";


const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore the World</h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover amazing places, tips, and travel guides to make your journey unforgettable.
      </p>
      <img
        src="/assets/travel-banner.jpg"
        alt="Travel"
        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
      />
    <h1>cads</h1>

<TravelCard
  title="Bali, Indonesia"
  description="A tropical paradise full of adventure, temples, and beaches."
  image="/assets/bali.jpg"
/>
    </div>
  );
};

export default Home;