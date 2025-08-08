import { Link } from "react-router-dom";

const Navbar = () => {

    
  return (

    <div>

    
 {/* <div className="border-b border-gray-200">
    <nav className="flex space-x-6 max-w-2xl px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => onTabChange('home')}
        className={`py-3 px-2 border-b-2 font-sans text-sm font-medium transition-colors ${
          activeTab === 'home'
            ? 'border-green-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:text-green-500'
        }`}
      >
        Home
      </button>

      {/* The "Saved" tab is rendered conditionally */}
      {/* {showBookmarks && (
        <button
          onClick={() => onTabChange('bookmarks')}
          className={`py-3 px-2 border-b-2 font-sans text-sm font-medium transition-colors ${
            activeTab === 'bookmarks'
              ? 'border-green-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-green-500'
          }`}
        >
          Saved
        </button>
      )}
    </nav>
  </div> */} 


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
    </div>
  );
};
export default Navbar;
