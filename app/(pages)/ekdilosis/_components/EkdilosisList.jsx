"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useGetEvents";
import { prosexwsFlag } from "@/lib/utils";
import { useStore } from "@/store/store";
import { compareAsc, format, isPast } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const EkdilosisList = () => {
  const { data, isLoading } = useGetEvents();
  const events = useStore((state) => state.eventType);
  const setEvents = useStore((state) => state.setEventType);
  let chosenData = [];

  if (isLoading) return <EkdilosisListSkeleton />;

  if (events === "main") chosenData = data.mainEvents;
  if (events === "sec") chosenData = data.secEvents;

  const dataToShow = chosenData.sort((a, b) => {
    const aIsPast = isPast(a.startDate);
    const bIsPast = isPast(b.startDate);
    if (aIsPast && !bIsPast) return 1;
    if (!aIsPast && bIsPast) return -1;
    return compareAsc(a.startDate, b.startDate);
  });

  return (
    <div className="space-y-4">
      <div className="flex mx-auto items-center justify-center lg:justify-self-start gap-3 px-7  w-fit ">
        <button
          onClick={(e) => setEvents(e.target.value)}
          value="main"
          className={`hover:cursor-pointer ${
            events === "main" && "border-b-2 border-b-primary"
          }`}
        >
          Ετήσιες
        </button>
        <button
          onClick={(e) => setEvents(e.target.value)}
          value="sec"
          className={`hover:cursor-pointer ${
            events === "sec" && "border-b-2 border-b-primary"
          }`}
        >
          Πρόσκαιρες
        </button>
      </div>
      <hr />

      <div className="space-y-4 min-h-fit lg:grid lg:grid-cols-2 lg:gap-3 ">
        {dataToShow.map((ev) => (
          <EventItem
            isProsexws={prosexwsFlag(ev.startDate)}
            key={ev.title}
            event={ev}
          />
        ))}
      </div>
    </div>
  );
};

const EventItem = ({ event, isProsexws }) => {
  const cat = event.category;
  return (
    <div
      className={`w-full relative ${
        cat === "main" ? "h-[480px]" : "h-[550px]"
      } bg-white rounded-2xl shadow-lg  border border-gray-200  mx-auto ${
        isProsexws ? "border-l-4 border-l-green-500" : ""
      }`}
    >
      <div className={`relative w-full h-[65%]`}>
        {isProsexws && (
          <Badge className="text-white absolute z-50 left-2 top-2 bg-green-500 px-2 py-1 rounded-md text-xs">
            Προγραμματισμένο
          </Badge>
        )}
        <Image
          src={event.images?.baner || "/plateia.jpg"}
          alt="Event Banner"
          fill
          className="rounded-t-lg object-cover"
        />
      </div>

      <div className={`flex flex-col justify-between  h-[35%] gap p-2`}>
        <div className="h-full space-y-1">
          <p className="text-sm text-gray-500 font-medium">
            {event.category === "secondary" && (
              <span>{format(event.startDate, "dd/MM/yyyy")}</span>
            )}
          </p>

          <h3 className="  font-semibold text-gray-900">{event.title}</h3>

          <p className="text-[12px]  overflow-hidden text-gray-600">
            {event.shortDescription}
          </p>
        </div>

        <Link className="" href={`/ekdilosis/${event.slug}`}>
          <Button className="mt-4 w-full text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/60 transition hover:cursor-pointer">
            Λεπτομέρειες
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const EkdilosisListSkeleton = () => {
  const arr = Array.from({ length: 5 }).map((_, i) => i);
  return (
    <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-3 ">
      {arr.map((el) => (
        <Skeleton
          key={el}
          className=" p-3 rounded-md w-[85%] space-y-4 mx-auto"
        >
          <Skeleton className="h-32 bg-gray-600" />
          <Skeleton className="h-6 bg-gray-600" />
          <Skeleton className="h-6 w-[75%] bg-gray-600" />
          <Skeleton className="h-6 w-14 bg-gray-600" />
        </Skeleton>
      ))}
    </div>
  );
};
