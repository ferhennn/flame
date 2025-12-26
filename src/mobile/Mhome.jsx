import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Mhome.css";

export default function Mhome() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // === THREE.JS SCENE ===
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0b0b0b, 2, 10);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // === LIGHT ===
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);

    // === CYLINDER (CIGARETTE CORE FORM) ===
    const geometry = new THREE.CylinderGeometry(0.15, 0.15, 2.6, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.35,
      metalness: 0.05,
    });
    const cigarette = new THREE.Mesh(geometry, material);
    cigarette.rotation.z = Math.PI / 2;
    scene.add(cigarette);

    // === FILTER ===
    const filterGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.6, 32);
    const filterMat = new THREE.MeshStandardMaterial({
      color: 0xb87333,
      roughness: 0.6,
    });
    const filter = new THREE.Mesh(filterGeo, filterMat);
    filter.position.x = -1.3;
    filter.rotation.z = Math.PI / 2;
    scene.add(filter);

    const animate = () => {
      cigarette.rotation.y += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);
 
  return (
  <div className="mhome">
    {/* === HERO === */}
    <section className="m-hero">
      <canvas ref={canvasRef} className="m-canvas" />

      <div className="m-hero-overlay">
        <span className="m-eyebrow">ADVANCED · PORTFOLIO</span>

        <h1 className="m-title">
          Crafted
          <br />
          With
          <br />
          <span>Intent</span>
        </h1>

        <p className="m-sub">
          Design. Motion. Code.
          <br />
          Clean. Sharp. Addictive.
        </p>
      </div>
    </section>

    <section className="m-section m-about">
      <h2>Built Like a Product</h2>
      <p>
        I design digital experiences the way premium products are made —
        minimal, disciplined, and brutally intentional.
      </p>
    </section>

    <section className="m-section m-cap">
      <div className="cap-item">UI ENGINEERING</div>
      <div className="cap-item">3D / MOTION</div>
      <div className="cap-item">BRAND SYSTEMS</div>
      <div className="cap-item">EXPERIMENTAL WEB</div>
    </section>

    <section className="m-section m-featured">
      <h2>Selected Work</h2>

      <div className="work-card">
        <span>PORTFOLIO SYSTEM</span>
        <p>Brutalist personal site with 3D & motion.</p>
      </div>

      <div className="work-card">
        <span>BRAND EXPERIENCE</span>
        <p>High-contrast product storytelling.</p>
      </div>
    </section>

    <section className="m-section m-cta">
      <p>Ready to build something</p>
      <h2>Sharp?</h2>
      <button>START A CONVERSATION</button>
    </section>
  </div>
);
}