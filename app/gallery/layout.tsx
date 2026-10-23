import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blob Opera Recording Gallery & Share Links",
  description:
    "Save and replay valid Blob Opera recording links locally in your browser. Nothing is uploaded or publicly submitted.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
