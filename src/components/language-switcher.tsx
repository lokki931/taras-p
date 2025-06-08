"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const languages = [
    { code: "en", label: "EN" },
    { code: "uk", label: "УКР" },
  ];

  return (
    <div className="text-green-600 space-x-2">
      {languages.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={code === currentLocale ? "font-bold" : ""}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
