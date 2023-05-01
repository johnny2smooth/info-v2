import Image from "next/image";
import patient from "../../public/system/patient.svg";
import pill from "../../public/system/pill.png";
import phone from "../../public/system/phone.png";
import test from "../../public/system/test.png";
import coordinator from "../../public/system/coordinator.svg";
import desktop from "../../public/system/desktop.png";
import check from "../../public/system/check.png";
import chat from "../../public/system/chat.png";

type Contact = {
  title: string;
  required: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  organization: string;
  organizationPlaceholder: string;
  contact: string;
};

function Contact({ contact }: { contact: Contact }) {
  return (
    <div
      id="contact"
      className="stack bg-[#4285f4] p-4 rounded-md max-w-prose mx-auto"
    >
      <h3 className="text-2xl text-[#cce0ffe5] ">{contact.title}</h3>
      <form>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="name" className="text-[#cce0ffaa]">
              {contact.name}{" "}
              <span className="text-xs">{contact.required}*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="name"
              name="name"
              placeholder={contact.namePlaceholder}
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="email" className="text-[#cce0ffaa]">
              {contact.email}{" "}
              <span className="text-xs">{contact.required}*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="email"
              id="email"
              name="email"
              placeholder={contact.emailPlaceholder}
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="organization" className="text-[#cce0ffaa]">
              {contact.organization}
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="organization"
              name="organization"
              placeholder={contact.organizationPlaceholder}
            />
          </div>
          <div className="flex self-end">
            <button
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-lg"
              type="submit"
            >
              {contact.contact}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

type System = {
  title: string;
  patientFlow: {
    title: string;
    patientSrc: string;
    patientAlt: string;
    pillSrc: string;
    pillAlt: string;
    pillDescription: string;
    phoneSrc: string;
    phoneAlt: string;
    phoneDescription: string;
    testSrc: string;
    testAlt: string;
    testDescription: string;
  };
  coordinatorFlow: {
    title: string;
    coordinatorSrc: string;
    coordinatorAlt: string;
    desktopSrc: string;
    desktopAlt: string;
    desktopDescription: string;
    checkSrc: string;
    checkAlt: string;
    checkDescription: string;
    chatSrc: string;
    chatAlt: string;
    chatDescription: string;
  };
};

const System = ({ system }: { system: System }) => {
  return (
    <div id="system" className="stack">
      <div className="flex flex-wrap stack">
        <h3 className="text-[#2a528a] text-4xl font-serif font-semibold self-center">
          {system.title}
        </h3>
        <div className="flex flex-wrap justify-between gap-4 mx-auto">
          <div className="stack mx-auto">
            <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
              {system.patientFlow.title}
            </h4>
            <div className="flex flex-wrap justify-start gap-8 mx-auto max-w-md">
              <Image
                src={patient}
                alt={system.patientFlow.patientAlt}
                className="mx-auto"
              />
              <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4] max-w-prose">
                  <Image src={pill} alt={system.patientFlow.pillAlt} />
                  <p>{system.patientFlow.pillDescription}</p>
                </div>
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                  <Image src={phone} alt={system.patientFlow.phoneAlt} />
                  <p>{system.patientFlow.phoneDescription}</p>
                </div>
                <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                  <Image src={test} alt={system.patientFlow.testAlt} />
                  <p>{system.patientFlow.testDescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stack mx-auto">
            <h4 className="bg-[#cce0ffe5] rounded-md text-[#4285f4] mx-auto px-2 py-1 text-lg">
              {system.coordinatorFlow.title}
            </h4>
            <div className="flex flex-wrap justify-start gap-8 max-w-md">
              <Image
                src={coordinator}
                alt={system.coordinatorFlow.title}
                className="mx-auto"
              />
              <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
                <div className="flex flex-col max-w-lg gap-4 grow mx-auto">
                  <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]  max-w-prose">
                    <Image
                      src={desktop}
                      alt={system.coordinatorFlow.desktopAlt}
                    />
                    <p>{system.coordinatorFlow.desktopDescription}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                    <Image src={check} alt={system.coordinatorFlow.checkAlt} />
                    <p>{system.coordinatorFlow.checkDescription}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#cce0ffe5] rounded-md text-[#2a528a] mx-auto p-4  text-lg border-2 border-solid border-[#4285f4]">
                    <Image src={chat} alt={system.coordinatorFlow.chatAlt} />
                    <p>{system.coordinatorFlow.chatDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Solution = {
  title: string;
  subtitle: string;
  subtitleAside: string;
};

const Solution = ({ solutions }: { solutions: Solution }) => {
  return (
    <div id="solution flex flex-col justify-center items-center">
      <div className="stack bg-[#cce0ffe5] text-[#2a528a] border-[#4285f4] border-solid border-2 p-4 rounded-md  max-w-prose mx-auto">
        <h3 className="font-bold text-3xl">{solutions.title}</h3>
        <p className="text-lg">
          {solutions.subtitle}{" "}
          <span className="font-bold text-xl ">{solutions.subtitleAside}</span>
        </p>
      </div>
    </div>
  );
};

// I could make this an array of objects when I'm drying out the component below
type Problem = {
  issue: {
    title: string;
    aside: string;
    bodyArr: string[];
    facts: {
      main: string;
      sub: string;
    }[];
  };
  existingTreatments: {
    title: string;
    aside: string;
    bodyArr: string[];
    facts: {
      main: string;
      sub: string;
    }[];
  };
};

const Problems = ({ problems }: { problems: Problem }) => {
  return (
    <div id="problems" className="stack bg-white p-4 rounded-md">
      <div className="flex flex-wrap items-end gap-4">
        <div className="stack text-[#2a528a] max-w-prose">
          <h3 className="text-[#4285f4b3] font-bold text-2xl">
            {problems.issue.title}
          </h3>
          <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
            {problems.issue.aside}
          </aside>
          {problems.issue.bodyArr.map((body: string, i) => (
            <p key={i}>{body}</p>
          ))}
        </div>
        <div className="flex flex-col grow justify-end items-center border-solid border-2 border-[#4285f4] rounded-md p-4 max-w-prose mx-auto">
          {problems.issue.facts.map(
            (fact: { main: string; sub: string }, i) => (
              <p
                key={i}
                className="text-lg text-[#000000b3] font-light flex flex-col stack"
              >
                <span className="text-6xl text-[#7da9f8] font-serif">
                  {fact.main}
                </span>{" "}
                <span>{fact.sub}</span>
              </p>
            )
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap items-end gap-4">
        <div className="stack text-[#2a528a] max-w-prose">
          <h3 className="text-[#4285f4b3] font-bold text-2xl">
            {problems.existingTreatments.title}
          </h3>
          <aside className="border-l-8 border-[#4285f4] border-solid text-2xl font-semibold text-[#2a528a] pl-4">
            {problems.existingTreatments.aside}
          </aside>
          {problems.existingTreatments.bodyArr.map((body: string, i) => (
            <p key={i}>{body}</p>
          ))}
        </div>
        <div className="flex flex-col grow justify-end items-center border-solid border-2 border-[#4285f4] rounded-md p-4 max-w-prose mx-auto">
          {problems.existingTreatments.facts.map(
            (fact: { main: string; sub: string }, i) => (
              <p
                key={i}
                className="text-lg text-[#000000b3] font-light flex flex-col stack"
              >
                <span className="text-6xl text-[#7da9f8] font-serif">
                  {fact.main}
                </span>{" "}
                <span>{fact.sub}</span>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { Contact, System, Solution, Problems };
