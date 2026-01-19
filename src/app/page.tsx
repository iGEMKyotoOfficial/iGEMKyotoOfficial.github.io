import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export default async function HomePage() {
  const { title, subtitle, contentHtml } = await getMarkdownContent("home");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            団体について
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Markdown Content Section */}
      {contentHtml && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <MarkdownContent html={contentHtml} />
          </div>
        </section>
      )}
    </div>
  );
}
