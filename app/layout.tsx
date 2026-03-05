import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Riaz — The Architect of Intelligence",
  description:
    "Founder & AI Developer building the future of business with AI, automation, and premium digital experiences. Book a discovery call today.",
  keywords: [
    "AI Developer",
    "Next.js",
    "Shopify",
    "Automation",
    "Digital Agency",
    "Chroma Div",
  ],
  openGraph: {
    title: "Hamza Riaz — The Architect of Intelligence",
    description:
      "Building the Future of Business with AI & Automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
