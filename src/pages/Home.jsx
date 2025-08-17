import React from 'react';
import ExploreTopics from '../components/ExploreTopics.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  const articles = [
    {
      id: 1,
      title: "Beach Paradise",
      description: "A sunny escape with golden sands and crystal-clear water.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      reviewCount: 200,
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description: "Trek through beautiful peaks and experience nature up close.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviewCount: 180,
    },
    {
      id: 3,
      title: "City Lights",
      description: "Explore the vibrant nightlife and amazing street food.",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviewCount: 220,
    },
    {
      id: 4,
      title: "Cultural Escape",
      description: "Discover ancient architecture and timeless traditions.",
      image: "https://images.unsplash.com/photo-1601924572058-6f7c96fbc0bb?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviewCount: 250,
    },
  ];

  return (
    <div>
      {/* Explore Topics Section */}
      <ExploreTopics />

      <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

          {/* Articles Section - 4 Cards Responsive */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* View All button */}
          <div className="mt-8 text-center">
            <Link
              to="/articles"
              className="inline-block px-6 py-2 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition"
            >
              View All Articles
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
