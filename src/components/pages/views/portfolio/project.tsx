"use client";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { TProject } from "./data-portfolio";
import { useTranslations } from "next-intl";

type Props = {
  project: TProject;
  isSingleColumn: boolean;
  idx: number;
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};
const Project = ({ project, isSingleColumn, idx }: Props) => {
  const t = useTranslations("PortfolioPage");
  const startIndex = 0;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={startIndex + idx}
      variants={fadeInUp}
    >
      <div
        className={clsx(
          "shadow-md bg-green-100/10 shadow-green-600 px-4 py-6 hover:shadow-xs transition",
          isSingleColumn && "flex flex-col md:flex-row gap-6"
        )}
      >
        <Image
          src={project.image}
          alt={t(project.title)}
          width={600}
          height={400}
          className={clsx(
            "rounded-lg w-full h-48 object-cover",
            isSingleColumn &&
              "max-w-full md:max-w-sm  lg:max-w-md h-48 md:h-auto"
          )}
        />
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1 text-green-700">
            {t(project.title)}
          </h3>
          <p className="text-green-600 mb-3">
            {isSingleColumn
              ? t(project.description)
              : t(project.description).length > 95
              ? t(project.description).slice(0, 95) + "..."
              : t(project.description)}
          </p>
          <div className="flex items-center gap-4 text-green-600 text-xl">
            {project.buildby}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub
                title={t("btn.github")}
                className="hover:text-green-500"
              />
            </a>
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              <FaLink title={t("btn.site")} className="hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { Project };
