interface AdSlotProps {
  type: "sidebar" | "rectangle" | "banner";
  className?: string;
}

/**
 * AdSlot — reserved for future use.
 * AdSense head script is loaded globally via layout.tsx.
 * Individual ad units are not rendered on this site.
 */
export default function AdSlot(_props: AdSlotProps) {
  return null;
}
