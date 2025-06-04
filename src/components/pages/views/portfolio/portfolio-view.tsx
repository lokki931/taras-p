"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { FaReact, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { Container } from "@/components/container";

const projects = [
  {
    id: uuidv4(),
    title: "Milk Production Tracker",
    description:
      "This is a web application that allows farmers to track daily milk production, fat percentage, and calculate the estimated income based on fat-adjusted milk prices. Built with Next.js App Router, React, Tailwind CSS, Prisma, PostgreSQL, and Context API.",
    image: "https://placehold.co/600x400",
    github: "https://github.com/lokki931/milk-track",
    siteUrl: "https://milk-track-rho.vercel.app",
    buildby: <TbBrandNextjs title="Built with Next." />,
  },
  {
    id: uuidv4(),
    title: "Finance Tracker",
    description:
      "Finance Tracker is a simple and efficient web application built with React and Vite. It allows users to track their financial transactions, filter records, paginate results, and visualize financial data with interactive charts.",
    image: "https://placehold.co/600x400",
    github: "https://github.com/lokki931/tracker_finance",
    siteUrl: "https://trackerfinance.vercel.app",
    buildby: <FaReact title="Built with React" />,
  },
  {
    id: uuidv4(),
    title: "Habit Tracker",
    description:
      "A simple Habit Tracker built with React.js, Tailwind CSS, using Context API and localStorage for state and data persistence.",
    image: "https://placehold.co/600x400",
    github: "https://github.com/lokki931/tracker-hobies",
    siteUrl: "https://tracker-hobies.vercel.app/",
    buildby: <FaReact title="Built with React" />,
  },
];

export function PortfolioView() {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  return (
    <Container>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">My Projects</h1>
        <p className="text-green-400 mb-6">
          Here you can find a selection of my recent work — real-world projects
          that demonstrate my skills in building responsive, modern web
          applications.
        </p>
        <button
          onClick={() => setIsSingleColumn((prev) => !prev)}
          className="mb-6 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          {isSingleColumn ? "🔳 Grid View" : "📋 List View"}
        </button>

        {/* Сітка */}
        <div
          className={`grid gap-6 ${
            isSingleColumn
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={clsx(
                "shadow-md bg-green-100/10 shadow-green-600 px-4 py-6 hover:shadow-xs transition",
                isSingleColumn && "flex flex-col md:flex-row gap-6"
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className={clsx(
                  "rounded-lg w-full h-48 object-cover",
                  isSingleColumn &&
                    "max-w-full md:max-w-sm  lg:max-w-md h-48 md:h-auto"
                )}
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-1 text-green-700">
                  {project.title}
                </h3>
                <p className="text-green-600 mb-3">
                  {isSingleColumn
                    ? project.description
                    : project.description.length > 95
                    ? project.description.slice(0, 95) + "..."
                    : project.description}
                </p>
                <div className="flex items-center gap-4 text-green-600 text-xl">
                  {project.buildby}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      title="View on GitHub"
                      className="hover:text-green-500"
                    />
                  </a>
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink
                      title="View on Site"
                      className="hover:text-green-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
