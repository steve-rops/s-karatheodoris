import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getEvents } from "@/supabase";
import Image from "next/image";
import Link from "next/link";

export const EkdilosisList = async () => {
  const data = await getEvents();

  return (
    <div className="space-y-4 ">
      {data.map((ev) => (
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

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        voluptates provident, illo repudiandae ab dolore voluptas? Fuga illum
        natus corporis.
      </div>

      <Link href="#">
        <Button>Μάθε περισσότερα</Button>
      </Link>
    </div>
  );
};

export const EkdilosisListSkeleton = () => {
  const arr = Array.from({ length: 5 }).map((_, i) => i);
  return (
    <div className="space-y-2">
      {arr.map((el) => (
        <Skeleton key={el} className="w-full h-8 rounded-md" />
      ))}
    </div>
  );
};
