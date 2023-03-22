import { Contact } from "../general";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">Who we are</h2>
        <Team />
        <h2 className="text-[#003587] text-3xl">What we do</h2>
        <p>
          All about our mission + more. What have we learned along the way and
          where do we see this project in 1 year
        </p>
      </div>
      <Contact />
    </>
  );
}

const Team = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {teamMembers.map((member, i) => (
        <div key={member.firstName + i} className="relative w-24 h-24">
          <Image
            src={`/team/${member.image}.png`}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            sizes="100%"
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
