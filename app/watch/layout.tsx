import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Recording Playback",
    description: "Play a validated Blob Opera recording link.",
    path: "/watch",
  }),
  robots: { index: false, follow: false },
};

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
