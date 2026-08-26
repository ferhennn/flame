"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Cigarette from "./Cigarette";
import { sampleStory } from "./story";

type StoryRigProps = {
  scrollProgress: React.RefObject<number>;
  pointer: React.RefObject<{ x: number; y: number }>;
  reduceMotion: boolean;
  particleCount: number;
  isMobile?: boolean;
};

export default function StoryRig({
  scrollProgress,
  pointer,
  reduceMotion,
  particleCount,
  isMobile = false,
}: StoryRigProps) {
  const rig = useRef<THREE.Group>(null);
  const smokeMaterialOpacity = useRef(0.3);

  useFrame((_, delta) => {
    if (!rig.current) return;
    const story = sampleStory(scrollProgress.current ?? 0);
    const ease = Math.min(delta * 2, 1);

    // mobile: drop the object below the text column into its own lower band
    const target = isMobile
      ? new THREE.Vector3(story.rigPos[0] * 0.4, story.rigPos[1] - 1.85, story.rigPos[2])
      : new THREE.Vector3(...story.rigPos);

    rig.current.position.lerp(target, ease);
    rig.current.rotation.x += (story.rigRot[0] - rig.current.rotation.x) * ease;
    rig.current.rotation.y += (story.rigRot[1] - rig.current.rotation.y) * ease;
    rig.current.rotation.z += (story.rigRot[2] - rig.current.rotation.z) * ease;
    const targetScale = isMobile ? story.rigScale * 0.62 : story.rigScale;
    rig.current.scale.setScalar(rig.current.scale.x + (targetScale - rig.current.scale.x) * ease);

    smokeMaterialOpacity.current = story.smokeOpacity;
  });

  return (
    <group ref={rig}>
      <Cigarette
        pointer={reduceMotion ? { current: { x: 0, y: 0 } } : pointer}
        smokeOpacityRef={smokeMaterialOpacity}
        smokeCount={particleCount}
      />
    </group>
  );
}
