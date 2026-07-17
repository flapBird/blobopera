import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { getAllArticleSlugs } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy", "/terms"];
  const articleRoutes = getAllArticleSlugs().map((slug) => `/articles/${slug}`);
  const allRoutes = [...staticRoutes, "/articles", ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route.startsWith("/articles/"))
      ? ("weekly" as const)
      : ("monthly" as const),
    priority: route === "" ? 1 : route === "/articles" ? 0.8 : route.startsWith("/articles/") ? 0.7 : 0.6,
  }));
}
