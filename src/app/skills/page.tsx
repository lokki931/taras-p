import { SkillsView } from "@/components/pages/views/skills/skills-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Portfolio Taras",
};
const Page = () => {
  return <SkillsView />;
};

export default Page;
