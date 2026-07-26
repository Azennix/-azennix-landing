import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azennix — AI Systems for Human Growth",
  description:
    "Azennix builds AI systems for human growth. Home of IRABrain, the memory and achievement OS for Gen-Z founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Azennix",
      url: "https://azennix.com",
      logo: "https://azennix.com/logo/azennix-icon-square.png",
      description:
        "Azennix builds AI systems for human growth, including IRABrain, the memory and achievement OS for Gen-Z founders.",
      sameAs: [
        "https://www.linkedin.com/in/challaaneesh",
      ],
    }),
  }}
/>

      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
