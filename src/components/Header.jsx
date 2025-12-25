import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      {/* LEFT */}
      <div className="header-left">
        <span className="logo">YOURNAME</span>
      </div>

      {/* CENTER */}
      <nav className="header-center">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* RIGHT */}
      <div className="header-right">
        <button className="header-cta">Let’s Talk</button>
      </div>
    </header>
  );
}
