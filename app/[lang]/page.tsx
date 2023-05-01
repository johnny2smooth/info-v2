import Image from "next/image";
import { Inter } from "next/font/google";
import home from "../../public/home.png";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

import { System, Solution, Problems } from "./general";
import ContactForm from "./contact-form";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="stack">
      <div id="intro" className="flex flex-wrap stack max-w-7xl mx-auto">
        <div className="flex items-end flex-wrap gap-4">
          <div className="flex stack flex-col items-start justify-start mx-auto ">
            <h2 className="text-[#2a528a] text-6xl text-center">
              {dictionary.home.title}
            </h2>
            <div className="flex justify-around items-end flex-wrap">
              <div className="grow stack">
                <h3 className="text-[#003587] max-w-prose">
                  {dictionary.home.subtitle}
                </h3>
                <div className="bg-[#cce0ffe5] max-w-prose rounded-md text-[#2a528a] p-4  text-xl border-[#4285f4] border-2 border-solid flex flex-col">
                  <span className="font-bold">
                    {dictionary.home.deployed.title}
                  </span>{" "}
                  <span>- {dictionary.home.deployed.argentina} 🇦🇷</span>{" "}
                  <span>- {dictionary.home.deployed.indonesia} 🇮🇩</span>
                </div>
              </div>
              <Image
                src={home}
                alt={dictionary.home.imageAlt}
                height={500}
                width={500}
              />
            </div>
          </div>
          {/* <div className="max-w-prose">
            <h3>
              Our team of interdisiplinary researchers are making TB digital
              treatment accessible to the most vulnerable populations. We have a
              mission to provide Tuberculosis treatment support tools for both
              healthcare providers and people who are infected with
              Tuberculosis.
            </h3>
          </div> */}
        </div>
        <Problems problems={dictionary.general.problems} />
        <Solution solutions={dictionary.general.solutions} />
        <System system={dictionary.general.system} />
        <ContactForm contact={dictionary.general.contact} lang={lang} />
      </div>
    </main>
  );
}
