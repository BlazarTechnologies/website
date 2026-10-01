import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Blazar Technologies is an independent team building a open-source projects from the ground up.";

export const metadata: Metadata = {
  metadataBase: new URL("https://blazartech.org"),
  title: {
    default: "Blazar Technologies",
    template: "%s · Blazar Technologies",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Blazar Technologies",
    title: "Blazar Technologies",
    description,
  },
  twitter: {
    card: "summary",
    title: "Blazar Technologies",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
