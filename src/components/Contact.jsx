import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Contact.css";
import Header from "./Header";

export default function Contact() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 2, 12);

    /* ================= CAMERA ================= */
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(2.4, 0.3, 6);

    /* ================= RENDERER ================= */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    /* ================= LIGHTS ================= */
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffc7a2, 0.6);
    rimLight.position.set(-4, 2, 3);
    scene.add(rimLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambient);

    /* ================= CIGARETTE BODY ================= */
    const bodyGeo = new THREE.CylinderGeometry(0.085, 0.085, 3.8, 64);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xf5f5f5,
      roughness: 0.9,
      metalness: 0,
      clearcoat: 0.05,
    });

    const cigarette = new THREE.Mesh(bodyGeo, bodyMat);
    cigarette.rotation.z = Math.PI / 2.15; // tilt upward
    cigarette.position.set(1.7, 0.1, 0);
    scene.add(cigarette);

    /* ================= FILTER ================= */
    const filterGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.8, 32);
    const filterMat = new THREE.MeshStandardMaterial({
      color: 0xb88955,
      roughness: 1,
    });
    const filter = new THREE.Mesh(filterGeo, filterMat);
    filter.rotation.z = Math.PI / 2.15;
    filter.position.set(0.2, 0.2, 0.1);
    scene.add(filter);

    /* ================= ASH / EMBER ================= */
    const emberGeo = new THREE.SphereGeometry(0.14, 32, 32);
    const emberMat = new THREE.MeshStandardMaterial({
      emissive: new THREE.Color(1, 0.35, 0),
      emissiveIntensity: 2.2,
      color: 0x1a1a1a,
    });

    const ember = new THREE.Mesh(emberGeo, emberMat);
    ember.position.set(3.55, 0.18, 0);
    scene.add(ember);

    const emberLight = new THREE.PointLight(0xff6a00, 2.5, 2);
    emberLight.position.copy(ember.position);
    scene.add(emberLight);

    /* ================= REALISTIC SMOKE SHADER ================= */
    const smokeMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.35 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.x += sin(pos.y * 2.5) * 0.08;
          pos.z += cos(pos.y * 1.8) * 0.08;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uOpacity;

        float noise(vec2 p){
          return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
        }

        void main() {
          float n = noise(vUv * 6.0 + uTime * 0.15);
          float alpha = smoothstep(0.25, 0.7, n);
          alpha *= smoothstep(1.0, 0.2, vUv.y);
          gl_FragColor = vec4(vec3(0.95), alpha * uOpacity);
        }
      `,
    });

    const smokeGeo = new THREE.PlaneGeometry(1.4, 1.8);
    const smokeGroup = new THREE.Group();
    scene.add(smokeGroup);

    for (let i = 0; i < 22; i++) {
      const puff = new THREE.Mesh(smokeGeo, smokeMat);
      puff.position.set(
        3.6 + Math.random() * 0.6,
        Math.random() * 0.8,
        Math.random() * 0.6 - 0.3
      );
      puff.scale.setScalar(Math.random() * 0.7 + 0.5);
      puff.rotation.z = Math.random() * Math.PI;
      smokeGroup.add(puff);
    }

    /* ================= ANIMATE ================= */
    const animate = () => {
      const t = performance.now() * 0.001;

      cigarette.position.y = Math.sin(t * 0.5) * 0.05;
      cigarette.rotation.y = Math.sin(t * 0.3) * 0.2;

      ember.scale.setScalar(1 + Math.sin(t * 7) * 0.15);
      emberLight.intensity = 2 + Math.sin(t * 8) * 0.6;

      smokeMat.uniforms.uTime.value = t;

      smokeGroup.children.forEach((s, i) => {
        s.position.y += 0.0025 + i * 0.00015;
        s.position.x += Math.sin(t + i) * 0.0008;
        s.rotation.z += 0.0008;

        if (s.position.y > 2.2) {
          s.position.y = 0;
        }
      });

      camera.position.x = 2.4 + Math.sin(t * 0.2) * 0.15;
      camera.lookAt(1.6, 0.1, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    /* ================= RESIZE ================= */
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="contact-page">
        <canvas ref={canvasRef} className="contact-canvas" />

        <section className="contact-content">
          <h1>
            LET’S<br />TALK
          </h1>

          <p className="contact-intro">
            Have a project, an idea, or a visual challenge?
            I’m open to collaborations, commissions,
            and long-term creative partnerships.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Tell me about the project" rows="4" required />

            <button type="submit">
              Send message <span>→</span>
            </button>
          </form>

          <div className="contact-alt">
            <span>Or reach me directly</span>
            <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
          </div>
        </section>
      </main>
    </>
  );
}
