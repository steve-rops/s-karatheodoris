import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DrastiriotitesHomePage() {
  return (
    <div className="w-full space-y-2 py-4 rounded-md lg:w-[70%] lg:mx-auto ">
      <h2 className="text-xl font-semibold text-primary text-center">
        Δραστηριότητες
      </h2>
      <p className="text-center text-gray-700">
        Κάποιες από τις δραστηριότητες του συλλόγου μας.
      </p>

      <div className="space-y-2 gap-2 w-[75%] lg:w-[50%] mx-auto">
        <Badge variant="secondary" className=" text-[13px] col-span-2 w-full ">
          Χορευτικό Τμήμα Ενηλίκων
        </Badge>

        <Badge variant="secondary" className=" text-[13px] col-span-2 w-full">
          Δύο Χορευτικά Τμήματα Παίδων
        </Badge>

        <Badge variant="secondary" className=" text-[13px] col-span-3 w-full">
          Χορευτικό Τμήμα Εφήβων
        </Badge>
      </div>
      <div className="flex justify-center">
        <Link href="/silogos/drastiriotites">
          <Button>Μάθε περισσότερα</Button>
        </Link>
      </div>
    </div>
  );
}
