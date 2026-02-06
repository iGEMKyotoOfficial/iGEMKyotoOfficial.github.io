import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "iGEM Kyoto",
  description: "iGEM Kyoto Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} antialiased`}
      >
        {/* Background Logo - ドットより上、コンテンツより下 */}
        <div className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-[1]">
          <img
            src="/homepage/favicon.ico"
            alt=""
            className="w-[108vw] max-w-[720px] opacity-20 dark:opacity-15"
          />
        </div>
        <Header />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
