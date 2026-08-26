"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { makeImperfectCylinder, makeBurnedEdgeGeometry } from "./geometry";
import { makePaperTexture, makeFilterTexture } from "./textures";
import Smoke from "./Smoke";

const PAPER_LENGTH = 2.5;
const FILTER_LENGTH = 0.95;
const RADIUS = 0.135;

// The tip (burned end) sits on the positive-Y side of the paper body; the filter
// is attached on the negative-Y side. Determined empirically against the render —
// keep this as the single source of truth rather than re-deriving rotation signs.
const TIP_SIGN = 1;

type CigaretteProps = {
  pointer: React.RefObject<{ x: number; y: number }>;
  emberIntensity?: number;
  smokeOpacityRef?: React.RefObject<number>;
  smokeCount?: number;
};

export default function Cigarette({
  pointer,
  emberIntensity = 0.55,
  smokeOpacityRef,
  smokeCount = 26,
}: CigaretteProps) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const emberLight = useRef<THREE.PointLight>(null);

  const paperTexture = useMemo(() => makePaperTexture(), []);
  const filterTexture = useMemo(() => makeFilterTexture(), []);

  const paperGeometry = useMemo(() => makeImperfectCylinder(RADIUS, PAPER_LENGTH, 28, 16, 0.018), []);
  const filterGeometry = useMemo(
    () => makeImperfectCylinder(RADIUS * 1.06, FILTER_LENGTH, 28, 10, 0.02),
    []
  );
  const tipCapGeometry = useMemo(() => makeBurnedEdgeGeometry(RADIUS * 0.98, 24, 0.16), []);
  const emberGeometry = useMemo(() => makeBurnedEdgeGeometry(RADIUS * 0.5, 20, 0.12), []);

  useFrame((state, delta) => {
    if (!inner.current || !group.current) return;

    // idle float — slow, almost imperceptible
    const t = state.clock.elapsedTime;
    group.current.position.y = Math.sin(t * 0.35) * 0.05;
    group.current.rotation.z = Math.sin(t * 0.22) * 0.015;

    // restrained cursor response
    const px = pointer.current?.x ?? 0;
    const py = pointer.current?.y ?? 0;
    const targetRotY = px * 0.35;
    const targetRotX = -py * 0.18;

    inner.current.rotation.y += (targetRotY - inner.current.rotation.y) * Math.min(delta * 2.2, 1);
    inner.current.rotation.x += (targetRotX - inner.current.rotation.x) * Math.min(delta * 2.2, 1);

    if (emberLight.current) {
      emberLight.current.intensity = emberIntensity * (0.85 + Math.sin(t * 3.2) * 0.08 + Math.sin(t * 7.1) * 0.04);
    }
  });

  const halfPaper = PAPER_LENGTH / 2;
  const tipOffset = TIP_SIGN * halfPaper;
  const filterOffset = -TIP_SIGN * (halfPaper + FILTER_LENGTH / 2);
  const filterCapOffset = -TIP_SIGN * (halfPaper + FILTER_LENGTH);
  const out = TIP_SIGN; // multiply small epsilons by this to always push "away from paper"

  return (
    <group ref={group}>
      <group ref={inner} rotation={[0, 0, Math.PI / 2]}>
        {/* paper body */}
        <mesh geometry={paperGeometry} castShadow receiveShadow>
          <meshStandardMaterial map={paperTexture} roughness={0.82} metalness={0} color="#f2efe4" />
        </mesh>

        {/* filter */}
        <mesh geometry={filterGeometry} position={[0, filterOffset, 0]} castShadow receiveShadow>
          <meshStandardMaterial map={filterTexture} roughness={0.9} metalness={0} color="#c9a878" />
        </mesh>

        {/* filter end cap */}
        <mesh position={[0, filterCapOffset, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[RADIUS * 1.06, 24]} />
          <meshStandardMaterial color="#b8926a" roughness={0.95} side={THREE.DoubleSide} />
        </mesh>

        {/* burned tip cap */}
        <mesh
          geometry={tipCapGeometry}
          position={[0, tipOffset + out * 0.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#232019" roughness={1} metalness={0} side={THREE.DoubleSide} />
        </mesh>

        {/* ash rim just above the burn */}
        <mesh position={[0, tipOffset - out * 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[RADIUS * 0.5, RADIUS * 1.02, 24]} />
          <meshStandardMaterial color="#9a968c" roughness={1} side={THREE.DoubleSide} />
        </mesh>

        {/* faint ember */}
        <mesh
          geometry={emberGeometry}
          position={[0, tipOffset + out * 0.015, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#c4553a"
            emissive="#c4553a"
            emissiveIntensity={0.35}
            roughness={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>

        <pointLight
          ref={emberLight}
          position={[0, tipOffset + out * 0.05, 0]}
          color="#e07a4a"
          intensity={0.4}
          distance={0.9}
          decay={2}
        />

        <Smoke count={smokeCount} opacityRef={smokeOpacityRef} position={[0, tipOffset + out * 0.08, 0]} />
      </group>
    </group>
  );
}
