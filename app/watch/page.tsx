"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function WatchPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams.get("url");

  if (!url) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-text-dark/50 font-heading font-semibold mb-4">
          No recording URL provided.
        </p>
        <button
          onClick={() => router.back()}
          className="text-sm text-primary hover:underline font-heading font-semibold"
        >
          &larr; Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="text-sm text-primary hover:underline font-heading font-semibold flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* Player */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-100" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={url}
            className="w-full h-full"
            allow="autoplay; fullscreen; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}

export default function WatchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      <WatchPlayer />
    </Suspense>
  );
}
