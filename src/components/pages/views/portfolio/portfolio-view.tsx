"use client";
import { useState } from "react";
import { Container } from "@/components/container";
import { Project } from "./project";
import { projects } from "./data-portfolio";
import { useTranslations } from "next-intl";

export function PortfolioView() {
  const t = useTranslations("PortfolioPage");
  const [isSingleColumn, setIsSingleColumn] = useState(true);

  return (
    <Container>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">{t("title")}</h1>
        <p className="text-green-400 mb-6">{t("desc")}</p>
        <button
          onClick={() => setIsSingleColumn((prev) => !prev)}
          className="hidden md:inline-block mb-6 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 cursor-pointer"
        >
          {isSingleColumn ? `🔳 ${t("btn.grid")}` : `📋 ${t("btn.list")}`}
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
