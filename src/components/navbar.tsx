"use client";
import { useIsMobile } from "@/hooks/is-mobile";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import clsx from "clsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const links = [
  { id: uuidv4(), href: "/", labelKey: "navbar.home" },
  { id: uuidv4(), href: "/skills", labelKey: "navbar.skills" },
  { id: uuidv4(), href: "/portfolio", labelKey: "navbar.portfolio" },
  { id: uuidv4(), href: "/about", labelKey: "navbar.about" },
];

export const Navbar = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const isMobile = useIsMobile();
  if (isMobile)
    return (
      <nav>
        {!isOpen ? (
          <GiHamburgerMenu
            onClick={() => setIsOpen(true)}
            className="text-3xl text-green-600"
          />
        ) : (
          <RiCloseLargeFill
            onClick={() => setIsOpen(false)}
            className="text-3xl relative z-10"
          />
        )}
        {isOpen && (
          <ul className="fixed inset-0 bg-green-800 flex flex-col  justify-center gap-y-5 z-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="max-w-3/4 w-full mx-auto flex flex-col"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "w-full text-3xl hover:opacity-70 p-2 border rounded-b-md",
                    pathName === link.href && "opacity-70 font-bold"
                  )}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    );
  return (
    <nav>
      <ul className="flex gap-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={clsx(
                "hover:text-green-400 text-green-600",
                pathName === link.href && "text-green-400 font-bold"
              )}
            >
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
