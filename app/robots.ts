import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://ajay-cinematic-portfolio-ajays-projects-add07fd6.vercel.app/sitemap.xml",
  };
}
