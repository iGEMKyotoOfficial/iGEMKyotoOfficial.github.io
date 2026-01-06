import { Heart } from "lucide-react";

export default function SponsorPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Heart className="mx-auto mb-4 h-12 w-12 text-red-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            協賛・寄付
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Support Us</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
          <p className="text-gray-500 dark:text-gray-400">
            コンテンツは準備中です
          </p>
        </div>
      </div>
    </div>
  );
}
