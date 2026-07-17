import { buildMetadata } from "@/lib/seo";
import { getAllArticleMetas, getCategoryLabel, categoryOrder } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";

export const metadata = buildMetadata({
  title: "Articles",
  description: "Read articles about AI music, music education, guides, and opera appreciation.",
  path: "/articles",
});

export default function ArticlesPage() {
  const metas = getAllArticleMetas();

  // Group by category in order
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      label: getCategoryLabel(cat),
      articles: metas.filter((a) => a.category === cat),
    }))
    .filter((g) => g.articles.length > 0);

  if (metas.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading font-extrabold text-3xl text-text-dark mb-4">Articles</h1>
        <p className="text-text-dark/50">Articles coming soon. Check back later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-2">
        Articles
      </h1>
      <p className="text-text-dark/50 mb-10 max-w-2xl">
        Read and learn about music, technology, and creativity.
      </p>

      {grouped.map((group) => (
        <section key={group.category} className="mb-12">
          <h2 className="font-heading font-bold text-xl text-text-dark mb-5">
            {group.label}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {group.articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
