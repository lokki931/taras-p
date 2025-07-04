"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="py-4 border-t border-green-600">
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <Link href="https://github.com/lokki931" target="_blank">
              <FaGithub className="text-green-600 w-6 h-6 transition hover:opacity-80 hover:scale-110" />
            </Link>
            <Link href="https://linkedin.com/in/lokki931" target="_blank">
              <FaLinkedin className="text-green-600 w-6 h-6 transition hover:opacity-80 hover:scale-110" />
            </Link>
          </div>
          <div className="text-green-600">
            © {new Date().getFullYear()} Taras P. {t("copy")}
          </div>
        </div>
      </Container>
    </footer>
  );
};
