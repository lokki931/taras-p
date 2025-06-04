"use client";
import { Container } from "@/components/container";
import { Section } from "./section";
import { frontend, learning, tools } from "./data-skills";

export function SkillsView() {
  return (
    <Container>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">My Skills</h1>
        <p className="text-green-400 mb-6">
          Here are the tools and technologies I use regularly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-green-600 py-6">
          <Section title="Frontend" skills={frontend} />
          <Section title="Tools" skills={tools} startIndex={frontend.length} />
          <Section
            title="Studying now"
            skills={learning}
            startIndex={frontend.length + tools.length}
          />
        </div>
      </div>
    </Container>
  );
}
