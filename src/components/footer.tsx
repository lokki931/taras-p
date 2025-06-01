import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-white">
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-green-600 w-6 h-6 transition hover:opacity-80 hover:scale-110" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-green-600 w-6 h-6 transition hover:opacity-80 hover:scale-110" />
            </Link>
            <Link href="" target="_blank">
              <FaLinkedin className="text-green-600 w-6 h-6 transition hover:opacity-80 hover:scale-110" />
            </Link>
          </div>
          <div className="">
            © {new Date().getFullYear()} Taras P. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
