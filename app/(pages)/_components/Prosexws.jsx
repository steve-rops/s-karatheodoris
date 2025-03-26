import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getEvents } from "@/supabase";
import { differenceInDays, isFuture } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default async function Prosexws() {
  const { mainEvents, secEvents } = await getEvents();

  const prosexws = [
    ...mainEvents.filter(
      (ev) =>
        isFuture(ev.startDate) &&
        differenceInDays(ev.startDate, new Date()) < 30
    ),
    ...secEvents.filter(
      (ev) =>
        isFuture(ev.startDate) &&
        differenceInDays(ev.startDate, new Date()) < 30
    ),
  ];

  return (
    <div
      className={`flex w-full gap-2 overflow-x-auto mx-auto lg:w-[50%] lg:shadow-md p-2 
      ${prosexws.length > 1 ? "scroll-smooth snap-x snap-mandatory" : ""}`}
    >
      {prosexws.map((ev, index) => (
        <div
          key={index}
          className="min-w-[85%] mx-auto border border-primary/30 bg-background rounded-lg p-2 border-l-4 border-l-green-400 space-y-3 snap-start"
        >
          {ev.status === "ok" && (
            <Badge className="bg-green-500 text-white text-xs">
              Προγραμματισμένο
            </Badge>
          )}
          <h4 className="text-[16px] font-semibold">{ev.title}</h4>

          <div className="text-gray-500 space-y-2 p-2">
            <div className="flex items-center gap-2">
              <MapPin />
              <a
                href={ev.location.href}
                target="_blank"
                className="text-blue-500 underline text-xs"
              >
                {ev.location.name}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Calendar />
                <span className="text-xs">{ev.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock />
                <span className="text-xs">{ev.startTime}</span>
              </div>
            </div>
          </div>

          {ev.notice && (
            <div className="text-gray-600">
              <p className="underline">Ενημέρωση:</p>
              <p>{ev.notice}</p>
            </div>
          )}

          <Link href={`/ekdilosis/${ev.slug}`}>
            <Button
              size="xs"
              className="p-1 border border-primary"
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
    <div className="lg:w-[50%] mx-auto border border-primary/30 bg-background rounded-lg p-4  space-y-3 ">
      <Skeleton className="w-24 h-6" />
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-[75%] h-6" />
      <div className="flex gap-2">
        <Skeleton className="w-[45%]" />
        <Skeleton className="w-[45%]" />
      </div>

      <Skeleton className="w-full h-30" />

      <Skeleton className="w-[35%] h-6" />
    </div>
  );
};
