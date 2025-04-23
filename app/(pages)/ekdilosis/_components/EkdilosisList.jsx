"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useGetEvents";
import { prosexwsFlag } from "@/lib/utils";
import { useStore } from "@/store/store";
import { compareAsc, format, isPast } from "date-fns";
import { EventItem } from "./EventItem";

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
