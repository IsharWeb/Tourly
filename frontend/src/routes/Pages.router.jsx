import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Tips from "../pages/Tips.jsx";
import Articles from "../pages/Articles.jsx";
import Countries from "../pages/Countries.jsx";
import Article from "../pages/Article.jsx"; // you already have this
import Admin from "../pages/Admin.jsx";
import Layout from "../layout/Layout.jsx";

// New pages
import CountryArticles from "../pages/CountryArticles.jsx";
import ArticleDetail from "../pages/ArticleDetail.jsx";

function PagesRouter() {
  return (
    <Router basename="/Tourly">
      <Routes>
        {/* Routes with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/countries" element={<Countries />} />

          {/* New dynamic routes */}
          <Route path="/articles/:countryName" element={<CountryArticles />} />
          <Route
            path="/article/:countryName/:articleId"
            element={<ArticleDetail />}
          />

          {/* Keep old single-article route if needed */}
          <Route path="/article/:id" element={<Article />} />
        </Route>

        {/* Route without Navbar + Footer */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default PagesRouter;
