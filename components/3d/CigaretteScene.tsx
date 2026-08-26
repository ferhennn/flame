"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useReducedMotion } from "framer-motion";
import StoryRig from "./StoryRig";
import CameraController from "./CameraController";
import { usePointer } from "@/lib/usePointer";
import { useScrollProgress } from "@/lib/useScrollProgress";
import StaticCigaretteFallback from "./StaticCigaretteFallback";

function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setSupported(Boolean(gl));
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);
  return isMobile;
}

export default function CigaretteScene() {
  const webglSupported = useWebGLSupport();
  const isMobile = useIsMobile();
  const reduceMotion = Boolean(useReducedMotion());
  const pointer = usePointer();
  const scrollProgress = useScrollProgress();

  if (webglSupported === false) {
    return <StaticCigaretteFallback />;
  }

  return (
    <div className="pointer-events-none h-full w-full">
      <Canvas
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows
        camera={{ position: [0, 0.1, 4.6], fov: 32, near: 0.1, far: 20 }}
      >
        <color attach="background" args={["#090909"]} />
        <fog attach="fog" args={["#090909", 5, 11]} />

        <ambientLight intensity={0.18} color="#a9a49a" />
        <directionalLight
          position={[2.4, 3.2, 2.6]}
          intensity={1.4}
          color="#fff4e6"
          castShadow
          shadow-mapSize={[isMobile ? 512 : 1024, isMobile ? 512 : 1024]}
        />
        <directionalLight position={[-3, 1.2, -2]} intensity={0.35} color="#6b7bff" />
        <pointLight position={[0, -1.5, 1.5]} intensity={0.2} color="#c4553a" />

        <Suspense fallback={null}>
          <StoryRig
            scrollProgress={scrollProgress}
            pointer={pointer}
            reduceMotion={reduceMotion}
            particleCount={isMobile ? 12 : 26}
            isMobile={isMobile}
          />
          {!isMobile && (
            <ContactShadows
              position={[0, -0.65, 0]}
              opacity={0.45}
              scale={8}
              blur={2.4}
              far={2}
              resolution={512}
              color="#000000"
            />
          )}
        </Suspense>

        <CameraController scrollProgress={scrollProgress} pointer={pointer} isMobile={isMobile} />

        {!isMobile && !reduceMotion && (
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.35} luminanceThreshold={0.65} luminanceSmoothing={0.3} mipmapBlur />
            <Vignette eskil={false} offset={0.2} darkness={0.55} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}
