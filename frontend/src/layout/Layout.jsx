// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
import HeroSection from "../components/HeroSection";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
        <Outlet /> {/* This will render child routes */}
      </main>
      <Footer />
    </div>
  );
}
