"use client";

import Image from "next/image";
import { FaRocket, FaPaintBrush, FaHandshake } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Benefit } from "./benefit";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("HomePage");
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-col justify-center items-start  gap-y-4 text-green-600">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {t("title")} 👋
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 animate-fade-in delay-100">
            {t("about")}:{" "}
            <span className="text-green-500">
              <Typewriter
                words={[
                  `${t("using.u1")}`,
                  `${t("using.u2")}`,
                  `${t("using.u3")}`,
                ]}
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
            {t("btn")}
          </Link>
        </div>
        <div>
          <div className="border-animate w-[300px] lg:w-[420px] h-[300px]  lg:h-[420px]  rounded-full">
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
          title={t("benefits.b0.title")}
          description={t("benefits.b0.desc")}
        />
        <Benefit
          icon={<FaPaintBrush className="w-10 h-10 mx-auto text-green-600" />}
          title={t("benefits.b1.title")}
          description={t("benefits.b1.desc")}
        />
        <Benefit
          icon={<FaHandshake className="w-10 h-10 mx-auto text-green-600" />}
          title={t("benefits.b2.title")}
          description={t("benefits.b2.desc")}
        />
      </div>
    </div>
  );
}
