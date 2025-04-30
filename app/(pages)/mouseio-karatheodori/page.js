import Image from "next/image";

export default function MouseioKaratheodori() {
  return (
    <div className="lg:max-w-[65%] lg:mx-auto space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl text-primary text-center">
          Μουσείο των Καραθεοδωρή
        </h1>

        <div className="relative w-full h-72 lg:w-[500px] lg:mx-auto">
          <Image
            priority
            src="/mouseio.webp"
            fill
            className="absolute object-cover"
            alt="o-silogos-image"
          />
        </div>

        <div className="text-justify">
          Το <strong>Μουσείο των Καραθεοδωρή</strong> βρίσκεται στη Νέα Βύσσα
          Έβρου, γενέτειρα της οικογένειας Καραθεοδωρή. Πρόκειται για ένα
          ιστορικό οικογενειακό μουσείο που εξιστορεί πτυχές από τη ζωή και το
          έργο των μελών της οικογένειας από τα τέλη του 18ου αιώνα μέχρι
          σήμερα.
        </div>
        <div className="text-justify">
          Το μουσείο στεγάζεται στο κτίριο που λειτουργούσε το 3ο Δημοτικό
          Σχολείο Νέας Βύσσας. Το 2017, με πρωτοβουλία του Πολιτιστικού Συλλόγου
          Νέας Βύσσας «Στέφανος Καραθεοδωρής» και τη συμβολή του Δήμου
          Ορεστιάδας και του Σωματείου «Κληρονομιά Οικογένειας Καραθεοδωρή», το
          κτίριο μετατράπηκε σε μουσείο και εγκαινιάστηκε από τον Οικουμενικό
          Πατριάρχη κ.κ. Βαρθολομαίο.
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl text-primary text-center">
          Οργανώστε την επίσκεψή σας
        </h3>
        <div className="text-justify">
          <a
            className="text-blue-600 underline"
            target="_blank"
            href="https://maps.app.goo.gl/BsnZR2rq7nJ3HJAe9"
          >
            Το Μουσείο
          </a>{" "}
          διατηρεί τη δική του{" "}
          <a
            className="text-blue-600 underline"
            target="_blank"
            href="https://caratheodorymuseumneavyssa.gr/"
          >
            ιστοσελίδα
          </a>{" "}
          και μέσω αυτής μπορείτε να οργανώσετε τη δική σας επίσκεψη.
        </div>
      </div>
    </div>
  );
}
