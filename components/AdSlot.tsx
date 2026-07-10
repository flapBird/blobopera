"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site.config";

interface AdSlotProps {
  type: "sidebar" | "rectangle" | "banner";
  className?: string;
}

/**
 * AdSlot — renders a real Google AdSense display ad.
 * Uses responsive ad units that adapt to the slot size.
 */
export default function AdSlot({ type, className = "" }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  const sizeStyles = {
    sidebar: "w-[160px] min-h-[600px]",
    rectangle: "w-[300px] h-[250px]",
    banner: "w-full h-[90px]",
  };

  const adSizes = {
    sidebar: "160x600",
    rectangle: "300x250",
    banner: "728x90",
  };

  useEffect(() => {
    if (!siteConfig.ads.clientId) return;
    if (initialized.current) return;
    initialized.current = true;

    // Push the ad unit to AdSense
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // Silently ignore AdSense errors
    }
  }, []);

  if (!siteConfig.ads.enabled || !siteConfig.ads.clientId) return null;

  return (
    <div className={`${sizeStyles[type]} flex items-center justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client={siteConfig.ads.clientId}
        data-ad-slot={adSizes[type]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
