import { ServicesView } from "@/components/pages/views/services/services-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Portfolio Taras",
};
const Page = () => {
  return <ServicesView />;
};

export default Page;
