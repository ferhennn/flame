import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import HomeSwitcher from "./components/HomeSwitcher.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔥 IMPORTANT FIX */}
        <Route path="/" element={<HomeSwitcher />} />

        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
