import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Contact } from "../general";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const { testimonials } = dictionary;
  return (
    <>
      <div className="p-4 stack">
        <h2 className="text-[#2a528a] text-6xl">{testimonials.title}</h2>
        <h3 className="text-[#003587] text-3xl">{testimonials.subtitle}</h3>
        <p>{testimonials.description}</p>
      </div>
      <Contact contact={dictionary.general.contact} />
    </>
  );
}
