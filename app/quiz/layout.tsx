import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Music Theory Quiz: Test Your Ears by Ear",
  description:
    "Try music theory, voice type, ear training, and fact-checked Blob Opera quizzes with immediate explanations.",
  path: "/quiz",
});

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
