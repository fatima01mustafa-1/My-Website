"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Coder", "Problem Solver", "Professional", "Creator"];

export default function PortfolioLoader({ onFinish }: { onFinish?: () => void }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            margin: 0,
            padding: 0,
          }}
          className="loader-root"
        >
          <div 
            className="loader-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              width: "auto",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {/* Orbit */}
            <div className="orbit">
              <div className="core">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5eead4"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(94, 234, 212, 0.8))' }}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 18 22 12 16 6" />
                  <path d="M8 6 2 12 8 18" />
                </svg>
              </div>
              <div className="ring ring1" />
              <div className="ring ring2" />
            </div>

            {/* Text */}
            <div className="text-box">
              <div className="role">
                <span className="label">You are visiting a</span>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="role-text"
                >
                  {roles[index]}
                </motion.span>
              </div>
              <div className="bar">
                <div className="fill" />
              </div>
            </div>
          </div>

          <style jsx>{`
            .loader-root {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              width: 100vw !important;
              height: 100vh !important;
              z-index: 9999;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              background: radial-gradient(circle at 50% 50%, #0f172a, #020617 70%);
              color: #e5e7eb;
              margin: 0;
              padding: 0;
            }

            .loader-center {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 2rem;
              width: auto;
              max-width: 500px;
              margin: 0 auto;
            }

            .orbit {
              position: relative;
              width: 220px;
              height: 220px;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: rotate 6s linear infinite;
            }

            .core {
              width: 90px;
              height: 90px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(94, 234, 212, 0.3), rgba(42, 138, 122, 0.2));
              border: 2px solid rgba(94, 234, 212, 0.6);
              box-shadow: 0 0 50px rgba(94, 234, 212, 0.8), inset 0 0 30px rgba(94, 234, 212, 0.3);
            }

            .ring {
              position: absolute;
              border: 2px solid rgba(94, 234, 212, 0.4);
              border-radius: 50%;
              animation: pulse 3s ease-in-out infinite alternate;
              box-shadow: 0 0 20px rgba(94, 234, 212, 0.5);
            }

            .ring1 {
              width: 160px;
              height: 160px;
              animation-delay: 0s;
            }

            .ring2 {
              width: 220px;
              height: 220px;
              animation-delay: 1.5s;
            }

            .text-box {
              text-align: center;
              max-width: 500px;
              background: rgba(10, 15, 13, 0.7);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              padding: 1.5rem 2rem;
              border-radius: 1rem;
              border: 1px solid rgba(94, 234, 212, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            }

            .sub {
              font-size: 0.75rem;
              color: #94a3b8;
              letter-spacing: 0.15em;
              text-transform: uppercase;
            }

            .headline {
              margin: 0.7rem 0 1rem;
              font-size: 2rem;
              font-weight: 700;
            }

            .muted {
              color: #cbd5e1;
              font-weight: 500;
            }

            .accent {
              background: linear-gradient(90deg, #2a8a7a, #1a5a5a);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }

            .role {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 1.5rem;
              font-size: 1.1rem;
            }

            .label {
              background: rgba(15, 23, 42, 0.95);
              backdrop-filter: blur(10px);
              padding: 0.5rem 0.9rem;
              border-radius: 999px;
              border: 1px solid rgba(94, 234, 212, 0.3);
              color: #e5e7eb;
              font-weight: 500;
            }

            .role-text {
              padding: 0.5rem 1.2rem;
              border-radius: 999px;
              background: radial-gradient(circle at 30% 30%, #5eead4, #2a8a7a);
              color: #0A0F0D;
              font-weight: 700;
              font-size: 1.2rem;
              box-shadow: 0 0 25px rgba(94, 234, 212, 1);
            }

            .bar {
              width: 100%;
              height: 4px;
              border-radius: 999px;
              background: rgba(15, 23, 42, 0.8);
              overflow: hidden;
            }

            .fill {
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, #5eead4, #2a8a7a, #5eead4);
              background-size: 200% 100%;
              transform-origin: left;
              animation: shimmer 1.5s ease-in-out infinite;
            }

            @keyframes rotate {
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes pulse {
              0% {
                opacity: 0.5;
                transform: scale(0.95);
              }
              100% {
                opacity: 1;
                transform: scale(1.15);
              }
            }

            @keyframes shimmer {
              0% {
                transform: scaleX(0.15) translateX(-10%);
              }
              50% {
                transform: scaleX(0.9) translateX(10%);
              }
              100% {
                transform: scaleX(0.15) translateX(110%);
              }
            }

            @media (max-width: 640px) {
              .headline {
                font-size: 1.5rem;
              }
              .orbit {
                width: 130px;
                height: 130px;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

