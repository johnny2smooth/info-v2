"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, i18n } from "@/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const currentLocale = pathName?.split("/")[1];

  return (
    <ul className="flex gap-4 p-4 border-solid border-2 border-red-200 rounded-md font-bold">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`${
                currentLocale === locale ? " rounded-full p-2 bg-red-300" : ""
              } text-sm text-slate-900  hover:text-red-100 active:text-blue-400`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
