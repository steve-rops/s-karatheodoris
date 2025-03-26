"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useGetEvents";
import {
  compareAsc,
  differenceInDays,
  format,
  isFuture,
  isPast,
} from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const EkdilosisList = () => {
  const { data, isLoading } = useGetEvents();
  const [events, setEvents] = useState("main");
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

  const prosexwsFlag = (eventStartDate) => {
    return (
      isFuture(eventStartDate) &&
      differenceInDays(eventStartDate, new Date()) < 30
    );
  };

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

      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-3 ">
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
  return (
    <div
      className={`bg-accent/30 p-3 rounded-lg shadow-md w-[85%] space-y-4 mx-auto ${
        isProsexws && "border-l-4 border-l-green-500"
      }`}
    >
      <div className="relative w-full h-32">
        {isProsexws && (
          <Badge className="text-white absolute z-50 left-2 top-0  bg-green-500">
            Προγραμματισμένο
          </Badge>
        )}
        <Image
          src={event.images.baner || "/plateia.jpg"}
          fill
          className="rounded-t-lg object-cover"
          alt="event image"
        />
      </div>

      <h4 className="text-lg  font-semibold">{event.title}</h4>

      <div className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        voluptates provident, illo repudiandae ab dolore voluptas? Fuga illum
        natus corporis.
      </div>

      <Link href={`/ekdilosis/${event.slug}`}>
        <Button className="hover:cursor-pointer">Λεπτομέρειες</Button>
      </Link>
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
