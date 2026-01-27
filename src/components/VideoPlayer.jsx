"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoPlayer({
  src,
  poster,
  autoPlayOnHover = true,
  autoPlayOnMount = false,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (autoPlayOnMount) {
        video.play().catch(() => {});
        setIsPlaying(true);
      }
    };
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [autoPlayOnMount]);

  const handleMouseEnter = () => {
    if (autoPlayOnHover && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlayOnHover && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="video-player"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Play Overlay */}
      {!isPlaying && (
        <div className="play-overlay">
          <div className="play-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="loading-skeleton">
          <div className="skeleton-shimmer" />
        </div>
      )}

      <style jsx global>{`
        .video-player {
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background: #000;
        }

        .video-player video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .video-player:hover .play-overlay {
          opacity: 0;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d6efd;
          transition: all 0.3s ease;
        }

        .play-button svg {
          width: 24px;
          height: 24px;
          margin-left: 4px;
        }

        .video-player:hover .play-button {
          transform: scale(1.1);
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .loading-skeleton {
          position: absolute;
          inset: 0;
          background: #1a1a1a;
          overflow: hidden;
        }

        .skeleton-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
