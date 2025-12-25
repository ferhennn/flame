import "./Work.css";
import "./Header";
import Header from "./Header";

export default function Work() {
  return (
    <main className="work-page">
        <Header />
      {/* ================= INTRO ================= */}
      <section className="work-hero">
        <h1>
          SELECTED<br />
          WORK
        </h1>

        <p>
          A focused body of work spanning brand systems,
          motion-led storytelling, and spatial 3D visuals.
          Each project is driven by intent, rhythm,
          and visual clarity — never decoration.
        </p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="work-list">

        {/* PROJECT 01 */}
        <article className="work-item">
          <div className="work-media">
            <img src="https://picsum.photos/1400/900?random=101" alt="" />
          </div>

          <div className="work-meta">
            <span className="work-index">01</span>
            <h2>Helios Identity System</h2>
            <p>
              A modular visual identity for a contemporary
              design studio. Built around strong typographic
              contrast, restrained color usage, and a motion
              system that adapts across digital touchpoints.
            </p>

            <div className="work-tags">
              <span>Brand Identity</span>
              <span>Motion System</span>
              <span>Typography</span>
            </div>
            <button className="view">View Project
                <span className="cta-arrow">→</span>
            </button>
          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="work-item reverse">
          <div className="work-media">
            <img src="https://picsum.photos/1400/900?random=102" alt="" />
          </div>

          <div className="work-meta">
            <span className="work-index">02</span>
            <h2>Fragmented Motion Series</h2>
            <p>
              An experimental motion graphics study exploring
              rhythm, repetition, and controlled chaos.
              Designed as short-form visual narratives
              for digital platforms.
            </p>

            <div className="work-tags">
              <span>Motion Graphics</span>
              <span>Visual Rhythm</span>
              <span>Experimental</span>
            </div>
            <button className="view">View Project
                <span className="cta-arrow">→</span>
            </button>
          </div>
        </article>

        {/* PROJECT 03 */}
        <article className="work-item">
          <div className="work-media">
            <img src="https://picsum.photos/1400/900?random=103" alt="" />
          </div>

          <div className="work-meta">
            <span className="work-index">03</span>
            <h2>Spatial Product Visuals</h2>
            <p>
              A series of 3D product visuals designed to
              communicate form, material, and scale.
              Focused on lighting realism and spatial depth
              rather than surface aesthetics.
            </p>

            <div className="work-tags">
              <span>3D Modelling</span>
              <span>Lighting</span>
              <span>Product Visuals</span>
            </div>
            <button className="view">View Project
                <span className="cta-arrow">→</span>
            </button>
          </div>
        </article>

        {/* PROJECT 04 */}
        <article className="work-item reverse">
          <div className="work-media">
            <img src="https://picsum.photos/1400/900?random=104" alt="" />
          </div>

          <div className="work-meta">
            <span className="work-index">04</span>
            <h2>Editorial Video Cut</h2>
            <p>
              A paced editorial video cut combining live footage,
              typographic overlays, and subtle motion accents.
              Built for clarity, not spectacle.
            </p>

            <div className="work-tags">
              <span>Video Editing</span>
              <span>Editorial</span>
              <span>Typography</span>
            </div>
            <button className="view">View Project
                <span className="cta-arrow">→</span>
            </button>
          </div>
        </article>

      </section>

      {/* ================= OUTRO ================= */}
      <section className="work-outro">
        <p>
          More work available on request.
          Open to commissions, collaborations,
          and long-term visual partnerships.
        </p>
      </section>

    </main>
  );
}
