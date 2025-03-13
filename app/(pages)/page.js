import { Button } from "@/components/ui/button";
import CarouselHomePage from "./_components/Carousel";
import Link from "next/link";
import { Calendar, Clock, ClockAlert, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="p-2 w-full space-y-10">
      <CarouselHomePage opts={{ loop: true }} />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-primary text-center">
          Ο Σύλλογος
        </h2>
        <p className="text-sm text-justify">
          Ο Σύλλογος μας ιδρύθηκε το <strong>1977</strong> με έδρα τη Νέα Βύσσα.
          Το όνομα του συλλόγου δόθηκε προς τιμήν του γένους{" "}
          <strong>ΚΑΡΑΘΕΟΔΩΡΗ</strong> το όποιο με γενέτειρα το παλιό χωριό
          Μπόσνα, σημερινή Ν. Βύσσα, έχει αναδείξει σημαντικές προσωπικότητες
          γιατρών και διπλωματών, σε όλη την ιστορική πορεία της χώρας μας, με
          αποκορύφωμα τον μαθηματικό διεθνούς φήμης{" "}
          <strong>Κωνσταντίνο Καραθεοδωρή</strong>.
        </p>
        <Link href="/silogos/istoria">
          <Button size="sm" className="hover:cursor-pointer">
            Μάθε Περισσότερα
          </Button>
        </Link>
      </div>

      <div className="w-full space-y-2 bg-muted/35 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-primary text-center">
          Εκδηλώσεις
        </h2>
        <p className="text-center text-gray-700">
          Μάθετε ό,τι χρειάζεστε για τις Εκδηλώσεις του χωριού και του Συλλόγου
          μας.
        </p>
        <div className="flex justify-center">
          <Button>Όλες οι Εκδηλώσεις</Button>
        </div>

        <div className="border border-primary/30 bg-background rounded-lg p-4 border-l-4 border-l-green-400 space-y-3 ">
          <Badge className="bg-green-500 text-black">Προσεχώς</Badge>
          <h4 className="text-2xl font-semibold">
            Πανηγύρι Κωνσταντίνου και Ελένης
          </h4>

          <div className="text-gray-500 space-y p-2">
            <div className="flex items-center gap-2">
              <MapPin />
              <a
                href="https://maps.app.goo.gl/8H5vutRsKAqNFoLZA"
                target="_blank"
                className="text-blue-500 underline"
              >
                Εκλλησία Ιερού Ναού Κωνσταντίνου και Ελένης
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
              Θα ακολουθήσει χωρός από τα χωρευτικά τμήματα του Συλλόγου μας,
              καθώς και για όλο το κόσμο.
            </p>
          </div>

          <Button variant="outline">Λεπτομέριες</Button>
        </div>
      </div>
    </div>
  );
}
