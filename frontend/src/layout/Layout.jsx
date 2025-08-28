// src/layouts/MainLayout.jsx
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
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
