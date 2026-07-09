"use client";

import { useRef, useState, useCallback } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [likes, setLikes] = useState<"idle" | "liked" | "disliked">("idle");

  // Load existing vote from localStorage
  const [persistedVote, setPersistedVote] = useState<"liked" | "disliked" | null>(() => {
    if (typeof window === "undefined") return null;
    const v = localStorage.getItem("blob_opera_vote");
    if (v === "liked" || v === "disliked") {
      setLikes(v);
      return v;
    }
    return null;
  });

  const handleVote = useCallback((type: "liked" | "disliked") => {
    const existing = localStorage.getItem("blob_opera_vote");
    if (existing === "liked" || existing === "disliked") return; // already voted
    localStorage.setItem("blob_opera_vote", type);
    setLikes(type);
    setPersistedVote(type);
  }, []);

  const handleReload = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = siteConfig.game.embedUrl;
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Game container — fullscreen wraps this */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio: siteConfig.game.aspectRatio }}
      >
        <iframe
          ref={iframeRef}
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={siteConfig.game.name}
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-end gap-1 mt-2 text-text-dark/50">
        {/* Thumb up */}
        <button
          onClick={() => handleVote("liked")}
          disabled={persistedVote !== null}
          className={`p-2 rounded-lg transition-colors ${
            likes === "liked"
              ? "text-primary bg-primary/10"
              : "hover:bg-gray-100 hover:text-text-dark"
          }`}
          title="Like"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
          </svg>
        </button>

        {/* Thumb down */}
        <button
          onClick={() => handleVote("disliked")}
          disabled={persistedVote !== null}
          className={`p-2 rounded-lg transition-colors ${
            likes === "disliked"
              ? "text-red-500 bg-red-50"
              : "hover:bg-gray-100 hover:text-text-dark"
          }`}
          title="Dislike"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10zM17 2h3a2 2 0 012 2v7a2 2 0 01-2 2h-3" />
          </svg>
        </button>

        {/* Separator */}
        <span className="w-px h-5 bg-gray-200 mx-1" />

        {/* Reload */}
        <button
          onClick={handleReload}
          className="p-2 rounded-lg hover:bg-gray-100 hover:text-text-dark transition-colors"
          title="Reload game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a9 9 0 0115.36-5.36M20 15a9 9 0 01-15.36 5.36" />
          </svg>
        </button>

        {/* Fullscreen */}
        <button
          onClick={handleFullscreen}
          className="p-2 rounded-lg hover:bg-gray-100 hover:text-text-dark transition-colors"
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
