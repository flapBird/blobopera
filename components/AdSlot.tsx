import { siteConfig } from "@/lib/site.config";

interface AdSlotProps {
  type: "sidebar" | "rectangle" | "banner";
  className?: string;
}

/**
 * AdSlot — placeholder for future AdSense integration.
 *
 * When ads.enabled is false (default), this component renders a placeholder.
 * After AdSense approval:
 * 1. Replace the placeholder div with a real <ins class="adsbygoogle"> element.
 * 2. Set siteConfig.ads.enabled = true.
 */
export default function AdSlot({ type, className = "" }: AdSlotProps) {
  if (!siteConfig.ads.enabled) return null;

  const sizeStyles = {
    sidebar: "w-[160px] min-h-[600px]",
    rectangle: "w-[300px] h-[250px]",
    banner: "w-full h-[90px]",
  };

  return (
    <div
      className={`${sizeStyles[type]} border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 ${className}`}
    >
      <span className="text-gray-400 text-sm font-medium">Ad Space</span>
    </div>
  );
}
