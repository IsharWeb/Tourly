import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import Tips from "../pages/Tips";
import Blog from "../pages/Blog";
import Article from "../pages/Article";
import Admin from "../pages/Admin";
import Layout from "../layout/Layout";

// Main router component for the application
function PagesRouter() {
  return (
    <Router basename="/Tourly">
      <Routes>
        {/* Routes with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<Article />} />
          <Route path="/blog/category/:category" element={<Blog />} />
          <Route path="/blog/tag/:tag" element={<Blog />} />
          <Route path="/blog/search" element={<Blog />} />
          <Route path="/blog/search/:query" element={<Blog />} />
          <Route path="/blog/author/:author" element={<Blog />} />
          <Route path="/blog/author/:author/:articleId" element={<Article />} />
          <Route path="/blog/category/:category/:articleId" element={<Article />} />
          <Route path="/blog/tag/:tag/:articleId" element={<Article />} />
          <Route path="/blog/search/:query/:articleId" element={<Article />} />
          <Route path="/blog/author/:author/search/:query" element={<Blog />} />
          <Route path="/blog/author/:author/category/:category" element={<Blog />} />         
        </Route>

        {/* Route without Navbar + Footer */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default PagesRouter;
