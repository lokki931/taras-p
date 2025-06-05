import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/container";

const technologies = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Prisma",
  "SQLite",
];

export function AboutView() {
  return (
    <Container>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-600">About Me</h1>
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
              Hi! I&apos;m a junior front-end developer who loves building
              modern, responsive web applications. I’m currently focused on
              learning <strong>Next.js</strong> and improving my skills in
              full-stack development.
            </p>
            <p>
              I&apos;m studying <strong>Software Engineering</strong> at{" "}
              <strong>Khmelnytskyi National University</strong>. Before that, I
              completed my college degree at{" "}
              <strong>Khmelnytskyi Polytechnic College</strong>, where I built a
              solid technical foundation.
            </p>
            <p>
              In the next 5 years, my goal is to become a{" "}
              <strong>Senior Front-end Developer</strong> and to expand into{" "}
              <strong>mobile app development</strong> as well. I&apos;m excited
              to grow in both web and mobile technologies and build high-quality
              user experiences.
            </p>
          </div>
        </div>

        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">
            Technologies I Use
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside text-green-600">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
        <section className="text-green-600 mt-4">
          <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
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
