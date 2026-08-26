"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { makeSmokeSprite } from "./textures";

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  attribute float aSeed;
  attribute float aSpeed;
  varying float vLife;

  void main() {
    float life = fract(uTime * aSpeed + aSeed);
    vLife = life;

    float drift = sin(aSeed * 62.0 + uTime * 0.6) * 0.05 * life;
    float drift2 = cos(aSeed * 31.0 + uTime * 0.4) * 0.03 * life;

    // rises along local +X, which is world "up" after the cigarette's fixed 90deg twist
    vec3 pos = position;
    pos.x += life * 0.55;
    pos.y += drift;
    pos.z += drift2;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float size = mix(45.0, 150.0, life);
    gl_PointSize = size * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform sampler2D uSprite;
  uniform float uOpacity;
  varying float vLife;

  void main() {
    vec4 tex = texture2D(uSprite, gl_PointCoord);
    float fade = smoothstep(0.0, 0.12, vLife) * (1.0 - smoothstep(0.55, 1.0, vLife));
    gl_FragColor = vec4(tex.rgb, tex.a * fade * uOpacity);
  }
`;

type SmokeProps = {
  count?: number;
  opacity?: number;
  opacityRef?: React.RefObject<number>;
  position?: [number, number, number];
};

export default function Smoke({ count = 26, opacity = 0.4, opacityRef, position = [0, 0, 0] }: SmokeProps) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const sprite = useMemo(() => makeSmokeSprite(), []);

  const { positions, seeds, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.05;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
      seeds[i] = Math.random();
      speeds[i] = 0.04 + Math.random() * 0.03;
    }
    return { positions, seeds, speeds };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSprite: { value: sprite },
      uOpacity: { value: opacity },
    }),
    [sprite, opacity]
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
      if (opacityRef) {
        material.current.uniforms.uOpacity.value = opacityRef.current ?? opacity;
      }
    }
  });

  return (
    <points position={position}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
