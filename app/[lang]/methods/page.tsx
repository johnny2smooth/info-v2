import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Contact } from "../general";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const { methods } = dictionary;
  return (
    <>
      <div className="p-4 stack mx-auto">
        <h2 className="text-[#2a528a] text-6xl">{methods.title}</h2>
        <h3 className="text-[#003587] text-3xl">{methods.subtitle}</h3>
        <p className="max-w-prose">{methods.description}</p>
      </div>
      <Contact contact={dictionary.general.contact} />
    </>
  );
}
