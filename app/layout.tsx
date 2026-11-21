import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ajay Kumar Yadav — Full Stack & AI Engineer", description: "11+ years building scalable products, distributed systems and AI-powered experiences." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
