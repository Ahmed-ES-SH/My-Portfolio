import { MetadataRoute } from "next";
import { getProjects } from "@/app/lib/projects";

const BASE_URL = "https://ahmedismail.vercel.app";

const locales = ["en", "ar"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];
  const projects = await getProjects();

  // Root
  routes.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  locales.forEach((locale) => {
    // Static pages
    ["", "about", "skills", "projects"].forEach((path) => {
      routes.push({
        url: `${BASE_URL}/${locale}${path ? `/${path}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });

    // Dynamic project pages
    projects.forEach((project) => {
      routes.push({
        url: `${BASE_URL}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}
