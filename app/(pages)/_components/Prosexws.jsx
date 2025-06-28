"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DIFERRENCE_IN_DAYS } from "@/data";
import { useGetEvents } from "@/hooks/useGetEvents";
import { addDays, differenceInDays, format, isFuture } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Prosexws() {
  const { data, isLoading } = useGetEvents();

  if (isLoading) return <ProsexwsSkeleton />;

  const { mainEvents, secEvents } = data;

  const prosexws = [
    ...mainEvents.filter(
      (ev) =>
        isFuture(addDays(ev.startDate, 1)) &&
        differenceInDays(ev.startDate, new Date()) < DIFERRENCE_IN_DAYS
    ),
    ...secEvents.filter(
      (ev) =>
        isFuture(addDays(ev.startDate, 1)) &&
        differenceInDays(ev.startDate, new Date()) < DIFERRENCE_IN_DAYS
    ),
  ];

  return (
    <div
      className={`flex w-full gap-2 overflow-x-auto mx-auto lg:w-[50%]
      ${prosexws.length > 1 ? "scroll-smooth snap-x snap-mandatory" : ""}`}
    >
      {prosexws.map((ev, index) => (
        <div
          key={index}
          className="min-w-[85%] mx-auto border border-primary/30 bg-background rounded-lg p-2 border-l-4 border-l-green-400 space-y-3 snap-start flex flex-col justify-between"
        >
          {ev.status === "ok" && (
            <div className="relative w-full h-32">
              {ev.status === "ok" && (
                <Badge className="text-white absolute z-50 left-2 top-0  bg-green-500">
                  Προγραμματισμένο
                </Badge>
              )}
              <Image
                src={ev.images.baner}
                fill
                className="rounded-t-lg object-cover"
                alt="event image"
              />
            </div>
          )}
          <h4 className="text-[16px] font-semibold">{ev.title}</h4>

          <div className="text-gray-500 space-y-2 p-2">
            <div className="flex items-center gap-2">
              <MapPin />
              <a
                href={ev.location?.href || ""}
                target="_blank"
                className="text-blue-500 underline text-xs"
              >
                {ev.location?.name}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Calendar />
                <span className="text-xs">
                  {format(ev.startDate, "dd/MM/yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock />
                <span className="text-xs">{ev.startTime}</span>
              </div>
            </div>
          </div>

          <Link href={`/ekdilosis/${ev.slug}`}>
            <Button
              size="xs"
              className="w-full p-1 border border-primary"
              variant="outline"
            >
              Λεπτομέρειες
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const ProsexwsSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="loader"></div>
    </div>
  );
};
