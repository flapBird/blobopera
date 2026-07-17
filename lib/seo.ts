import { Metadata } from "next";
import { siteConfig } from "./site.config";

interface PageSeoInput {
  title?: string;
  description?: string;
  path: string;
}

export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const isHome = path === "/";
  const pageTitle = isHome
    ? siteConfig.seo.title
    : title
      ? `${title} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.seo.description;
  const canonical = `${siteConfig.domain}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.seo.ogImage],
    },
    ...(siteConfig.analytics.gscVerification
      ? { verification: { google: siteConfig.analytics.gscVerification } }
      : {}),
  };
}

export function buildVideoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    genre: siteConfig.game.genre,
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    description: siteConfig.seo.description,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
  };
}

export function buildArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: authorName ?? siteConfig.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
