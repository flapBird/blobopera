import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { getCategoryLabel } from "@/lib/articles";

interface ArticleCardProps {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:shadow-md hover:border-gray-200"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-0.5 rounded-full">
          {getCategoryLabel(article.category)}
        </span>
        <span className="text-xs text-text-dark/40">
          {article.readingTime} min read
        </span>
      </div>

      <h3 className="font-heading font-bold text-lg text-text-dark group-hover:text-primary transition-colors mb-2 leading-snug">
        {article.title}
      </h3>

      <p className="text-sm text-text-dark/60 leading-relaxed line-clamp-2">
        {article.description}
      </p>
    </Link>
  );
}
