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
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">{methods.title}</h2>
        <h3 className="text-[#003587] text-3xl">{methods.subtitle}</h3>
        <p>{methods.description}</p>
      </div>
      <Contact contact={dictionary.general.contact} />
    </>
  );
}
