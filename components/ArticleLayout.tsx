import { getCategoryLabel } from "@/lib/articles";
import type { ArticleMeta } from "@/lib/articles";
import Link from "next/link";

interface ArticleLayoutProps {
  article: ArticleMeta;
  children: React.ReactNode;
  relatedArticles: { slug: string; title: string }[];
}

export default function ArticleLayout({
  article,
  children,
  relatedArticles,
}: ArticleLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-text-dark/70" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="hover:text-primary transition-colors">
          Articles
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-dark/70">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-0.5 rounded-full">
            {getCategoryLabel(article.category)}
          </span>
          <span className="text-xs text-text-dark/70">
            {article.readingTime} min read
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-text-dark/70 text-sm">
          Published {article.publishedAt} · Reviewed against the sources below
        </p>
      </header>

      {/* Content */}
      <article className="prose prose-slate max-w-none">
        <div className="space-y-6 text-text-dark/80 leading-relaxed">
          {children}
        </div>
      </article>

      <aside className="mt-12 rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
        <h2 className="font-heading font-bold text-lg text-text-dark">
          Sources and editorial scope
        </h2>
        <p className="mt-2 text-sm leading-7 text-text-dark/80">
          Blob Opera project facts are checked against Google Arts &amp;
          Culture&apos;s{" "}
          <a
            href="https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline"
          >
            official experiment page
          </a>{" "}
          and Google&apos;s{" "}
          <a
            href="https://blog.google/company-news/outreach-and-initiatives/arts-culture/story-behind-blob-opera-world-tour/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline"
          >
            world-tour project story
          </a>
          . General music explanations provide learning context. Where Google
          has not disclosed an implementation detail, the article says so
          instead of presenting a guess as fact.
        </p>
      </aside>

      {/* Related articles footer */}
      {relatedArticles.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h2 className="font-heading font-bold text-xl text-text-dark mb-4">
            Related Articles
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedArticles.map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className="text-primary underline text-sm hover:text-primary/80 transition-colors"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
