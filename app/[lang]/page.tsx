import Image from "next/image";
import { Inter } from "next/font/google";
import home from "../../public/home.png";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

import { Contact, System, Solution, Problems } from "./general";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="stack">
      <div id="intro" className="flex flex-wrap stack">
        <div className="flex stack flex-col items-center mx-auto max-w-prose">
          <h2 className="text-[#2a528a]">{dictionary.home.title}</h2>
          <h3 className="text-[#003587] text-3xl">
            {dictionary.home.subtitle}
          </h3>
          <div className="bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-xl border-[#4285f4] border-2 border-solid flex flex-col">
            <span className="font-bold">{dictionary.home.deployed.title}</span>{" "}
            <span>- {dictionary.home.deployed.argentina} 🇦🇷</span>{" "}
            <span>- {dictionary.home.deployed.indonesia} 🇮🇩</span>
          </div>
        </div>
        <Image src={home} alt={dictionary.home.imageAlt} />
        <Problems problems={dictionary.general.problems} />
        <Solution solutions={dictionary.general.solutions} />
        <System system={dictionary.general.system} />
        <Contact contact={dictionary.general.contact} />
      </div>
    </main>
  );
}
