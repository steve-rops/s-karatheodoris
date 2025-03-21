import { Skeleton } from "@/components/ui/skeleton";
import { getEvents } from "@/supabase";

export const EkdilosisList = async () => {
  const data = await getEvents();

  return (
    <div className="space-y-2">
      {data.map((ev) => (
        <EventItem event={ev} />
      ))}
    </div>
  );
};

export const EkdilosisListSkeleton = () => {
  const arr = Array.from({ length: 5 }).map((_, i) => i);
  return (
    <div className="space-y-2">
      {arr.map(() => (
        <Skeleton className="w-full h-8 rounded-md" />
      ))}
    </div>
  );
};

const EventItem = ({ event }) => {
  return (
    <div className="bg-accent/30 p-2 rounded-lg shadow">{event.title}</div>
  );
};
