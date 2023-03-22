import "./globals.css";
import Nav from "./nav";
import { i18n } from "@/i18n-config";
import type { Locale, LangParams } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import "./globals.css";
import metadataGenerator from "@/metadata-generator";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }: LangParams) {
  return await metadataGenerator("home", lang);
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { practice, writing, services, about } = dictionary;
  console.log(practice);
  return (
    <html lang="en">
      <body className="p-4 min-h-[100vh] relative bg-gradient-to-br from-[#E8F0FE] to-[#E8F0FE] via-[#98b5ea]">
        <Nav
          endpoints={["About", "Methods", "Testamonials", "Contact", "Team"]}
        />
        {children}
        {/* <footer className="">
          <p>feeter</p>
        </footer> */}
      </body>
    </html>
  );
}
