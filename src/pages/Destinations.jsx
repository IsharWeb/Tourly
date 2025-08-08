import TravelCard from "../components/TravelCard";

const Destinations = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Top Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TravelCard title="Paris, France" description="Romantic city of lights and Eiffel Tower." image="/assets/paris.jpg" />
        <TravelCard title="Tokyo, Japan" description="Modern meets tradition in Japan’s capital." image="/assets/tokyo.jpg" />
        <TravelCard title="Cappadocia, Turkey" description="Fairy chimneys, caves, and hot air balloons." image="/assets/cappadocia.jpg" />
      </div>
    </div>
  );
};

export default Destinations;