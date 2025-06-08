import { SkillsView } from "@/components/pages/views/skills/skills-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Taras P.",
  description:
    "A list of my front-end development skills, tools, and technologies I work with.",
};
const Page = () => {
  return <SkillsView />;
};

export default Page;
