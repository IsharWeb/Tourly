import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">TravelAdvisor</Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/destinations" className="hover:text-blue-600">Destinations</Link></li>
          <li><Link to="/tips" className="hover:text-blue-600">Travel Tips</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
