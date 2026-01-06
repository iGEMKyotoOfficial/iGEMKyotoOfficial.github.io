import { Newspaper } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 pt-24">
      <Newspaper className="h-12 w-12 text-gray-400" />
      <h1 className="text-3xl font-bold">NEWS</h1>
      <p className="text-gray-600 dark:text-gray-400">Latest Updates</p>
    </div>
  );
}
