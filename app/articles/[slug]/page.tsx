import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
} from "@/lib/articles";
import { buildArticleJsonLd } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaMarkup from "@/components/SchemaMarkup";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const canonical = `${siteConfig.domain}/articles/${article.meta.slug}`;
  return {
    title: `${article.meta.title} | ${siteConfig.siteName}`,
    description: article.meta.description,
    alternates: { canonical },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
      type: "article",
      publishedTime: article.meta.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
      images: [siteConfig.seo.ogImage],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 3).map((a) => ({
    slug: a.meta.slug,
    title: a.meta.title,
  }));

  const jsonLd = buildArticleJsonLd({
    title: article.meta.title,
    description: article.meta.description,
    url: `${siteConfig.domain}/articles/${article.meta.slug}`,
    publishedAt: article.meta.publishedAt,
  });

  return (
    <>
      <SchemaMarkup jsonLd={jsonLd} />
      <ArticleLayout
        article={article.meta}
        relatedArticles={related}
      >
        {article.sections.map((section, i) => (
          <div key={i}>
            {section.headingLevel === 2 ? (
              <h2 className="font-heading font-bold text-2xl text-text-dark mt-10 mb-3">
                {section.heading}
              </h2>
            ) : (
              <h3 className="font-heading font-bold text-xl text-text-dark mt-8 mb-2">
                {section.heading}
              </h3>
            )}
            <p className="text-text-dark/70 leading-relaxed mb-3">
              {section.body}
            </p>
            {section.listItems && section.listItems.length > 0 && (
              <ul className="list-disc pl-6 space-y-1.5 text-text-dark/70 leading-relaxed mb-4">
                {section.listItems.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ArticleLayout>
    </>
  );
}
