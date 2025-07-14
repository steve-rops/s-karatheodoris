import FacebookIcon from "@/public/facebook";
import { getEvents } from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CarouselHomePage from "../../_components/Carousel";
import { cn, prosexwsFlag } from "@/lib/utils";
import { Calendar, Clock, Map } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data";

export default async function SingleEkdilosiPage({ params }) {
  const para = await params;
  const slug = para.title;

  const data = await getEvents();
  const event = [...data.mainEvents, ...data.secEvents].find(
    (ev) => ev.slug === slug
  );

  const localEvent = events.find((ev) => ev.slug === slug);
  const sortedArchive = event.archive?.sort((a, b) => b.year - a.year);

  const isProsexws = prosexwsFlag(event.startDate);
  let status;

  if (event.status === "ok") status = "προγραμματισμένο";
  if (event.status === "cancelled") status = "ακυρώθηκε";
  if (event.status === "postponed") status = "αναβλήθηκε";

  return (
    <Suspense fallback={<div className="loader"></div>}>
      <div className="space-y-10 lg:max-w-[65%] mx-auto">
        <h1 className="text-2xl text-primary text-center">{event.title}</h1>

        {isProsexws && (
          <div
            className={cn(
              status === "προγραμματισμένο" && "border-green-700 bg-green-100",
              status === "αναβλήθηκε" && "border-yellow-700 bg-yellow-100",
              status === "ακυρώθηκε" && "border-red-700 bg-red-100",
              "border rounded-lg space-y-4 p-2 lg:w-[65%] mx-auto"
            )}
          >
            <div className="lg:flex lg:items-center lg:justify-between">
              <h4 className="text-sm hidden lg:block text-start">
                Λεπτομέρειες για τη προσεχή εκδήλωση
              </h4>

              <Badge
                className={cn(
                  status === "προγραμματισμένο" && "bg-green-600 text-white",
                  status === "αναβλήθηκε" && "bg-yellow-600 text-white",
                  status === "ακυρώθηκε" && "bg-red-600 text-white",
                  "text-xs"
                )}
              >
                {status}
              </Badge>
            </div>

            <div className="space-y-2">
              {/* Dates */}
              {event.startDate && event.endDate && (
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span className="text-gray-600 font-bold">
                    {format(new Date(event.startDate), "dd/MM/yyyy")} -{" "}
                    {format(new Date(event.endDate), "dd/MM/yyyy")}{" "}
                  </span>
                </div>
              )}

              {event.location && (
                <div className="flex items-center gap-1">
                  <Map />
                  <a
                    className="text-blue-500 underline decoration-blue-500"
                    href={event.location.href}
                  >
                    {event.location.name}
                  </a>
                </div>
              )}

              {localEvent.prosexwsDetails && (
                <div className="text-gray-600 pt-4">
                  <p className="underline">Λεπτομέρειες:</p>
                  {localEvent.prosexwsDetails()}
                </div>
              )}
            </div>
          </div>
        )}

        {localEvent.item && (
          <div className="text-justify space-y-2 text-sm ">
            {localEvent.item()}
            {localEvent.from && (
              <div className="text-xs text-gray-500 text-justify">
                {localEvent.from}
              </div>
            )}
          </div>
        )}

        {event.images.other.length === 1 && (
          <div className="relative w-full h-50 lg:h-80 lg:w-[500px] lg:mx-auto">
            <Image
              priority
              src={event.images.other[0]}
              fill
              className="absolute object-cover"
              alt="event image"
            />
          </div>
        )}

        {event.images.other.length === 2 && (
          <div className={`w-full lg:grid lg:grid-cols-2 space-y-4 gap-4`}>
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

        {event.images.other.length > 2 && (
          <div className="w-full">
            <CarouselHomePage
              opts={{ loop: true }}
              images={event.images.other}
            />
          </div>
        )}

        {event.links?.length > 0 && (
          <div className="space-y-4">
            <div className="text-primary text-lg text-center">
              Δείτε περισσότερα για την εκδήλωση
            </div>
            <div className="flex gap-4 justify-center items-center">
              {event.links?.length > 0 &&
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
                      <FacebookIcon size={36} color="var(--color-blue-600)" />
                    )}
                  </Link>
                ))}
            </div>
          </div>
        )}

        {event.archive?.length > 0 && (
          <div className="space-y-4">
            <hr className="bg-primary" />
            <h3 className="text-lg text-primary text-center">
              Δείτε φωτογραφικό υλικό από παλαιότερες εκδηλώσεις
            </h3>
            <div className="flex flex-col gap-2">
              {sortedArchive.map((el) => (
                <Link target="_blank" key={`${el.year}`} href={el.href}>
                  <div className="border-[0.5px] border-primary rounded-lg p-2 lg:w-[50%] mx-auto text-center hover:bg-primary/10 transition-all duration-200">
                    {el.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}
