"use client";

import { useEffect, useState } from "react";
import PerspectiveNetworkBackground from "./PerspectiveNetworkBackground";

function FallbackBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: 'linear-gradient(180deg, #0f1a18 0%, #0a1412 50%, #0A0F0D 100%)',
      }}
    />
  );
}

export default function WebGLBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FallbackBackground />;
  }

  return (
    <>
      {/* 3D Perspective Network Background - Non-parallel waves converging to horizon + Mouse Interaction */}
      <PerspectiveNetworkBackground />
    </>
  );
}
