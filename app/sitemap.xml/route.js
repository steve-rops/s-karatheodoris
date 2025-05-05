// app/sitemap.xml/route.ts

import { getEvents } from "@/supabase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://s-karatheodoris.gr";

  const { mainEvents, secEvents } = await getEvents();

  const eventSlugs = [
    ...mainEvents.map((event) => `ekdilosis/${event.slug}`),
    ...secEvents.map((event) => `ekdilosis/${event.slug}`),
  ];

  // Example static paths — replace or fetch dynamically from CMS, DB, etc.
  const pages = [
    "",
    "ekdilosis",
    ...eventSlugs,
    "epikinokia",
    "mouseio-laografiko",
    "mouseio-karatheodori",
    "otoposmas",
    "silogos",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
