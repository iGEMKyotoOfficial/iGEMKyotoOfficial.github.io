import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Menu } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iGEM Kyoto",
  description: "iGEM Kyoto Official Website",
};

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "団体概要" },
  { href: "/project", label: "PROJECT" },
  { href: "/member", label: "MEMBER" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
  { href: "/sponsor", label: "協賛・寄付" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                iGEM Kyoto
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex md:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu */}
              <details className="group md:hidden">
                <summary className="list-none cursor-pointer">
                  <Menu className="h-6 w-6" />
                </summary>
                <nav className="absolute left-0 right-0 top-16 border-t bg-white/95 px-4 pb-4 backdrop-blur-md dark:bg-black/95">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </details>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
