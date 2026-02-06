"use client";

import { Heart, Users, HandHeart } from "lucide-react";
import { useState } from "react";
import MarkdownContent from "./MarkdownContent";

interface SponsorTabsProps {
  introContent: {
    title: string;
    subtitle: string;
    contentHtml: string;
  };
  supportContent: {
    title: string;
    subtitle: string;
    contentHtml: string;
  };
}

const tabs = [
  { id: "support", label: "寄付・協賛のご案内", icon: HandHeart },
  { id: "sponsors", label: "スポンサー紹介", icon: Users },
];

export default function SponsorTabs({
  introContent,
  supportContent,
}: SponsorTabsProps) {
  const [activeTab, setActiveTab] = useState("support");

  const currentContent =
    activeTab === "sponsors" ? introContent : supportContent;

  return (
    <div className="min-h-screen">
      {/* Tabs - 上部に固定 */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-1 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Heart className="mx-auto mb-4 h-12 w-12 text-red-500" />
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {currentContent.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {currentContent.subtitle}
            </p>
          </div>

          <MarkdownContent html={currentContent.contentHtml} />
        </div>
      </div>
    </div>
  );
}
