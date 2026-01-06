import { FlaskConical, Users, Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
          iGEM Kyoto
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          合成生物学の国際大会 iGEM に挑戦する京都大学のチームです
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

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-gray-50 px-6 py-24 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/project"
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <FlaskConical className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                PROJECT
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                私たちの研究プロジェクトについて
              </p>
            </Link>
            <Link
              href="/member"
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <Users className="mb-4 h-10 w-10 text-green-600 dark:text-green-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                MEMBER
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                チームメンバーの紹介
              </p>
            </Link>
            <Link
              href="/news"
              className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <Newspaper className="mb-4 h-10 w-10 text-purple-600 dark:text-purple-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                NEWS
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                最新のお知らせ
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
