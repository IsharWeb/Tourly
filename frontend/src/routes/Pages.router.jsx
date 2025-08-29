import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Tips from "../pages/Tips";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import Admin from "../pages/Admin";
import Layout from "../layout/Layout";

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
          <Route path="/articles/:id" element={<Article />} /> {/* Dynamic article */}
        </Route>

        {/* Route without Navbar + Footer */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default PagesRouter;
