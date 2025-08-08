import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Tips from './pages/Tips'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Admin from "./pages/Admin";


function App() {
  return (

    <Router>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
