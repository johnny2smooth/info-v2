import { Locale } from "@/i18n-config";
import metadataGenerator from "@/metadata-generator";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return await metadataGenerator("contact", lang);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="stack mx-auto">{children}</div>;
}
