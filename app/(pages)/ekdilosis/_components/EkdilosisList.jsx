"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useGetEvents";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const EkdilosisList = () => {
  const { data, isLoading } = useGetEvents();
  const [events, setEvents] = useState("main");

  if (isLoading) return <EkdilosisListSkeleton />;

  let dataToShow = [];
  if (events === "main") dataToShow = data.mainEvents;
  if (events === "sec") dataToShow = data.secEvents;
  if (events === "all") dataToShow = [...data.mainEvents, ...data.secEvents];

  return (
    <div className="space-y-4">
      <div
        onClick={(e) => setEvents(e.target.value)}
        className="flex mx-auto items-center justify-center lg:justify-self-start gap-3 px-7  w-fit "
      >
        <button
          value="main"
          className={`hover:cursor-pointer ${
            events === "main" && "border-b-2 border-b-primary"
          }`}
        >
          Κύριες
        </button>
        <button
          value="sec"
          className={`hover:cursor-pointer ${
            events === "sec" && "border-b-2 border-b-primary"
          }`}
        >
          Συγκυριακές
        </button>
        <button
          value="all"
          className={`hover:cursor-pointer ${
            events === "all" && "border-b-2 border-b-primary"
          }`}
        >
          Όλες
        </button>
      </div>
      <hr />

      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-3 ">
        {dataToShow.map((ev) => (
          <EventItem key={ev.title} event={ev} />
        ))}
      </div>
    </div>
  );
};

const EventItem = ({ event }) => {
  return (
    <div className="bg-accent/30 p-3 rounded-lg shadow-md w-[85%] space-y-4 mx-auto">
      <div className="relative w-full h-32">
        <Image
          src="/plateia.jpg"
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
