import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About"
import Contact from "./components/Contact"
import HomeSwitcher from "./components/HomeSwitcher";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSwitcher />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
