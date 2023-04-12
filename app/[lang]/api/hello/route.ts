import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
  const { name, email, organization, lang } = await request.json();
  // console.log(lang);
  const { error } = await supabase.from("prospects").insert({
    name,
    email,
    organization,
    locale: lang,
  });
  console.log(error);

  return NextResponse.json({ error });
}
