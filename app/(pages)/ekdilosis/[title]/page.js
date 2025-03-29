import FacebookIcon from "@/public/facebook";
import { getEvents } from "@/supabase";
import Image from "next/image";
import Link from "next/link";
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
      <div className="space-y-10">
        <div className="relative w-full h-54 lg:w-[500px] lg:mx-auto">
          <Image
            priority
            src={event.images.baner}
            fill
            className="absolute object-contain rounded-md"
            alt="event-image"
          />
        </div>
        <h1 className="text-2xl text-primary text-center">{event.title}</h1>

        <div className="text-justify space-y-4 text-sm ">
          {event.details &&
            event.details
              .split("#")
              .map((el) => <p key={el.slice(0, 10)}>{el}</p>)}
        </div>

        {event.images.other.length > 0 && (
          <div
            className={`w-full lg:grid lg:grid-cols-${event.images.other.length} space-y-4 gap-4`}
          >
            {event.images.other.map((img, index) => (
              <div key={index} className="relative w-full h-56 ">
                <Image
                  priority
                  src={img}
                  fill
                  className="absolute object-cover"
                  alt="event-image"
                />
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <div className="text-primary text-lg text-center">
            Δείτε περισσότερα για την εκδήλωση
          </div>
          <div className="flex gap-2 justify-center items-center">
            {event.links.length > 0 &&
              event.links.map((link) => (
                <Link target="_blank" key={link.name} href={link.href}>
                  {link.name.includes("evros") ? (
                    <Image
                      alt="e-evros-logo"
                      width={100}
                      height={300}
                      src="/e-evros.png"
                    />
                  ) : (
                    <FacebookIcon size={32} />
                  )}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
