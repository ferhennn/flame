"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { sampleStory } from "./story";

type CameraControllerProps = {
  scrollProgress: React.RefObject<number>;
  pointer: React.RefObject<{ x: number; y: number }>;
  isMobile?: boolean;
};

export default function CameraController({ scrollProgress, pointer, isMobile = false }: CameraControllerProps) {
  const { camera } = useThree();
  const lookAt = useRef(new THREE.Vector3(0, 0, 0));
  const targetPos = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const story = sampleStory(scrollProgress.current ?? 0);
    const ease = Math.min(delta * 2, 1);

    const parallaxX = isMobile ? 0 : (pointer.current?.x ?? 0) * 0.15;
    const parallaxY = isMobile ? 0 : (pointer.current?.y ?? 0) * -0.08;

    // pull the camera in closer on mobile so the object reads clearly on a small viewport
    const camScale = isMobile ? 0.72 : 1;

    targetPos.current.set(
      story.camPos[0] * camScale + parallaxX,
      story.camPos[1] * camScale + parallaxY,
      story.camPos[2] * camScale
    );

    camera.position.lerp(targetPos.current, ease);

    lookAt.current.lerp(new THREE.Vector3(...story.camLookAt), ease);
    camera.lookAt(lookAt.current);

    if (camera instanceof THREE.PerspectiveCamera) {
      const targetFov = isMobile ? story.fov + 6 : story.fov;
      camera.fov += (targetFov - camera.fov) * ease;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
