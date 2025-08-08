import { useState } from "react";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";


















const Blog = () => {


    const categories = ["All", ...new Set(articles.map(a => a.category))];
    const [activeCategory, setActiveCategory] = useState("All");





    const [search, setSearch] = useState("");

    const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) &&
        (activeCategory === "All" || article.category === activeCategory)
    );

    return (

        <div className="max-w-6xl mx-auto px-4 py-10">



            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Travel Blog</h1>

            <input
                type="text"
                placeholder="Search articles..."
                className="w-full p-3 mb-6 border rounded-md dark:bg-gray-700 dark:text-white"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />


            <div className="flex gap-2 mb-4 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`px-3 py-1 text-sm rounded border ${cat === activeCategory ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-white"
                            }`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
                {filtered.length === 0 && (
                    <p className="text-gray-500 dark:text-gray-300">No articles found.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;