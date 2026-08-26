"use client";

import dynamic from "next/dynamic";

const CigaretteScene = dynamic(() => import("./CigaretteScene"), {
  ssr: false,
  loading: () => null,
});

export default CigaretteScene;
