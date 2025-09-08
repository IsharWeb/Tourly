// src/data/data.js

export const countries = [
  {
    name: "Japan",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tokyo_Montage_2015.jpg",
    articles: [
      {
        id: 1,
        title: "Exploring Kyoto",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kyoto_Montage_2015.jpg",
        shortDesc: "Temples, shrines, and serene gardens.",
        content: "Kyoto offers a peaceful atmosphere and beautiful cultural heritage..."
      },
      {
        id: 2,
        title: "Discovering Tokyo",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
        shortDesc: "A fusion of tradition and modern life.",
        content: "Tokyo blends traditional culture with cutting-edge modern life..."
      }
    ]
  },
  {
    name: "France",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Paris_Montage_2014.jpg",
    articles: [
      {
        id: 3,
        title: "Paris Highlights",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Paris_Montage_2014.jpg",
        shortDesc: "City of Light, romance, and history.",
        content: "Paris offers stunning architecture, museums, and romantic streets..."
      },
      {
        id: 4,
        title: "French Riviera Escape",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Nice_France.jpg",
        shortDesc: "Sunny beaches and glamorous resorts.",
        content: "The French Riviera offers Mediterranean beauty and luxury..."
      }
    ]
  },
  // ... keep your other countries (USA, Italy, etc.)
];

// 👉 Flatten all articles into a single array
export const articles = countries.flatMap((country) =>
  country.articles.map((article) => ({
    ...article,
    country: country.name, // attach country for filtering
  }))
);
