import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Prosexws, { ProsexwsSkeleton } from "./Prosexws";
import { Suspense } from "react";

export default function EkdiloseisHomePage() {
  return (
    <div className="w-full space-y-2 bg-muted/35 p-2 py-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-primary text-center">
        Εκδηλώσεις
      </h2>
      <p className="text-center text-gray-700">
        Μάθετε ό,τι χρειάζεστε για τις Εκδηλώσεις του χωριού και του Συλλόγου
        μας.
      </p>
      <Link href="/ekdilosis" className="flex justify-center ">
        <Button className="hover:cursor-pointer">Όλες οι Εκδηλώσεις</Button>
      </Link>

      <Suspense fallback={<ProsexwsSkeleton />}>
        <Prosexws />
      </Suspense>

      {/* 
      <div className="lg:w-[50%] mx-auto border border-primary/30 bg-background rounded-lg p-4 border-l-4 border-l-green-400 space-y-3 ">
        <Badge className="bg-green-500 text-white">Προγραμματισμένο</Badge>
        <h4 className="text-[18px] font-semibold">
          Πανηγύρι Κωνσταντίνου και Ελένης
        </h4>

        <div className="text-gray-500 space-y-2 p-2">
          <div className="flex items-center gap-2">
            <MapPin />
            <a
              href="https://maps.app.goo.gl/8H5vutRsKAqNFoLZA"
              target="_blank"
              className="text-blue-500 underline"
            >
              Εκκλησία Ιερού Ναού Κωνσταντίνου και Ελένης
            </a>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <Calendar />
              <span>21/05/2025</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock />
              <span>19:00</span>
            </div>
          </div>
        </div>

        <div className="text-gray-600">
          <p className="underline">Ενημέρωση:</p>
          <p>
            Θα ακολουθήσει χορός από τα χoρευτικά τμήματα του Συλλόγου μας,
            καθώς και για όλο το κόσμο.
          </p>
        </div>

        <Link href="/ekdilosis">
          <Button className="border border-primary" variant="outline">
            Λεπτομέρειες
          </Button>
        </Link>
      </div> */}
    </div>
  );
}
