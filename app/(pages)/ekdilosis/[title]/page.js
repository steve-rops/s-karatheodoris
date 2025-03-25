import { getEvents } from "@/supabase";
import { Suspense } from "react";

export default async function SingleEkdilosiPage({ params }) {
  const para = await params;
  const slug = para.title;

  const data = await getEvents();
  const event = [...data.mainEvents, ...data.secEvents].find(
    (ev) => ev.slug === slug
  );

  return (
    <Suspense fallback={<div className="loader"></div>}>
      <h1 className="text-2xl text-primary text-center">{event.title}</h1>
    </Suspense>
  );
}
