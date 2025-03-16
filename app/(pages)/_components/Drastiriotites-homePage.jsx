import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DrastiriotitesHomePage() {
  return (
    <div className="w-full space-y-2 py-4 rounded-md ">
      <h2 className="text-xl font-semibold text-primary text-center">
        Δραστηριότητες
      </h2>
      <p className="text-center text-gray-700">
        Κάποιες από τις δραστηριότητες του συλλόγου μας.
      </p>

      <div className="grid grid-cols-3 gap-2">
        <Badge variant="secondary" className="col-span-2 w-full ">
          Χορευτικό Τμήμα Ενηλίκων
        </Badge>
        <Badge variant="secondary" className="w-full">
          Χοροδία
        </Badge>
        <Badge variant="secondary" className="w-full">
          Πανυγήρια
        </Badge>
        <Badge variant="secondary" className="col-span-2 w-full">
          Χορευτικό Τμήμα Παίδων
        </Badge>
        <Badge variant="secondary" className="col-span-3 w-full">
          Θεατρικές Παραστάσεις
        </Badge>
        <Badge variant="secondary" className="col-span-3 w-full">
          Χορευτικό Τμήμα Παραστάσεων
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
