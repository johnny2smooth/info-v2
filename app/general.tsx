import Image from "next/image";
import patient from "../public/system/patient.svg";
import pill from "../public/system/pill.png";
import phone from "../public/system/phone.png";
import test from "../public/system/test.png";
import coordinator from "../public/system/coordinator.svg";
import desktop from "../public/system/desktop.png";
import check from "../public/system/check.png";
import chat from "../public/system/chat.png";

function Contact() {
  return (
    <div
      id="contact"
      className="stack bg-[#4285f4] p-4 rounded-md max-w-prose mx-auto"
    >
      <h3 className="text-2xl text-[#cce0ffe5] ">
        Interested in learning more about our research and approaches?
      </h3>
      <form>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="name" className="text-[#cce0ffaa]">
              Your Name <span className="text-xs">required*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="name"
              name="name"
              placeholder="Jemica Stone"
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="email" className="text-[#cce0ffaa]">
              Email <span className="text-xs">required*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="email"
              id="email"
              name="email"
              placeholder="jemica@uw.edu"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="organization" className="text-[#cce0ffaa]">
              Organization
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="organization"
              name="organization"
              placeholder="University of Washington"
            />
          </div>
          <div className="flex self-end">
            <button
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-lg"
              type="submit"
            >
              Contact us
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const System = () => {
  return (
    <div id="system" className="stack">
      <div className="flex flex-wrap stack">
        <h3 className="text-[#2a528a] text-4xl font-serif font-semibold self-center">
          System at a glance
        </h3>
        <div className="stack">
          <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
            Patient Flow
          </h4>
          <div className="flex flex-wrap justify-start gap-8 mx-auto">
            <Image src={patient} alt="patient" className="mx-auto" />
            <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
              <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4] max-h-20 max-w-prose">
                <Image src={pill} alt="pill" />
                <p>Takes medication according to their treatment regimen.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                <Image src={phone} alt="phone" />
                <p>
                  Uses patient app to fill out a daily report of their
                  adherence, symptoms, and mood.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                <Image src={test} alt="test" />
                <p>
                  Takes metabolite test when app asks them to and submits photo
                  of test results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="stack">
          <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
            Treatment Supporter Flow
          </h4>
          <div className="flex flex-wrap justify-start gap-8 mx-auto">
            <Image src={coordinator} alt="coordinator" className="mx-auto" />
            <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
              <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]  max-w-prose">
                  <Image src={desktop} alt="dekstop version of the app" />
                  <p>
                    Monitors overall progress of their cohort of patients using
                    coordinator app.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                  <Image src={check} alt="checking off a patient report" />
                  <p>
                    Uses patient app to fill out a daily report of their
                    adherence, symptoms, and mood.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                  <Image
                    src={chat}
                    alt="messaging between patient and practitioner"
                  />
                  <p>
                    Takes metabolite test when app asks them to and submits
                    photo of test results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div id="solution flex flex-col justify-center items-center">
      <div className="stack bg-[#7da9f8] border-[#2a528a] border-solid border-4 p-4 rounded-md text-[#003587] max-w-prose mx-auto">
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

const Problems = () => {
  return (
    <div id="problems" className="stack bg-white p-4 rounded-md">
      <div className="flex flex-wrap items-end gap-4">
        <div className="stack text-[#2a528a] max-w-prose">
          <h3 className="text-[#4285f4b3] font-bold text-2xl">THE ISSUE</h3>
          <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
            Tuberculosis (TB) remains a major global public health problem.
          </aside>
          <p>
            Despite TB being largely curable, we still see millions of
            preventable deaths each year due to the disease.
          </p>
          <p>
            Adherence to a treatment regimen is critical for TB patients, but
            obstacles such as treatment length, social stigma, and poverty often
            get in the way of successful treatment.
          </p>
        </div>
        <div className="flex flex-col grow justify-end items-center border-solid border-2 border-[#4285f4] rounded-md p-4 max-w-prose mx-auto">
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
      </div>
      <hr />
      <div className="flex flex-wrap items-end gap-4">
        <div className="stack text-[#2a528a] max-w-prose">
          <h3 className="text-[#4285f4b3] font-bold text-2xl">
            EXISTING TREATMENTS
          </h3>
          <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
            Current TB treatments fail to reach their full potential.
          </aside>
          <p>
            The World Health Organization currently recommends the DOTS
            (Directly Observed Treatment, Short-Course) treatment strategy,
            where patients are observed while taking their medication. Despite
            the adoption of DOTS, however, TB case rates in many countries are
            either stagnant or decreasing more slowly than expected.
          </p>
          <p>
            New patient-centered strategies are needed in order to drive
            long-term improvement in TB treatment outcomes.
          </p>
        </div>
        <div className="flex flex-col grow justify-end items-center border-solid border-2 border-[#4285f4] rounded-md p-4 max-w-prose mx-auto">
          <p className="text-lg text-[#000000b3] font-light flex flex-col stack max-w-xs">
            <span className="text-6xl text-[#7da9f8] font-serif">45%</span>{" "}
            <span>of new TB cases lost to follow-up</span>
          </p>
          <p className="text-lg text-[#000000b3] font-light flex flex-col stack  max-w-xs">
            <span className="text-6xl text-[#7da9f8] font-serif">10 years</span>{" "}
            <span>
              without any significant improvement in TB treatment success rate
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Contact, System, Solution, Problems };
