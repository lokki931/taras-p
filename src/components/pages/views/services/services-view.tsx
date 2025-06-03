"use client";
import { Container } from "@/components/container";
import { FaHtml5, FaJs, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Section } from "./section";

const frontend = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  {
    name: "CSS3 / Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: 85,
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJs className="text-yellow-400" />,
    level: 80,
  },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 75 },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    level: 70,
  },
];

const tools = [
  {
    name: "Git / GitHub",
    icon: <FaGithub className="text-gray-700 dark:text-gray-100" />,
    level: 75,
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-600" />,
    level: 85,
  },
  {
    name: "Figma (верстка по макетах)",
    icon: <FaFigma className="text-pink-500" />,
    level: 70,
  },
];

const learning = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    level: 60,
  },
  {
    name: "React Context API",
    icon: <FaReact className="text-cyan-400" />,
    level: 50,
  },
  {
    name: "Prisma + SQLite",
    icon: <SiPrisma className="text-indigo-600" />,
    level: 50,
  },
  {
    name: "Framer Motion (анімації)",
    icon: <FaReact className="text-pink-400" />,
    level: 40,
  },
];

export function ServicesView() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-green-600 py-6">
        <Section title="Frontend" skills={frontend} />
        <Section title="Tools" skills={tools} startIndex={frontend.length} />
        <Section
          title="I am studying now"
          skills={learning}
          startIndex={frontend.length + tools.length}
        />
      </div>
    </Container>
  );
}
