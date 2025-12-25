import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      {/* LEFT */}
      <div className="header-left">
        <span className="logo">AYUSH RAJPUT</span>
      </div>

      {/* CENTER */}
      <nav className="header-center">
        <Link to="/">HOME</Link>
        <Link to="/work">WORK</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>

      {/* RIGHT */}
      <div className="header-right">
        <button className="header-cta">Let’s Talk</button>
      </div>
    </header>
  );
}
