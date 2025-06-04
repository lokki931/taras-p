"use client";
import { motion } from "framer-motion";
import { TSkill } from "./data-skills";
type Props = {
  title: string;
  skills: TSkill[];
  startIndex?: number;
};
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};
export function Section({ title, skills, startIndex = 0 }: Props) {
  return (
    <div className="shadow-md bg-green-100/10 shadow-green-600 px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={startIndex + index}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="text-2xl">{skill.icon}</div>
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
