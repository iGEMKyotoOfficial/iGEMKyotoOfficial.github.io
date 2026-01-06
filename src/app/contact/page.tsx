import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Mail className="mx-auto mb-4 h-12 w-12 text-orange-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            CONTACT
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get in Touch
          </p>
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
