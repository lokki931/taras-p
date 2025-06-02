import { AboutView } from "@/components/pages/views/about/about-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio Taras",
};
const Page = () => {
  return <AboutView />;
};

export default Page;
