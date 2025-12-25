import "./Home.css"
import "./Header.jsx"
import Header from "./Header.jsx";
import CircularGallery from "./StarGallery.jsx";
import d from "../assets/d.jpg"
import one from "../assets/one.mp4"
import two from "../assets/two.mp4"
import three from "../assets/three.mp4"
import four from "../assets/four.mp4"


export default function Home() {
  return (
    <main className="site">
      <Header />
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-media">
          <img
            src="https://picsum.photos/1920/1080?random=1"
            alt="Hero Visual"
          />
        </div>

        <div className="hero-overlay">
          <h1>
            GRAPHIC<br />
            MOTION<br />
            3D
          </h1>
          <p>
            Visual designer crafting identities, motion systems,
            and immersive 3D visuals for bold brands.
          </p>
        </div>
      </section>

      {/* ================= IDENTITY STRIP ================= */}
<section className="identity-strip">

  {/* ITEMS */}
  <div className="identity-item" data-video="graphic">
    <span>Graphic Design</span>
  </div>

  <div className="identity-item" data-video="motion">
    <span>Motion Graphics</span>
  </div>

  <div className="identity-item" data-video="three">
    <span>3D Modelling</span>
  </div>

  <div className="identity-item" data-video="video">
    <span>Video Editing</span>
  </div>

  {/* BACKGROUND VIDEOS */}
  <div className="identity-bg">
    <video
      className="bg-video graphic"
      src={four}
      muted
      loop
      autoPlay
      playsInline
    />
    <video
      className="bg-video motion"
      src={two}
      muted
      loop
      autoPlay
      playsInline
    />
    <video
      className="bg-video three"
      src={three}
      muted
      loop
      autoPlay
      playsInline
    />
    <video
      className="bg-video video"
      src={one}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"/>
  </div>

</section>




      {/* ================= DISCIPLINES ================= */}
      <section className="disciplines">
        <div className="discipline">
          <img src="https://picsum.photos/600/800?random=2" alt="" />
          <h3>Graphic Design</h3>
        </div>

        <div className="discipline">
          <img src="https://picsum.photos/600/800?random=3" alt="" />
          <h3>Motion Graphics</h3>
        </div>

        <div className="discipline">
          <img src={d} alt="" />
          <h3>3D Visual</h3>
        </div>

        <div className="discipline">
          <img src="https://picsum.photos/600/800?random=5" alt="" />
          <h3>Video Editing</h3>
        </div>
      </section>

{/* ================= FEATURED WORK — BENTO ================= */}
<section className="featured-bento">

  <div className="bento-header">
    <h2>
      SELECTED 
      PROJECTS
    </h2>
    <p>
      A curated mix of branding systems,
      motion-led narratives, and 3D explorations.
    </p>
  </div>

  <div className="bento-grid">

    {/* BIG HERO */}
    <div className="bento-item bento-hero">
      <img src="https://picsum.photos/1200/900?random=6" alt="" />
      <span className="bento-label">Featured Project</span>
    </div>

    {/* SMALL STACK */}
    <div className="bento-item">
      <img src="https://picsum.photos/600/800?random=7" alt="" />
    </div>

    <div className="bento-item">
      <img src="https://picsum.photos/600/800?random=8" alt="" />
    </div>

    {/* WIDE */}
    <div className="bento-item bento-wide">
      <img src="https://picsum.photos/1200/600?random=9" alt="" />
    </div>

    {/* TALL 
    <div className="bento-item bento-tall">
      <img src="https://picsum.photos/600/900?random=10" alt="" />
    </div>*/}

  </div>
</section>

<CircularGallery />
{/* ================= MOTION STRIP ================= */}
{/* ================= MOTION STRIP ================= */}
<section className="motion-strip">

  {/* ROW 1 → right to left */}
  <div className="motion-row reverse">
    <div className="motion-track">
      <img src="https://picsum.photos/600/400?random=31" />
      <img src="https://picsum.photos/600/400?random=32" />
      <img src="https://picsum.photos/600/400?random=33" />
      <img src="https://picsum.photos/600/400?random=34" />
      <img src="https://picsum.photos/600/400?random=35" />

      {/* duplicate */}
      <img src="https://picsum.photos/600/400?random=31" />
      <img src="https://picsum.photos/600/400?random=32" />
      <img src="https://picsum.photos/600/400?random=33" />
      <img src="https://picsum.photos/600/400?random=34" />
      <img src="https://picsum.photos/600/400?random=35" />
    </div>
  </div>

  {/* ROW 2 → left to right */}
  <div className="motion-row">
    <div className="motion-track">
      <img src="https://picsum.photos/600/400?random=41" />
      <img src="https://picsum.photos/600/400?random=42" />
      <img src="https://picsum.photos/600/400?random=43" />
      <img src="https://picsum.photos/600/400?random=44" />
      <img src="https://picsum.photos/600/400?random=45" />

      {/* duplicate */}
      <img src="https://picsum.photos/600/400?random=41" />
      <img src="https://picsum.photos/600/400?random=42" />
      <img src="https://picsum.photos/600/400?random=43" />
      <img src="https://picsum.photos/600/400?random=44" />
      <img src="https://picsum.photos/600/400?random=45" />
    </div>
  </div>

</section>




      {/* ================= ABOUT ================= */}
      <section className="about">
        <img src="https://picsum.photos/800/1000?random=12" alt="" />
        <div>
          <h2>ABOUT</h2>
          <p>
            I work across graphic design, motion, and 3D
            to create cohesive visual experiences.
            My focus is rhythm, composition, and clarity —
            visuals that feel intentional, not decorative.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>
          LET’S CREATE<br />
          SOMETHING VISUAL.
        </h2>
        <button>START A PROJECT</button>
      </section>

    </main>
  );
}
