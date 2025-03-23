import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getEvents } from "@/supabase";
import Image from "next/image";
import Link from "next/link";

export const EkdilosisList = async () => {
  const { mainEvents, secEvents } = await getEvents();

  return (
    <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-3 ">
      {mainEvents.map((ev) => (
        <EventItem key={ev.title} event={ev} />
      ))}
    </div>
  );
};

const EventItem = ({ event }) => {
  return (
    <div className="bg-accent/30 p-3 rounded-lg shadow-md w-[85%] space-y-4 mx-auto">
      <div className="relative w-full h-32">
        <Image
          src="/plateia.jpg"
          objectFit="cover"
          fill
          className="rounded-t-lg"
          alt="event image"
        />
      </div>

      <h4 className="text-lg  font-semibold">{event.title}</h4>

      <div className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        voluptates provident, illo repudiandae ab dolore voluptas? Fuga illum
        natus corporis.
      </div>

      <Link href="#">
        <Button>Λεπτομέρειες</Button>
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
