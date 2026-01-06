"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "団体概要" },
  { href: "/project", label: "PROJECT" },
  { href: "/member", label: "MEMBER" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
  { href: "/sponsor", label: "協賛・寄付" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            iGEM Kyoto
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
