"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaRocket, FaPaintBrush, FaHandshake } from "react-icons/fa";

export function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-start  gap-y-4 text-green-600">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I&apos;m Taras 👋
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 animate-fade-in delay-100">
            I build simple and user-friendly interfaces:{" "}
            <span className="text-green-500">
              <Typewriter
                words={["using React", "using Next.js", "using JavaScript"]}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 animate-bounce"
          >
            View Projects
          </Link>
        </div>
        <div>
          <div className="border-animate w-[420px] h-[420px] rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/hero.png"
                width={420}
                height={420}
                alt="Taras P."
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between md:grid-cols-3 gap-6 w-full text-center my-8">
        <Benefit
          icon={<FaRocket className="w-10 h-10 mx-auto text-green-600" />}
          title="Fast performance"
          description="Optimized code and lightning-fast user interfaces."
        />
        <Benefit
          icon={<FaPaintBrush className="w-10 h-10 mx-auto text-green-600" />}
          title="Clean UI"
          description="Beautiful, modern, and user-friendly interfaces."
        />
        <Benefit
          icon={<FaHandshake className="w-10 h-10 mx-auto text-green-600" />}
          title="Easy to work with"
          description="Clear communication and responsible development."
        />
      </div>
    </>
  );
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
