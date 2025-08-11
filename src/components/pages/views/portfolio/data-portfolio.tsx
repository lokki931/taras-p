"use client";
import { v4 as uuidv4 } from "uuid";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
export type TProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  siteUrl: string;
  buildby: React.ReactNode;
};
export const projects = [
  {
    id: uuidv4(),
    title: "projects.milk.title",
    description: "projects.milk.description",
    image: "/01_img.png",
    github: "https://github.com/lokki931/milk-track",
    siteUrl: "https://milk-track-rho.vercel.app",
    buildby: <TbBrandNextjs title="NextJs" />,
  },
  {
    id: uuidv4(),
    title: "projects.finance.title",
    description: "projects.finance.description",
    image: "/03_img.png",
    github: "https://github.com/lokki931/tracker_finance",
    siteUrl: "https://trackerfinance.vercel.app",
    buildby: <FaReact title="ReactJS" />,
  },
  {
    id: uuidv4(),
    title: "projects.habit.title",
    description: "projects.habit.description",
    image: "/02_img.png",
    github: "https://github.com/lokki931/tracker-hobies",
    siteUrl: "https://tracker-hobies.vercel.app/",
    buildby: <FaReact title="ReactJS" />,
  },
  {
    id: uuidv4(),
    title: "projects.booking.title",
    description: "projects.booking.description",
    image: "/04_img.png",
    github: "https://github.com/lokki931/mini-booker",
    siteUrl: "https://mini-booker.vercel.app/",
    buildby: <TbBrandNextjs title="NextJs" />,
  },
];
