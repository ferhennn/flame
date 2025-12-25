import { useEffect, useRef } from "react";

import "./Home.css"
import "./Header.jsx"
import Header from "./Header.jsx";
import d from "../assets/d.jpg"
import one from "../assets/one.mp4"
import two from "../assets/two.mp4"
import three from "../assets/three.mp4"
import four from "../assets/four.mp4"







export default function Home() {

   const ctaRef = useRef(null);


 useEffect(() => {
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const skill = entry.target;
        const level = parseInt(skill.getAttribute("data-level"), 10);
        const fill = skill.querySelector(".skill-fill");
        const value = skill.querySelector(".skill-top span:last-child");

        // Prevent re-trigger
        if (skill.classList.contains("animated")) return;
        skill.classList.add("animated");

        /* BAR ANIMATION */
        fill.style.width = level + "%";

        /* NUMBER COUNT UP */
        let current = 0;
        const duration = 1200; // ms
        const start = performance.now();

        const update = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // easeOut

          current = Math.round(eased * level);
          value.textContent = current + "%";

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };

        requestAnimationFrame(update);
      });
    },
    { threshold: 0.6 }
  );

  skills.forEach((skill) => observer.observe(skill));

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const cta = ctaRef.current;
    if (!cta) return;

    const move = (e) => {
      const rect = cta.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cta.style.setProperty("--x", `${x}px`);
      cta.style.setProperty("--y", `${y}px`);
    };

    cta.addEventListener("mousemove", move);

    return () => {
      cta.removeEventListener("mousemove", move);
    };
  }, []);


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
          <div className="skills">

  <div className="skill" data-level="90">
    <div className="skill-top">
      <span>Graphic Design</span>
      <span>90%</span>
    </div>
    <div className="skill-bar">
      <span className="skill-fill"></span>
    </div>
  </div>

  <div className="skill" data-level="80">
    <div className="skill-top">
      <span>Motion Graphics</span>
      <span>80%</span>
    </div>
    <div className="skill-bar">
      <span className="skill-fill"></span>
    </div>
  </div>

  <div className="skill" data-level="75">
    <div className="skill-top">
      <span>3D Modelling</span>
      <span>75%</span>
    </div>
    <div className="skill-bar">
      <span className="skill-fill"></span>
    </div>
  </div>

  <div className="skill" data-level="85">
    <div className="skill-top">
      <span>Video Editing</span>
      <span>85%</span>
    </div>
    <div className="skill-bar">
      <span className="skill-fill"></span>
    </div>
  </div>

</div>

        </div>
      </section>

      {/* ================= CTA ================= */}
  <section className="cta" ref={ctaRef}>
      <div className="cta-gradient" />

      <div className="cta-inner">
        <h2>
          LET’S CREATE<br />
          <span>SOMETHING VISUAL</span>
        </h2>

        <p>
          Open for collaborations, commissions,
          and experimental visual projects.
        </p>

        <button className="cta-button">
          Start a project
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </section>


    </main>
  );
}
