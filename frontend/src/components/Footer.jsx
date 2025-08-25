const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TravelAdvisor by Ishar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;