import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events`,
    {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      cache: "force-cache",
      next: { tags: ["events"] },
    }
  );

  const data = await res.json();

  if (!res.ok) NextResponse.json({ error: "Failed to fetch", status: 405 });

  return NextResponse.json(data);
}
