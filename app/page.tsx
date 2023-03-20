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
        <div className="flex stack flex-col">
          <h2>Treatment Companion</h2>
          <h3>
            An adaptable solution helping improve the treatment process for
            tuberculosis patients worldwide.
          </h3>
          <div className="">
            Currently Deployed For Clinical Trial In Argentina
          </div>
        </div>
        <Image src={home} alt="treatment companion" />
        <Problems />
        <System />
        <Contact />
      </div>
    </main>
  );
}

const Problems = () => {
  return (
    <div id="problems" className="stack">
      <div className="stack">
        <h3>The issue</h3>
        <aside>
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
        <p>
          <span>1.7 billion</span> people are infected with latent TB
        </p>
        <p>
          <span>~4100</span> TB-related deaths per day in 2018
        </p>
      </div>
      <div className="stack">
        <h3>Exisiting treatments</h3>
        <aside>Current TB treatments fail to reach their full potential.</aside>
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
        <p>
          <span>45%</span> of new TB cases lost to follow-up
        </p>
        <p>
          <span>10 years</span> without any significant improvement in TB
          treatment success rate
        </p>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div id="solution">
      <div className="stack">
        <h3>Our solution</h3>
        <p>
          The Treatment Companion system allows trained coordinators to provide
          regular support to patients and ultimately aims to{" "}
          <span>increase rates of treatment success.</span>
        </p>
      </div>
    </div>
  );
};

const System = () => {
  return (
    <div id="system" className="stack">
      <h3>System at a glance</h3>
      <div className="flex flex-wrap stack">
        <div className="stack">
          <h4>Patient</h4>
          <Image src={patient} alt="patient" />
        </div>
        <div className="flex items-center gap-2">
          <Image src={pill} alt="pill" />
          <p>Takes medication according to their treatment regimen.</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={phone} alt="phone" />
          <p>
            Uses patient app to fill out a daily report of their adherence,
            symptoms, and mood.
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <Image src={test} alt="test" />
          <p>
            Takes metabolite test when app asks them to and submits photo of
            test results.
          </p>
        </div>
        <div className="stack">
          <h4>Treatment Supporter</h4>
          <Image src={coordinator} alt="coordinator" />
        </div>
        <div className="flex items-center">
          <Image src={desktop} alt="pill" />
          <p>Takes medication according to their treatment regimen.</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={check} alt="phone" />
          <p>
            Uses patient app to fill out a daily report of their adherence,
            symptoms, and mood.
          </p>
        </div>
        <div className="flex items-center gap-2">
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
    <div id="contact" className="stack">
      <h3>Contact</h3>
      <p>
        For more information, please contact us at{" "}
        <a href="mailto:treatment.assistant@gmail.com?subject=Interested%20in%20learning%20more%20about%20Treatment%20Assistant">
          here
        </a>
      </p>
    </div>
  );
};
