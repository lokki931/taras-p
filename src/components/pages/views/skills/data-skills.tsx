import { JSX } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaHtml5, FaJs, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiRedux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type TSkill = {
  id: string;
  name: string;
  icon: JSX.Element;
  level: number;
};

export const frontend = [
  {
    id: uuidv4(),
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    level: 90,
  },
  {
    id: uuidv4(),
    name: "CSS3 / Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: 85,
  },
  {
    id: uuidv4(),
    name: "JavaScript (ES6+)",
    icon: <FaJs className="text-yellow-400" />,
    level: 80,
  },
  {
    id: uuidv4(),
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    level: 75,
  },
  {
    id: uuidv4(),
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    level: 70,
  },
];

export const tools = [
  {
    id: uuidv4(),
    name: "Git / GitHub",
    icon: <FaGithub className="text-gray-700 dark:text-gray-100" />,
    level: 75,
  },
  {
    id: uuidv4(),
    name: "VS Code",
    icon: <VscVscode className="text-blue-600" />,
    level: 85,
  },
  {
    id: uuidv4(),
    name: "Figma (верстка по макетах)",
    icon: <FaFigma className="text-pink-500" />,
    level: 70,
  },
];

export const learning = [
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    level: 60,
  },
  {
    id: uuidv4(),
    name: "Redux",
    icon: <SiRedux className="text-blue-400" />,
    level: 55,
  },
  {
    id: uuidv4(),
    name: "React Context API",
    icon: <FaReact className="text-cyan-400" />,
    level: 50,
  },
  {
    id: uuidv4(),
    name: "Prisma + SQLite",
    icon: <SiPrisma className="text-indigo-600" />,
    level: 50,
  },
  {
    id: uuidv4(),
    name: "Framer Motion (анімації)",
    icon: <FaReact className="text-pink-400" />,
    level: 40,
  },
];
