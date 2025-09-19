"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/container";
import { useTranslations } from "next-intl";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Prisma",
  "SQLite",
  "Neon",
  "Better Auth",
  "Drizzle Orm",
  "Postgresql",
];

export function AboutView() {
  const t = useTranslations("AboutPage");
  return (
    <Container>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">{t("title")}</h1>
        <div className="flex flex-col items-center gap-y-4">
          <Image
            src="/hero.png"
            alt="My photo"
            width={300}
            height={300}
            className="border-4 border-green-300 shadow-lg"
          />
          <div className="text-lg text-justify space-y-2 text-green-400">
            <p>
              {t.rich("desc.d0", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich("desc.d1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich("desc.d2", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
        </div>

        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">
            {t("technologies")}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-green-600">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <section className="text-green-600 mt-4">
          <h2 className="text-2xl font-semibold mb-2">{t("connect")}</h2>
          <div className="flex flex-wrap gap-6 items-center text-lg">
            <Link
              href="https://github.com/lokki931"
              target="_blank"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <FaGithub size={24} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/lokki931"
              target="_blank"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <FaLinkedin size={24} />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
