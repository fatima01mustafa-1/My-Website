"use client";

import { useState } from "react";
import Loader from "./Loader";
import WebGLBackground from "./WebGLBackground";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      <WebGLBackground />
      {loaded && children}
    </>
  );
}

