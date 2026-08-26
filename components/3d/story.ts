export type StoryKeyframe = {
  t: number;
  camPos: [number, number, number];
  camLookAt: [number, number, number];
  rigPos: [number, number, number];
  rigRot: [number, number, number];
  rigScale: number;
  smokeOpacity: number;
  fov: number;
};

/**
 * Scroll-driven keyframes tying the cigarette + camera to the page narrative.
 * Roughly maps to: hero -> work -> about -> experience/capabilities -> philosophy/personal -> contact -> final moment.
 * Between text-heavy sections the rig is pushed to a screen edge and scaled down so it reads as an
 * ambient motif rather than competing with the opaque section backgrounds that sit above it.
 */
export const STORY: StoryKeyframe[] = [
  {
    t: 0,
    camPos: [0.5, 0.15, 5.4],
    camLookAt: [0.8, 0, 0],
    rigPos: [2.15, 0.5, -0.4],
    rigRot: [0.22, 0.78, 0.08],
    rigScale: 0.95,
    smokeOpacity: 0.28,
    fov: 30,
  },
  {
    t: 0.12,
    camPos: [-1.4, 0.4, 5.6],
    camLookAt: [-0.6, 0, 0],
    rigPos: [-2.1, -0.3, -1.2],
    rigRot: [0.1, -0.6, -0.1],
    rigScale: 0.6,
    smokeOpacity: 0.14,
    fov: 30,
  },
  {
    t: 0.3,
    camPos: [1.6, -0.2, 5.8],
    camLookAt: [0.6, 0, 0],
    rigPos: [2.3, 0.4, -1.4],
    rigRot: [-0.1, 0.8, 0.12],
    rigScale: 0.55,
    smokeOpacity: 0.12,
    fov: 28,
  },
  {
    t: 0.5,
    camPos: [-1.5, 0.2, 6],
    camLookAt: [-0.7, 0.1, 0],
    rigPos: [-2.4, -0.2, -1.6],
    rigRot: [0.08, -0.9, -0.06],
    rigScale: 0.5,
    smokeOpacity: 0.1,
    fov: 27,
  },
  {
    t: 0.68,
    camPos: [1.3, 0.3, 5.6],
    camLookAt: [0.5, 0, 0],
    rigPos: [2.1, 0.3, -1.3],
    rigRot: [0.05, 0.7, 0.08],
    rigScale: 0.55,
    smokeOpacity: 0.12,
    fov: 28,
  },
  {
    t: 0.82,
    camPos: [-0.5, 0.1, 4.9],
    camLookAt: [0, 0, 0],
    rigPos: [-1.3, -0.15, -0.4],
    rigRot: [0.05, -0.5, -0.05],
    rigScale: 0.85,
    smokeOpacity: 0.3,
    fov: 29,
  },
  {
    t: 0.96,
    camPos: [0.6, 0.2, 4.8],
    camLookAt: [0.9, -0.1, 0],
    rigPos: [1.6, -0.3, -0.3],
    rigRot: [0.18, 0.6, 0.1],
    rigScale: 0.8,
    smokeOpacity: 0.6,
    fov: 28,
  },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpVec3(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export function sampleStory(progress: number): StoryKeyframe {
  const p = Math.min(Math.max(progress, 0), 1);
  let lower = STORY[0];
  let upper = STORY[STORY.length - 1];

  for (let i = 0; i < STORY.length - 1; i++) {
    if (p >= STORY[i].t && p <= STORY[i + 1].t) {
      lower = STORY[i];
      upper = STORY[i + 1];
      break;
    }
  }

  const range = upper.t - lower.t;
  const localT = range > 0 ? (p - lower.t) / range : 0;

  return {
    t: p,
    camPos: lerpVec3(lower.camPos, upper.camPos, localT),
    camLookAt: lerpVec3(lower.camLookAt, upper.camLookAt, localT),
    rigPos: lerpVec3(lower.rigPos, upper.rigPos, localT),
    rigRot: lerpVec3(lower.rigRot, upper.rigRot, localT),
    rigScale: lerp(lower.rigScale, upper.rigScale, localT),
    smokeOpacity: lerp(lower.smokeOpacity, upper.smokeOpacity, localT),
    fov: lerp(lower.fov, upper.fov, localT),
  };
}
