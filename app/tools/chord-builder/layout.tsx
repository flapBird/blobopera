import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Interactive Chord Builder: Build Chords by Ear",
  description:
    "Build common intervals and chords, hear simple Web Audio tones, and learn context-aware harmony labels.",
  path: "/tools/chord-builder",
});

export default function ChordBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
