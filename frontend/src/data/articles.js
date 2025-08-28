const articles = [
  {
    id: 1,
    title: "Exploring Bali: A Tropical Paradise",
    description: "Discover beaches, temples, and local food in Bali.",
    content: "Full blog content for Bali goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Asia",
    date: "2025-08-20"
  },
  {
    id: 2,
    title: "Backpacking Through Europe on a Budget",
    description: "How to see Europe without spending too much.",
    content: "Full blog content for Europe goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Europe",
    date: "2025-08-15"
  },
  {
    id: 3,
    title: "Top 5 Tips for First-Time Travelers",
    description: "Avoid mistakes and travel smarter.",
    content: "Full blog content for first-timers goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Tips",
    date: "2025-08-10"
  },
  {
    id: 4,
    title: "A Foodie's Guide to Tokyo",
    description: "Must-try dishes and where to find them in Tokyo.",
    content: "Full blog content for Tokyo goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Asia",
    date: "2025-08-05"
  },
  {
    id: 5,
    title: "The Best Hiking Trails in the USA",
    description: "Explore nature with these top hiking spots.",
    content: "Full blog content for USA hiking goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "North America",
    date: "2025-08-01"
  },
  {
    id: 6,
    title: "Cultural Highlights of Morocco",
    description: "Experience the rich culture and history of Morocco.",
    content: "Full blog content for Morocco goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Africa",
    date: "2025-07-28"
  },
  {
    id: 7,
    title: "Island Hopping in Greece",
    description: "Discover the beauty of Greek islands.",
    content: "Full blog content for Greece goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Europe",
    date: "2025-07-25"
  },
  {
    id: 8,
    title: "Wildlife Safari in Kenya",
    description: "Tips for an unforgettable safari experience.",
    content: "Full blog content for Kenya goes here...",
    image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    category: "Africa",
    date: "2025-07-20"
  }


];

const countries = [
  {
    name: "France",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ",
    link: "/articles/france",
  },
  { name: "Japan", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/japan" },
  { name: "Italy", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/italy" },
  { name: "Canada", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/italy" },
  { name: "USA", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/italy" }, { name: "Iran", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/italy" },
];

// const articles = [
//   { id: 1, title: "Paris in Spring", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", link: "/articles/paris" },
//   { id: 2, title: "Tokyo Nights", image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQsWi5zbz8u9mmAyqXNVlgz6zal7uRFNOlUFCB9a5As0fRVPqU4OwtyfYd8xDAQGWkTOFkrmHnnyffL3Xq0aGLHqh1sABtPvZW2diYMjQ", link: "/articles/tokyo" },
//   { id: 3, title: "Rome Adventures", image: "/images/rome.jpg", link: "/articles/rome" },
//   { id: 4, title: "Uae", image: "/images/rome.jpg", link: "/articles/rome" },

// ];

export {
  articles,
  countries
};
