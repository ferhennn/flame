import * as THREE from "three";

/** Cylinder with organic radial jitter so it reads as a hand-rolled object, not a perfect primitive. */
export function makeImperfectCylinder(
  radius: number,
  height: number,
  radialSegments = 24,
  heightSegments = 12,
  jitter = 0.02
) {
  const geometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments, heightSegments, true);
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z = position.getZ(i);
    const angle = Math.atan2(z, x);
    const noise =
      Math.sin(angle * 5 + y * 3.1) * 0.5 +
      Math.sin(angle * 11 - y * 6.4) * 0.3 +
      Math.sin(angle * 23 + y * 1.7) * 0.2;
    const scale = 1 + noise * jitter;
    position.setX(i, x * scale);
    position.setZ(i, z * scale);
  }

  geometry.computeVertexNormals();
  return geometry;
}

/** Irregular disc used for the burned tip / ash edge. */
export function makeBurnedEdgeGeometry(radius: number, segments = 28, jitter = 0.12) {
  const geometry = new THREE.CircleGeometry(radius, segments);
  const position = geometry.attributes.position;

  for (let i = 1; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    const angle = Math.atan2(y, x);
    const noise = Math.sin(angle * 7) * 0.5 + Math.sin(angle * 13 + 1.5) * 0.3;
    const scale = 1 + noise * jitter;
    position.setX(i, x * scale);
    position.setY(i, y * scale);
  }

  geometry.computeVertexNormals();
  return geometry;
}
