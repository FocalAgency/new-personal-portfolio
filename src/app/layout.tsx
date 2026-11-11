import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "../../public/fonts/archivo.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});
const inter = localFont({
  src: "../../public/fonts/inter-tight.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Kasam Ali — Creative Developer",
    template: "%s · Kasam Ali",
  },
  description:
    "UK-based developer working across thoughtful interfaces, full-stack applications and creative web experiences. Explore selected projects and experience.",
  openGraph: {
    title: "Kasam Ali — Creative Developer",
    description:
      "Thoughtful interfaces. Reliable engineering. Selected work by Kasam Ali.",
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary", title: "Kasam Ali — Creative Developer" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body className={`${archivo.variable} ${inter.variable}`}>
        <a
          className="fixed top-[12px] left-[12px] z-[100] bg-off-white text-ink p-[16px] [transform:translateY(-200%)] focus:[transform:translateY(0)]"
          href="#main"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
