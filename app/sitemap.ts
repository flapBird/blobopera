import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { getAllArticleMetas } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy", "/terms"];
  const featureRoutes = ["/quiz", "/gallery", "/tools/chord-builder"];
  const articleMetas = getAllArticleMetas();
  const articleByRoute = new Map(
    articleMetas.map((meta) => [`/articles/${meta.slug}`, meta]),
  );
  const articleRoutes = articleMetas.map((meta) => `/articles/${meta.slug}`);
  const allRoutes = [...staticRoutes, ...featureRoutes, "/articles", ...articleRoutes];

  return allRoutes.map((route) => {
    const article = articleByRoute.get(route);
    return {
      url: `${siteConfig.domain}${route}`,
      lastModified: article
        ? new Date(article.updatedAt ?? article.publishedAt)
        : new Date(),
      changeFrequency: (route === "" || route.startsWith("/articles/") || featureRoutes.includes(route))
        ? ("weekly" as const)
        : ("monthly" as const),
      priority:
        route === "" ? 1
        : featureRoutes.includes(route) ? 0.9
        : route === "/articles" ? 0.8
        : route.startsWith("/articles/") ? 0.7
        : 0.6,
    };
  });
}
