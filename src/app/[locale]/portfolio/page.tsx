import { PortfolioView } from "@/components/pages/views/portfolio/portfolio-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Taras P.",
  description:
    "A showcase of my front-end development projects built with React, Next.js, and Tailwind CSS.",
};
const Page = () => {
  return <PortfolioView />;
};

export default Page;
