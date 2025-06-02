import { PortfolioView } from "@/components/pages/views/portfolio/portfolio-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Portfolio Taras",
};
const Page = () => {
  return <PortfolioView />;
};

export default Page;
