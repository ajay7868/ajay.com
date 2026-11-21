import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://ajay-cinematic-portfolio-ajays-projects-add07fd6.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajay Kumar Yadav | Senior Full Stack & AI Engineer",
    template: "%s | Ajay Kumar Yadav",
  },
  description:
    "Ajay Kumar Yadav is a senior full-stack engineer focused on scalable products, distributed systems and practical AI-powered experiences.",
  applicationName: "Ajay Kumar Yadav — Engineering Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ajay Kumar Yadav | Senior Full Stack & AI Engineer",
    description:
      "Explore Ajay's engineering journey, selected work, technical expertise and AI-focused product engineering.",
    siteName: "Ajay Kumar Yadav",
    images: [{ url: "/ajay-portrait.svg", width: 1280, height: 1792, alt: "Ajay Kumar Yadav" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Kumar Yadav | Senior Full Stack & AI Engineer",
    description:
      "Senior full-stack engineer building scalable products, distributed systems and AI-powered experiences.",
    images: ["/ajay-portrait.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a09",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
