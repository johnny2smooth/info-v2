import { getDictionary } from "@/get-dictionary";
import { Contact } from "../general";
import { Locale } from "@/i18n-config";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const { contact } = dictionary;
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#003587] text-3xl">{contact.title}</h2>
        <h3 className="text-[#003587] text-3xl">{contact.subtitle}</h3>
        <p>{contact.description}</p>
      </div>
      <Contact contact={dictionary.general.contact} />
    </>
  );
}
