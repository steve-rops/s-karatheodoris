"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetEvents } from "@/hooks/useGetEvents";
import { prosexwsFlag } from "@/lib/utils";
import { addDays, compareAsc, compareDesc, format, isPast } from "date-fns";
import { EventItem } from "./EventItem";
import { useEkdilContext } from "@/context/ekdilosisContext";

export const EkdilosisList = () => {
  const { data, isLoading } = useGetEvents();
  const { events, setEvents } = useEkdilContext();
  let chosenData = [];

  if (isLoading) return <EkdilosisListSkeleton />;

  if (events === "main") chosenData = data.mainEvents;
  if (events === "sec") chosenData = data.secEvents;

  const dataToShow = chosenData.sort((a, b) => {
    const now = new Date();
    const aDate = addDays(a.startDate, 1);
    const bDate = addDays(b.startDate, 1);

    const aIsFuture = !isPast(aDate);
    const bIsFuture = !isPast(bDate);

    const aIsPinned = a.isPinned;
    console.log(a);
    const bIsPinned = b.isPinned;

    // 1. Future events first
    if (aIsFuture && !bIsFuture) return -1;
    if (!aIsFuture && bIsFuture) return 1;

    if (aIsFuture && bIsFuture) {
      // Both future: sort ascending
      return compareAsc(a.startDate, b.startDate);
    }

    // 2. Then pinned past events
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;

    if (aIsPinned && bIsPinned) {
      // Both pinned: sort ascending
      return compareAsc(a.startDate, b.startDate);
    }

    // 3. Remaining past events
    return events === "main"
      ? compareAsc(a.startDate, b.startDate)
      : compareDesc(a.startDate, b.startDate);
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
