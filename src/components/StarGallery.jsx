import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./StarGallery.css";

export default function StarGallery() {
  const mountRef = useRef(null);
  const sectionRef = useRef(null);

  const isDragging = useRef(false);
  const prev = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const zoomTarget = useRef(20);
  const zoomCurrent = useRef(20);

  const isActive = useRef(false);

  useEffect(() => {
    const container = mountRef.current;
    const section = sectionRef.current;

    /* ---------- SCENE ---------- */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );
    camera.position.z = zoomCurrent.current;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ---------- GROUP ---------- */
    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const imageCount = 28;

    for (let i = 0; i < imageCount; i++) {
      const texture = loader.load(
        `https://picsum.photos/600/600?random=${i + 1}`
      );

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
      });

      const size = THREE.MathUtils.randFloat(2.2, 3.6);
      const geometry = new THREE.PlaneGeometry(size, size);
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        THREE.MathUtils.randFloatSpread(40),
        THREE.MathUtils.randFloatSpread(30),
        THREE.MathUtils.randFloatSpread(40)
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );

      group.add(mesh);
    }

    /* ---------- DRAG ---------- */
    const onPointerDown = (e) => {
      isDragging.current = true;
      prev.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;

      const dx = e.clientX - prev.current.x;
      const dy = e.clientY - prev.current.y;

      velocity.current.x = dx * 0.002;
      velocity.current.y = dy * 0.002;

      group.rotation.y += velocity.current.x;
      group.rotation.x += velocity.current.y;

      prev.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    /* ---------- SECTION SCROLL CONTROL ---------- */
    const onWheel = (e) => {
      if (!isActive.current) return;

      e.preventDefault();

      zoomTarget.current += e.deltaY * 0.015;
      zoomTarget.current = THREE.MathUtils.clamp(
        zoomTarget.current,
        6,
        40
      );

      // release scroll when limits reached
      if (
        zoomTarget.current === 6 ||
        zoomTarget.current === 40
      ) {
        document.body.style.overflow = "";
        isActive.current = false;
      }
    };

    /* ---------- OBSERVER ---------- */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isActive.current = true;
          document.body.style.overflow = "hidden";
        } else {
          isActive.current = false;
          document.body.style.overflow = "";
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("wheel", onWheel, { passive: false });

    /* ---------- ANIMATION ---------- */
    const animate = () => {
      group.rotation.y += velocity.current.x;
      group.rotation.x += velocity.current.y;

      velocity.current.x *= 0.94;
      velocity.current.y *= 0.94;

      zoomCurrent.current +=
        (zoomTarget.current - zoomCurrent.current) * 0.08;
      camera.position.z = zoomCurrent.current;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    /* ---------- RESIZE ---------- */
    const onResize = () => {
      camera.aspect =
        container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener("resize", onResize);

    /* ---------- CLEANUP ---------- */
    return () => {
      observer.disconnect();
      container.removeChild(renderer.domElement);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section ref={sectionRef} className="star-gallery">
      <div ref={mountRef} className="star-canvas" />
      <div className="drag-hint">Drag · Scroll</div>
    </section>
  );
}
