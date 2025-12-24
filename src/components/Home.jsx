import "./Home.css";




export default function Home() {
  return (
    <main className="site">

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
        <span>Graphic Design</span>
        <span>Motion Graphics</span>
        <span>3D Modelling</span>
        <span>Video Editing</span>
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
          <img src="https://picsum.photos/600/800?random=4" alt="" />
          <h3>3D Visual</h3>
        </div>

        <div className="discipline">
          <img src="https://picsum.photos/600/800?random=5" alt="" />
          <h3>Video Editing</h3>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="featured">
        <div className="featured-text">
          <h2>
            SELECTED<br />
            PROJECTS
          </h2>
          <p>
            A curated mix of branding systems,
            motion-led narratives, and 3D explorations.
          </p>
        </div>

        <div className="featured-grid">
          <div className="project large">
            <img src="https://picsum.photos/1200/700?random=6" alt="" />
          </div>
          <div className="project">
            <img src="https://picsum.photos/600/600?random=7" alt="" />
          </div>
          <div className="project">
            <img src="https://picsum.photos/600/600?random=8" alt="" />
          </div>
        </div>
      </section>

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
