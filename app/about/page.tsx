import { Contact } from "@/components/general";
import Image from "next/image";
import jojo from "../../public/system/jojo.png";
import { Fragment } from "react";

export default function Page() {
  return (
    <>
      <h2 className="text-[#003587] text-3xl">What we do</h2>
      <p>I am telling you all about our mission + more</p>
      <h2 className="text-[#003587] text-3xl">Who we are</h2>
      <Team />
      <Contact />
    </>
  );
}

const Team = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {teamMembers.map((member) => (
        <div key={member.firstName} className="relative w-24 h-24">
          <Image
            src={`/team/${member.image}.png`}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            className=" bg-slate-900 shadow-md shadow-[#00000075] rounded-full team-pictures object-cover overflow-hidden"
          />
        </div>
      ))}
    </div>
  );
};

let teamMembers = [
  {
    firstName: "Jojo",
    lastName: "Bizarro",
    image: "jojo",
    role: "CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    firstName: "Meme",
    lastName: "Lord",
    image: "meme",
    role: "CTO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    firstName: "John",
    lastName: "Doe",
    image: "john",
    role: "CFO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    image: "jane",
    role: "CMO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];
