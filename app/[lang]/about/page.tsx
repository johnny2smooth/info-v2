import { Contact } from "../general";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import jane from "@/public/team/jane.png";

type TeamMember = {
  firstName: string;
  lastName: string;
  image: string;
  role: string;
  description: string;
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const { about, team } = dictionary;
  return (
    <>
      <div className="p-4 stack mx-auto">
        <h2 className="text-[#2a528a] text-6xl">{about.title}</h2>
        <TeamPhotos teamMembers={team.members} />
        <h2 className="text-[#003587] text-3xl">{about.subtitle}</h2>
        <p className="max-w-prose">{about.description}</p>
        {}
      </div>
      <Contact contact={dictionary.general.contact} />
    </>
  );
}

const TeamPhotos = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  console.log(teamMembers, new Date());
  return (
    <div className="flex flex-wrap gap-2">
      {teamMembers.map((member, i) => (
        <div key={member.firstName + i} className="relative w-24 h-24">
          <Image
            src={`/team/${member.image}.png`}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className=" bg-slate-900 shadow-md shadow-[#00000075] rounded-full team-pictures object-cover overflow-hidden"
            priority
          />
        </div>
      ))}
    </div>
  );
};
