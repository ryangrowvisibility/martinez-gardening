import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martinez Gardening | Lawn & Garden Care in Fresno, CA",
  description:
    "Martinez Gardening — personal lawn and garden care by Julian Martinez since 2008. Lawn mowing, edging, garden maintenance, yard cleanup, and landscaping in Fresno, CA. Call (559) 978-2067.",
  openGraph: {
    title: "Martinez Gardening | Lawn & Garden Care in Fresno, CA",
    description:
      "Personalized lawn and garden care in Fresno since 2008. Julian Martinez — flexible scheduling, thorough work, and genuine care for every yard.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
