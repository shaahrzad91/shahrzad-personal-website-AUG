import type { Metadata } from "next";
import { ElevenLabsWidget } from "./components/ElevenLabsWidget";
import "./globals.css";

const title = "Shahrzad Amin Ranjbar | Data Scientist & AI/ML Engineer";
const description =
  "The personal digital home of Shahrzad Amin Ranjbar - Senior Data Scientist, AI/ML Engineer, and Generative AI specialist in Toronto.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  keywords: [
    "Shahrzad Amin Ranjbar",
    "Data Scientist",
    "AI ML Engineer",
    "Generative AI",
    "Responsible AI",
    "Toronto",
  ],
  authors: [{ name: "Shahrzad Amin Ranjbar" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og.png", width: 1732, height: 907, alt: "Shahrzad Amin Ranjbar - AI systems for meaningful decisions" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
