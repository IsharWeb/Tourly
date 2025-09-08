import React from "react";
import { useParams, Link } from "react-router-dom";
import { countries } from "../data/data.js";

const ArticleDetail = () => {
  const { countryName, articleId } = useParams();

  // Find country
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) return <h2 className="text-center py-20">Country not found</h2>;

  // Find article
  const article = country.articles.find(
    (a) => a.id === parseInt(articleId)
  );

  if (!article)
    return <h2 className="text-center py-20">Article not found</h2>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main Article */}
      <article className="lg:col-span-2">
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl mb-8 shadow"
        />
        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {article.content}
        </p>
      </article>

      {/* Sidebar */}
      <aside className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            More from {country.name}
          </h2>
          <ul className="space-y-3">
            {country.articles
              .filter((a) => a.id !== article.id)
              .map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/article/${country.name}/${a.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">All Countries</h2>
          <ul className="space-y-2">
            {countries.map((c) => (
              <li key={c.name}>
                <Link
                  to={`/articles/${c.name}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ArticleDetail;
