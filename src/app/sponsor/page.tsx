import { getMarkdownContent } from "@/lib/markdown";
import SponsorTabs from "@/components/SponsorTabs";

export default async function SponsorPage() {
  const introContent = await getMarkdownContent("sponsor-intro");
  const supportContent = await getMarkdownContent("sponsor-support");

  return (
    <SponsorTabs introContent={introContent} supportContent={supportContent} />
  );
}
