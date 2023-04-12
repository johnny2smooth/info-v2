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
  const body = await request.json();

  console.log(body);

  const { error } = await supabase.from("prospects").insert({
    name: "funky!",
    email: "posted@posted",
    organization: "wow",
  });

  return NextResponse.json({ error });
}
