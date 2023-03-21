import Image from "next/image";
import { Inter } from "next/font/google";
import home from "../public/home.png";
import { Contact, System, Solution, Problems } from "./general";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="stack">
      <div id="intro" className="flex flex-wrap stack">
        <div className="flex stack flex-col">
          <h2 className="text-[#2a528a]">Treatment Companion</h2>
          <h3 className="text-[#003587] text-3xl">
            An adaptable solution helping improve the treatment process for
            tuberculosis patients worldwide.
          </h3>
          <div className="bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-xl border-[#4285f4] border-2 border-solid flex flex-col">
            <span className="font-bold">
              {" "}
              Currently Deployed For Clinical Trials In:
            </span>{" "}
            <span>- Argentina 🇦🇷</span> <span>- Indonesia 🇮🇩</span>
          </div>
        </div>
        <Image src={home} alt="treatment companion" />
        <Problems />
        <Solution />
        <System />
        <Contact />
      </div>
    </main>
  );
}
