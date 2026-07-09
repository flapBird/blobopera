import { siteConfig } from "@/lib/site.config";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Shared layout for Privacy Policy and Terms & Conditions pages.
 */
export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <article className="prose prose-slate max-w-none">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-2">
          {title}
        </h1>
        <p className="text-sm text-text-dark/50 mb-8">
          Last updated: {siteConfig.legal.lastUpdated}
        </p>
        <div className="space-y-4 text-text-dark/80 leading-relaxed">
          {children}
        </div>
      </article>
    </div>
  );
}
