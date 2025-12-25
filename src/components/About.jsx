import { useEffect } from "react";

import "./About.css";
import Header from "./Header.jsx";

export default function About() {

useEffect(() => {
  const process = document.querySelector(".about-process");
  const line = document.querySelector(".process-line-fill");

  if (!process || !line) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        line.style.height = "100%";
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(process);

  return () => observer.disconnect();
}, []);



  return (
    <main className="about-page">
        <Header />

      {/* ================= INTRO ================= */}
      <section className="about-hero">
        <h1>
          ABOUT<br />
          THE PRACTICE
        </h1>

        <p>
          I design visual systems across graphic design,
          motion, and 3D — focusing on clarity, rhythm,
          and spatial balance. My work sits between
          structure and experimentation, always driven
          by intent rather than trends.
        </p>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="about-split">
        <div className="about-image">
          <img
            src="https://picsum.photos/900/1200?random=201"
            alt="Studio Visual"
          />
        </div>

        <div className="about-content">
          <h2>Approach</h2>
          <p>
            I don’t separate branding, motion, and 3D
            into isolated disciplines. Instead, I treat
            them as parts of the same visual language.
            Typography informs motion. Motion informs
            composition. Space informs hierarchy.
          </p>

          <p>
            The goal is always coherence — visuals that
            feel considered, balanced, and purposeful
            across every medium they appear in.
          </p>
          <div className="about-process">

  <div className="process-line">
    <span className="process-line-fill" />
  </div>

  <div className="process-items">
    <div className="process-item">
      <span>01</span>
      <p>
        Understanding the context — brand, audience,
        constraints, and intent — before touching visuals.
      </p>
    </div>

    <div className="process-item">
      <span>02</span>
      <p>
        Building a visual direction through references,
        typography studies, and motion or spatial tests.
      </p>
    </div>

    <div className="process-item">
      <span>03</span>
      <p>
        Developing systems — not just outcomes —
        ensuring consistency across formats and platforms.
      </p>
    </div>

    <div className="process-item">
      <span>04</span>
      <p>
        Refinement through iteration, pacing,
        and detail-focused adjustments until it feels right.
      </p>
    </div>
  </div>

</div>

        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="about-principles">
        <h2>Principles</h2>

        <div className="principles-grid">
          <div className="principle">
            <span>01</span>
            <h3>Clarity over noise</h3>
            <p>
              Strong ideas don’t need decoration.
              I remove visual excess until the core
              message speaks clearly.
            </p>
          </div>

          <div className="principle">
            <span>02</span>
            <h3>Motion with intent</h3>
            <p>
              Animation should guide, not distract.
              Every movement serves hierarchy,
              rhythm, or meaning.
            </p>
          </div>

          <div className="principle">
            <span>03</span>
            <h3>Spatial thinking</h3>
            <p>
              Whether 2D or 3D, space defines how
              visuals are perceived. Depth, scale,
              and balance matter.
            </p>
          </div>

          <div className="principle">
            <span>04</span>
            <h3>Consistency at scale</h3>
            <p>
              Systems must hold together across
              platforms — static, motion, and
              interactive environments alike.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="about-experience">
        <h2>Experience</h2>

        <div className="experience-list">
          <div className="experience-item">
            <span>Graphic Design</span>
            <p>
              Brand identities, editorial systems,
              and visual frameworks built for
              longevity and adaptability.
            </p>
          </div>

          <div className="experience-item">
            <span>Motion Graphics</span>
            <p>
              Title sequences, brand motion systems,
              and short-form visual narratives with
              controlled pacing.
            </p>
          </div>

          <div className="experience-item">
            <span>3D & Spatial</span>
            <p>
              Product visuals, abstract spatial studies,
              and lighting-focused compositions
              that emphasize form and material.
            </p>
          </div>

          <div className="experience-item">
            <span>Video Editing</span>
            <p>
              Editorial cuts with emphasis on timing,
              flow, and typographic integration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUTRO ================= */}
      <section className="about-outro">
        <p>
          Currently open to collaborations, commissions,
          and long-term visual partnerships.
          Based remotely. Available worldwide.
        </p>
      </section>

    </main>
  );
}
