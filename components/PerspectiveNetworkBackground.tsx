"use client";

import { useEffect, useRef } from "react";

export default function PerspectiveNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouse: { x: number; y: number } | null = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e => (mouse = { x: e.clientX, y: e.clientY }));
    window.addEventListener("mouseleave", () => (mouse = null));

    const render = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const t = time * 0.001;

      // Background with teal gradient
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#0f1a18");
      bg.addColorStop(0.4, "#0a1412");
      bg.addColorStop(1, "#0A0F0D");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const cols = 40;
      const rows = 16;

      const baseY = h * 0.95;   // closest row
      const horizonY = h * 0.45; // farthest row

      const amplitude = 70;
      const speed = 0.7;
      const frequency = 0.45;

      const hoverRadius = 170;
      const hoverStrength = 45;

      const points: { x: number; y: number }[][] = [];

      // -------- build wavy, non-parallel, perspective mesh ----------
      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1); // 0 bottom, 1 top

        const rowY = baseY - (baseY - horizonY) * depth;

        // Full width - no horizontal shrinking
        const left = 0;
        const right = w;

        const rowAmp = amplitude * (1 - depth * 0.6);
        const phaseOffset = depth * 2.2;          // different phase per row
        const freq = frequency * (1 + depth * 0.4); // slightly different freq

        const row: { x: number; y: number }[] = [];

        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1); // 0..1 along row
          const x = left + (right - left) * u;

          let y =
            rowY +
            Math.sin(u * Math.PI * 2 * freq + t * speed + phaseOffset) *
              rowAmp;

          // hover bump
          if (mouse) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < hoverRadius) {
              const influence = Math.exp(-(dist * dist) / (hoverRadius * hoverRadius));
              y -= influence * hoverStrength;
            }
          }

          row.push({ x, y });
        }
        points.push(row);
      }

      // -------- draw mesh (triangles) ----------
      for (let r = 0; r < rows - 1; r++) {
        const depth = r / (rows - 1);
        const alpha = 0.32 * (1 - depth * 0.3);
        ctx.strokeStyle = `rgba(42, 138, 122, ${alpha})`; // #2a8a7a
        ctx.lineWidth = 1;

        for (let c = 0; c < cols - 1; c++) {
          const p = points[r][c];
          const pr = points[r][c + 1];
          const pd = points[r + 1][c];

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pr.x, pr.y);
          ctx.lineTo(pd.x, pd.y);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // -------- glowing horizontal wave ridges ----------
      ctx.shadowColor = "rgba(42, 138, 122, 0.7)"; // #2a8a7a
      ctx.shadowBlur = 14;

      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1);
        const alpha = 0.55 * (1 - depth * 0.4);
        ctx.strokeStyle = `rgba(42, 138, 122, ${alpha})`; // #2a8a7a
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // -------- glowing vertices ----------
      ctx.shadowBlur = 18;
      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1);
        const alpha = 0.9 * (1 - depth * 0.4);
        ctx.fillStyle = `rgba(42, 138, 122, ${alpha})`; // #2a8a7a

        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          const size = 1.2 + (1 - depth) * 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // -------- floating particles above horizon ----------
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(42, 138, 122, 0.6)"; // #2a8a7a
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        const x = ((i * 97.3 + t * 40) % (w + 200)) - 100;
        const y = horizonY - 40 - ((i * 37.1) % (h * 0.15));
        const size = i % 3 === 0 ? 2 : 1;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="perspective-network-bg">
      <canvas ref={canvasRef} className="perspective-network-canvas" />
      <style jsx>{`
        .perspective-network-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          background: #0A0F0D;
        }
        .perspective-network-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
}

