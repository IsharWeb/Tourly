import { useParams, Link } from "react-router-dom";
import { countries } from "../data/data";

function CountryArticles() {
  const { countryName } = useParams();
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <h2 className="text-center text-red-500 mt-10">Country not found</h2>;
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{country.name} Articles</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {country.articles.map((article) => (
          <li
            key={article.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <Link
              to={`/article/${country.name}/${article.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
            <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountryArticles;
