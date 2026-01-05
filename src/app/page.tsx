import { Home, Github } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="flex items-center gap-3">
        <Home className="h-10 w-10" />
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Your site is ready.
      </p>
      <a
        href="https://github.com"
        className="flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
      >
        <Github className="h-5 w-5" />
        GitHub
      </a>
    </div>
  );
}
