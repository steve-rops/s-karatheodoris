import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const EventItem = ({ event, isProsexws }) => {
  const cat = event.category;

  return (
    <div
      className={`w-full relative ${
        cat === "main" ? "h-[480px]" : "h-[550px]"
      } bg-white rounded-2xl shadow-lg  border border-gray-200  mx-auto ${
        isProsexws ? "border-l-4 border-l-green-500" : ""
      }`}
    >
      <Link href={`/ekdilosis/${event.slug}`}>
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
      </Link>

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
