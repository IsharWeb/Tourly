import { articles } from "../data/data";
import ArticleCard from "../components/articles/ArticleCard";

const Articles = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10">
      {articles.map(a => (
        <ArticleCard
          key={a.id}
          title={a.title}
          image={a.image}
          link={`/articles/${a.id}`}
        />
      ))}
    </div>
  );
};

export default Articles;
