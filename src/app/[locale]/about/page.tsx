import { AboutView } from "@/components/pages/views/about/about-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Taras P.",
  description:
    "Learn more about me – a junior front-end developer studying Software Engineering at Khmelnytskyi National University. Skilled in React, Next.js, Tailwind CSS, and more.",
};
const Page = () => {
  return <AboutView />;
};

export default Page;
