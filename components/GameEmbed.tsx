"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { siteConfig } from "@/lib/site.config";

const COVER_IMAGE = "/blob-desc-1.webp";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [gameState, setGameState] = useState<"idle" | "loading" | "loaded">("idle");
  const [likes, setLikes] = useState<"idle" | "liked" | "disliked">("idle");
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  // Set iframe src after it mounts when gameState is "loading"
  useEffect(() => {
    if (gameState === "loading" && iframeRef.current) {
      iframeRef.current.src = siteConfig.game.embedUrl;
    }
  }, [gameState]);

  const handlePlay = useCallback(() => {
    setGameState("loading");
  }, []);

  const handleIframeLoad = useCallback(() => {
    setGameState("loaded");
  }, []);

  const handleVote = useCallback((type: "liked" | "disliked") => {
    if (likes === type) {
      setLikes("idle");
      setToastText("Vote removed");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
      return;
    }
    setLikes(type);
    setToastText(type === "liked" ? "Thanks for your feedback!" : "Noted, thanks!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, [likes]);

  const handleReload = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = siteConfig.game.embedUrl;
    }
    if (gameState === "loaded") {
      setGameState("loading");
    }
  }, [gameState]);

  const handleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  }, []);

  const isLiked = likes === "liked";
  const isDisliked = likes === "disliked";
  const hasVoted = likes !== "idle";

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio: siteConfig.game.aspectRatio, minHeight: "480px" }}
      >
        {/* Idle state: cover overlay with play button */}
        {gameState === "idle" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <img
              src={COVER_IMAGE}
              alt="Play Blob Opera"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <button
                onClick={handlePlay}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-lg font-heading font-bold transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Blob Opera
              </button>
              <p className="text-white/70 text-sm">Free, no download required</p>
            </div>
          </div>
        )}

        {/* Loading state */}
        {gameState === "loading" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-900">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-white/20 border-t-primary rounded-full animate-spin" />
              <p className="text-white/80 text-sm font-heading font-medium">Loading Blob Opera...</p>
            </div>
          </div>
        )}

        {/* The iframe: only rendered when play is clicked */}
        {gameState !== "idle" && (
          <iframe
            ref={iframeRef}
            className={`w-full h-full transition-opacity duration-500 ${gameState === "loaded" ? "opacity-100" : "opacity-0"}`}
            style={{ minHeight: "480px" }}
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title={siteConfig.game.name}
            onLoad={handleIframeLoad}
          />
        )}
      </div>

      {/* Toolbar */}
      <p className="text-xs text-text-dark/30 text-center mb-1">An independent fan site.</p>
<div className="flex items-center justify-end gap-1 mt-1 text-text-dark/50 relative">
        {/* Vote feedback toast */}
        {showToast && (
          <div
            className="absolute right-0 -top-12 z-20 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: isLiked ? "#c0392b" : "#6b7280",
              color: "#fff",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            {toastText}
          </div>
        )}

        <button
          onClick={() => handleVote("liked")}
          
          className={`group p-2 rounded-lg transition-all duration-200 ${isLiked ? "text-white bg-primary scale-125 shadow-md" : isDisliked ? "opacity-40" : "hover:bg-gray-100 hover:text-text-dark hover:scale-110 active:scale-90"}`}
          title="Like"
        >
          <svg className="w-5 h-5 transition-transform duration-200 group-active:scale-125" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
          </svg>
        </button>

        <button
          onClick={() => handleVote("disliked")}
          
          className={`group p-2 rounded-lg transition-all duration-200 ${isDisliked ? "text-white bg-gray-600 scale-125 shadow-md" : isLiked ? "opacity-40" : "hover:bg-gray-100 hover:text-text-dark hover:scale-110 active:scale-90"}`}
          title="Dislike"
        >
          <svg className="w-5 h-5 transition-transform duration-200 group-active:scale-125" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10zM17 2h3a2 2 0 012 2v7a2 2 0 01-2 2h-3" />
          </svg>
        </button>

        <span className="w-px h-5 bg-gray-200 mx-1" />

        <button
          onClick={handleReload}
          className="p-2 rounded-lg hover:bg-gray-100 hover:text-text-dark transition-colors active:scale-90"
          title="Reload game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a9 9 0 0115.36-5.36M20 15a9 9 0 01-15.36 5.36" />
          </svg>
        </button>

        <button
          onClick={handleFullscreen}
          className="p-2 rounded-lg hover:bg-gray-100 hover:text-text-dark transition-colors active:scale-90"
          title="Toggle fullscreen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
