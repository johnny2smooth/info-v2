import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Contact } from "../general";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const { team } = dictionary;
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">{team.title}</h2>
        <h3 className="text-[#003587] text-3xl">{team.subtitle}</h3>
        <p>{team.description}</p>
      </div>
      {/* @ts-expect-error */}
      <Contact contact={dictionary.general.contact} />
    </>
  );
}
