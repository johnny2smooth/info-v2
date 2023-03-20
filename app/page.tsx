import Image from "next/image";
import { Inter } from "next/font/google";
import home from "../public/home.png";
import patient from "../public/system/patient.svg";
import pill from "../public/system/pill.png";
import phone from "../public/system/phone.png";
import test from "../public/system/test.png";
import coordinator from "../public/system/coordinator.svg";
import desktop from "../public/system/desktop.png";
import check from "../public/system/check.png";
import chat from "../public/system/chat.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="stack">
      <div id="intro" className="flex flex-wrap stack">
        <div className="flex stack flex-col ">
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

const Problems = () => {
  return (
    <div id="problems" className="stack bg-white p-4 rounded-md">
      <div className="stack text-[#2a528a]">
        <h3 className="text-[#4285f4b3] font-bold text-2xl">THE ISSUE</h3>
        <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
          Tuberculosis (TB) remains a major global public health problem.
        </aside>
        <p>
          Despite TB being largely curable, we still see millions of preventable
          deaths each year due to the disease.
        </p>
        <p>
          Adherence to a treatment regimen is critical for TB patients, but
          obstacles such as treatment length, social stigma, and poverty often
          get in the way of successful treatment.
        </p>
        <p className="text-lg text-[#000000b3] font-light flex flex-col stack">
          <span className="text-6xl text-[#7da9f8] font-serif">
            1.7 billion
          </span>
          <span> people are infected with latent TB</span>
        </p>
        <p className="text-lg text-[#000000b3] font-light flex flex-col stack">
          <span className="text-6xl text-[#7da9f8] font-serif">~4100</span>{" "}
          <span> TB-related deaths per day in 2018</span>
        </p>
      </div>
      <div className="stack text-[#2a528a]">
        <h3 className="text-[#4285f4b3] font-bold text-2xl">
          EXISTING TREATMENTS
        </h3>
        <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
          Current TB treatments fail to reach their full potential.
        </aside>
        <p>
          The World Health Organization currently recommends the DOTS (Directly
          Observed Treatment, Short-Course) treatment strategy, where patients
          are observed while taking their medication. Despite the adoption of
          DOTS, however, TB case rates in many countries are either stagnant or
          decreasing more slowly than expected.
        </p>
        <p>
          New patient-centered strategies are needed in order to drive long-term
          improvement in TB treatment outcomes.
        </p>
        <p className="text-lg text-[#000000b3] font-light flex flex-col stack">
          <span className="text-6xl text-[#7da9f8] font-serif">45%</span>{" "}
          <span>of new TB cases lost to follow-up</span>
        </p>
        <p className="text-lg text-[#000000b3] font-light flex flex-col stack">
          <span className="text-6xl text-[#7da9f8] font-serif">10 years</span>{" "}
          <span>
            without any significant improvement in TB treatment success rate
          </span>
        </p>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div id="solution">
      <div className="stack bg-[#7da9f8] border-[#2a528a] border-solid border-4 p-4 rounded-md text-[#003587]">
        <h3 className="font-bold text-3xl">OUR SOLUTION</h3>
        <p className="text-lg">
          The Treatment Companion system allows trained coordinators to provide
          regular support to patients and ultimately aims to{" "}
          <span className="font-bold text-xl ">
            increase rates of treatment success.
          </span>
        </p>
      </div>
    </div>
  );
};

const System = () => {
  return (
    <div id="system" className="stack">
      <h3 className="text-[#2a528a] text-4xl font-serif font-semibold">
        System at a glance
      </h3>
      <div className="flex flex-wrap stack">
        <div className="stack">
          <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
            Patient Flow
          </h4>
          <Image src={patient} alt="patient" />
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={pill} alt="pill" />
          <p>Takes medication according to their treatment regimen.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={phone} alt="phone" />
          <p>
            Uses patient app to fill out a daily report of their adherence,
            symptoms, and mood.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={test} alt="test" />
          <p>
            Takes metabolite test when app asks them to and submits photo of
            test results.
          </p>
        </div>
        <div className="stack">
          <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
            Treatment Supporter Flow
          </h4>
          <Image src={coordinator} alt="coordinator" />
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={desktop} alt="pill" />
          <p>Takes medication according to their treatment regimen.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={check} alt="phone" />
          <p>
            Uses patient app to fill out a daily report of their adherence,
            symptoms, and mood.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
          <Image src={chat} alt="test" />
          <p>
            Takes metabolite test when app asks them to and submits photo of
            test results.
          </p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="stack bg-[#4285f4] p-4 rounded-md">
      <h3 className="text-2xl text-[#cce0ffe5] ">
        Interested in learning more about our research?
      </h3>
      <a
        className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg underline underline-offset-2"
        href="mailto:treatment.assistant@gmail.com?subject=Interested%20in%20learning%20more%20about%20Treatment%20Assistant"
      >
        contact us
      </a>
    </div>
  );
};
