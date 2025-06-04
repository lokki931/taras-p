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
    title: "Milk Production Tracker",
    description:
      "This is a web application that allows farmers to track daily milk production, fat percentage, and calculate the estimated income based on fat-adjusted milk prices. Built with Next.js App Router, React, Tailwind CSS, Prisma, PostgreSQL, and Context API.",
    image: "/01_img.png",
    github: "https://github.com/lokki931/milk-track",
    siteUrl: "https://milk-track-rho.vercel.app",
    buildby: <TbBrandNextjs title="Built with Next." />,
  },
  {
    id: uuidv4(),
    title: "Finance Tracker",
    description:
      "Finance Tracker is a simple and efficient web application built with React and Vite. It allows users to track their financial transactions, filter records, paginate results, and visualize financial data with interactive charts.",
    image: "/02_img.png",
    github: "https://github.com/lokki931/tracker_finance",
    siteUrl: "https://trackerfinance.vercel.app",
    buildby: <FaReact title="Built with React" />,
  },
  {
    id: uuidv4(),
    title: "Habit Tracker",
    description:
      "A simple Habit Tracker built with React.js, Tailwind CSS, using Context API and localStorage for state and data persistence.",
    image: "/03_img.png",
    github: "https://github.com/lokki931/tracker-hobies",
    siteUrl: "https://tracker-hobies.vercel.app/",
    buildby: <FaReact title="Built with React" />,
  },
];
