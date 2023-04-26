import type { Metadata } from "next";
import { Locale } from "./i18n-config";
import { getDictionary } from "./get-dictionary";

export default async function metadataGenerator(
  path: "about" | "methods" | "testimonials" | "contact" | "team" | "home",
  lang: Locale
) {
  const dictionary = await getDictionary(lang);
  return {
    title:
      dictionary[path].title[0].toUpperCase() +
      dictionary[path].title.slice(1) +
      " | TB-TST",
    description: dictionary[path].description,
    generator: "Next.js",
    applicationName: "TB-TST",
    referrer: "origin-when-cross-origin",
    keywords: [...dictionary[path].keywords],
    creator: "@johnny.2.smooth",
    openGraph: {
      title: dictionary[path].title,
      description: dictionary[path].description,
      // edit this!!
      // url: `https://felipe-matamala.com/${lang}/${path === "home" ? "" : path}`,
      // siteName: "Felipe Matamala",
      // images: [
      //   {
      //     // edit
      //     url: "https://felipe-matamala.com/og.png",
      //     width: 800,
      //     height: 600,
      //   },
      //   {
      //     // edit
      //     url: "https://felipe-matamala.com/og-alt.png",
      //     width: 1800,
      //     height: 1600,
      //     alt: "My custom alt",
      //   },
      // ],
      locale: lang,
      type: "website",
    },
    icons: {
      icon: `/${lang ?? "en"}/logo.png`,
    },
    // themeColor: [
    //   { media: '(prefers-color-scheme: light)', color: 'cyan' },
    //   { media: '(prefers-color-scheme: dark)', color: 'black' },
    // ],
    alternates: {
      // canonical: "https://felipe-matamala.com",
      // languages: {
      //   en: "https://felipe-matamala.com/en",
      //   es: "https://felipe-matamala.com/es",
      // },
    },
  } as Metadata;
}
