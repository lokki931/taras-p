"use client";
import { useState } from "react";
import { Container } from "@/components/container";
import { Project } from "./project";
import { projects } from "./data-portfolio";

export function PortfolioView() {
  const [isSingleColumn, setIsSingleColumn] = useState(true);

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
          {projects.map((project, idx) => (
            <Project
              key={project.id}
              project={project}
              idx={idx}
              isSingleColumn={isSingleColumn}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
