import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface MarkdownContent {
  title: string;
  subtitle: string;
  contentHtml: string;
}

export async function getMarkdownContent(
  filename: string
): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const adjustedContent = content.replace(/\.\.\/public\//g, '/');
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title || "",
    subtitle: data.subtitle || "",
    contentHtml,
  };
}
