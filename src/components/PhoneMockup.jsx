"use client";

import { motion } from "framer-motion";

export default function PhoneMockup({ children, isHovered = false }) {
  return (
    <motion.div
      className="phone-mockup"
      animate={{
        y: isHovered ? -20 : [0, -10, 0],
      }}
      transition={
        isHovered
          ? { duration: 0.3 }
          : { repeat: Infinity, duration: 4, ease: "easeInOut" }
      }
    >
      <div className="phone-frame">
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="camera-dot" />
        </div>

        {/* Screen Content */}
        <div className="phone-screen">{children}</div>

        {/* Home Indicator */}
        <div className="home-indicator" />

        {/* Video Play Badge */}
        <div className="video-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Reflection */}
      <div className="phone-reflection" />

      {/* Shadow */}
      <div className="phone-shadow" />

      <style jsx global>{`
        .phone-mockup {
          position: relative;
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }

        .phone-frame {
          position: relative;
          background: linear-gradient(
            135deg,
            #1a1a1a 0%,
            #2d2d2d 50%,
            #1a1a1a 100%
          );
          border-radius: 45px;
          padding: 12px;
          box-shadow:
            inset 0 0 0 2px rgba(255, 255, 255, 0.1),
            0 25px 50px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        /* Dynamic Island */
        .dynamic-island {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 32px;
          background: #000;
          border-radius: 20px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
        }

        .camera-dot {
          width: 10px;
          height: 10px;
          background: radial-gradient(
            circle at 30% 30%,
            #3a3a3a 0%,
            #1a1a1a 100%
          );
          border-radius: 50%;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }

        /* Screen */
        .phone-screen {
          position: relative;
          background: #000;
          border-radius: 35px;
          overflow: hidden;
          aspect-ratio: 9 / 19.5;
        }

        /* Home Indicator */
        .home-indicator {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 5px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        /* Video Play Badge */
        .video-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          background: rgba(2, 125, 253, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 11;
          box-shadow: 0 4px 12px rgba(2, 125, 253, 0.4);
          animation: videoBadgePulse 2s ease-in-out infinite;
        }

        .video-badge svg {
          width: 16px;
          height: 16px;
          color: white;
          margin-left: 2px;
        }

        @keyframes videoBadgePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 4px 12px rgba(2, 125, 253, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(2, 125, 253, 0.6);
          }
        }

        /* Reflection Overlay */
        .phone-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 100%
          );
          border-radius: 45px 45px 0 0;
          pointer-events: none;
        }

        /* Shadow */
        .phone-shadow {
          position: absolute;
          bottom: -20px;
          left: 10%;
          right: 10%;
          height: 40px;
          background: radial-gradient(
            ellipse at center,
            rgba(2, 125, 253, 0.3) 0%,
            transparent 70%
          );
          filter: blur(15px);
          opacity: 0.5;
          z-index: -1;
        }

        /* Side Buttons */
        .phone-frame::before {
          content: "";
          position: absolute;
          right: -3px;
          top: 120px;
          width: 4px;
          height: 80px;
          background: linear-gradient(
            180deg,
            #2a2a2a 0%,
            #3a3a3a 50%,
            #2a2a2a 100%
          );
          border-radius: 0 3px 3px 0;
        }

        .phone-frame::after {
          content: "";
          position: absolute;
          left: -3px;
          top: 100px;
          width: 4px;
          height: 50px;
          background: linear-gradient(
            180deg,
            #2a2a2a 0%,
            #3a3a3a 50%,
            #2a2a2a 100%
          );
          border-radius: 3px 0 0 3px;
          box-shadow: 0 40px 0 #2a2a2a;
        }

        @media (max-width: 768px) {
          .phone-mockup {
            max-width: 240px;
          }

          .phone-frame {
            border-radius: 38px;
            padding: 10px;
          }

          .phone-screen {
            border-radius: 30px;
          }

          .dynamic-island {
            width: 85px;
            height: 28px;
            top: 15px;
          }
        }
      `}</style>
    </motion.div>
  );
}
