"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [gameState, setGameState] = useState<"idle" | "loading" | "loaded">(
    "idle",
  );
  const [loadTimedOut, setLoadTimedOut] = useState(false);

  useEffect(() => {
    if (gameState !== "loading" || !iframeRef.current) return;

    setLoadTimedOut(false);
    iframeRef.current.src = siteConfig.game.embedUrl;
    const timeout = window.setTimeout(() => setLoadTimedOut(true), 15000);
    return () => window.clearTimeout(timeout);
  }, [gameState]);

  const handlePlay = useCallback(() => {
    setGameState("loading");
  }, []);

  const handleReload = useCallback(() => {
    if (!iframeRef.current) {
      setGameState("loading");
      return;
    }
    setGameState("loading");
    iframeRef.current.src = siteConfig.game.embedUrl;
  }, []);

  const handleFullscreen = useCallback(async () => {
    const element = containerRef.current;
    if (!element) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await element.requestFullscreen();
      }
    } catch {
      // Fullscreen may be unavailable when browser or device policy blocks it.
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-stone-950"
      >
        {gameState === "idle" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <img
              src={siteConfig.game.coverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
            <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
              <button
                type="button"
                onClick={handlePlay}
                className="btn-play inline-flex min-h-12 items-center gap-3 rounded-full border border-white/40 bg-black/35 px-6 py-3 font-heading text-base sm:text-lg font-bold text-white backdrop-blur-md hover:bg-black/50"
                aria-label="Load and play Blob Opera"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Blob Opera
              </button>
              <p className="text-white/90 text-xs sm:text-sm">
                Free to play · Hosted by Google Arts &amp; Culture
              </p>
            </div>
          </div>
        )}

        {gameState === "loading" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-stone-950 px-6 text-center">
            <div
              className="w-11 h-11 border-4 border-white/25 border-t-primary rounded-full animate-spin"
              aria-hidden="true"
            />
            <p className="text-white mt-4 text-sm font-heading font-semibold">
              Loading the Google-hosted experiment…
            </p>
            {loadTimedOut && (
              <div className="mt-4">
                <p className="text-white/80 text-sm">
                  Loading is taking longer than expected.
                </p>
                <button
                  type="button"
                  onClick={handleReload}
                  className="mt-3 rounded-lg bg-white px-4 py-2 text-sm font-bold text-stone-900"
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        )}

        {gameState !== "idle" && (
          <iframe
            ref={iframeRef}
            className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
              gameState === "loaded" ? "opacity-100" : "opacity-0"
            }`}
            allow="autoplay; fullscreen; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title="Blob Opera interactive experiment"
            onLoad={() => {
              if (iframeRef.current?.src.startsWith(siteConfig.game.embedUrl)) {
                setGameState("loaded");
              }
            }}
          />
        )}
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-text-dark/70">
          Independent fan site. The embedded game is created by David Li and
          Google Arts &amp; Culture.
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReload}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-text-dark/80 hover:bg-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a9 9 0 0115.36-5.36M20 15a9 9 0 01-15.36 5.36" />
            </svg>
            Reload
          </button>
          <button
            type="button"
            onClick={handleFullscreen}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-text-dark/80 hover:bg-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
            </svg>
            Fullscreen
          </button>
        </div>
      </div>
      <p className="mt-1 text-xs text-text-dark/70 sm:hidden">
        Tip: fullscreen mode gives the game more room on a phone.
      </p>
    </div>
  );
}
