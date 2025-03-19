import Image from "next/image";

export default function SilogosPage() {
  return (
    <div className="space-y-10 lg:max-w-[65%] lg:mx-auto">
      <div className="space-y-4">
        <h1 className="text-2xl text-primary text-center">Ο Σύλλογος</h1>
        <div className="flex w-full items-center">
          <div className="text-pretty">
            Ο{" "}
            <strong>
              Πολιτιστικός Σύλλογος Νέας Βύσσας «Στέφανος Καραθεοδωρής»
            </strong>{" "}
            ιδρύθηκε το
            <strong> 1977</strong> με σκοπό τη διάσωση, διατήρηση και διάδοση
            της πολιτισμικής κληρονομιάς των προσφύγων προγόνων της περιοχής
            στις νέες γενιές.
            <p className="text-justify hidden lg:block">
              Στα χρόνια που ακολούθησαν, ο σύλλογος επεκτάθηκε σε κοινωνικούς,
              ενημερωτικούς και ψυχαγωγικούς τομείς, συμβάλλοντας στην
              πολιτιστική και ποιοτική άνοδο της τοπικής κοινωνίας.
            </p>
          </div>
          <div className="w-[1200px] relative h-[200px] lg:w-[300px] lg:h-[150px]">
            <Image
              priority
              src="/o-silogos/osilogos-1.png"
              fill
              objectFit="cover"
              className="absolute"
              alt="karatheodoris sculpture"
            />
          </div>
        </div>
        <p className="text-justify lg:hidden">
          Στα χρόνια που ακολούθησαν, ο σύλλογος επεκτάθηκε σε κοινωνικούς,
          ενημερωτικούς και ψυχαγωγικούς τομείς, συμβάλλοντας στην πολιτιστική
          και ποιοτική άνοδο της τοπικής κοινωνίας.
        </p>
        <p className="text-justify">
          Το όνομα του Συλλόγου δόθηκε{" "}
          <strong>προς τιμήν του γένους Καραθεοδωρή</strong>, το οποίο με
          γενέτειρα το παλιό χωριό Μπόσνα, σημερινή Νέα Βύσσα, έχει αναδείξει
          σημαίνοντες προσωπικότητες ιατρών, διπλωματών και επιστημόνων σε όλη
          την ιστορική πορεία της χώρας μας, με αποκορύφωμα{" "}
          <strong>
            {" "}
            τον μαθηματικό διεθνούς φήμης Κωνσταντίνο Καραθεοδωρή
          </strong>
          . Το παράδειγμα και η ιστορία τους αποτελεί μεγάλη πολιτιστική
          κληρονομιά για όλη την Ελλάδα και ιδιαίτερη τιμή για τους κατοίκους
          της Νέας Βύσσας.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-primary text-center">Οι Στόχοι μας</h2>
        <div className="text-justify">
          Στόχοι του Συλλόγου, εκτός από την ανάδειξη της προσωπικότητας και του
          πολυσήμαντου και ογκώδους έργου του μεγάλου επιστήμονα{" "}
          <strong> Στέφανου Καραθεοδωρή </strong> και γενικά του γένους
          Καραθεοδωρή, είναι:
          <ul className="px-2 space-y-2">
            <li>
              <strong>α)</strong> η διατήρηση και διάδοση της τοπικής
              πολιτιστικής κληρονομιάς,
            </li>
            <li>
              <strong>β)</strong> η ενίσχυση της πολιτιστικής δραστηριότητας της
              Νέας Βύσσας,
            </li>
            <li>
              <strong>γ)</strong> η προσέλκυση επισκεπτών και τόνωση της τοπικής
              οικονομίας μέσω πολιτιστικών δράσεων και
            </li>
            <li>
              <strong>δ)</strong> η ανάπτυξη του πολιτιστικού και μορφωτικού
              επιπέδου των μελών του και κατ’ επέκταση όλων των κατοίκων της
              Νέας Βύσσας αλλά και της ευρύτερης περιοχής και ειδικότερα των
              νέων.
            </li>
          </ul>
        </div>
        <p className="text-justify">
          Για την επίτευξη των παραπάνω στόχων ο Πολιτιστικός Σύλλογος Νέας
          Βύσσας «Στέφανος Καραθεοδωρής» έχει να επιδείξει πλούσια δραστηριότητα
          με πολιτιστικές εκδηλώσεις, αναβίωση παραδοσιακών εθίμων, δράσεις για
          την ανάδειξη του έργου των Καραθεοδωρή στο πλαίσιο λειτουργίας του
          Μουσείου των Καραθεοδωρή, εκπαιδευτικά προγράμματα με μαθήματα
          παραδοσιακών χορών σε παιδιά και ενήλικες, κοινωνικές και εθελοντικές
          δράσεις αλλά και δράσεις συνεργασίας και δικτύωσης με φορείς και
          άλλους συλλόγους.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-primary text-center">Εκδηλώσεις</h2>
        <p className="text-justify">
          Ετήσιες εκδηλώσεις που διοργανώνει ο σύλλογος περιλαμβάνουν το{" "}
          <strong>ετήσιο μνημόσυνο του Κωνσταντίνου Καραθεοδωρή </strong>, το{" "}
          <strong>έθιμο του Μπέη</strong>,
          <strong> εκδηλώσεις την Καθαρά Δευτέρα</strong>, το{" "}
          <strong>πανηγύρι των Αγίων Κωνσταντίνου και Ελένης</strong> και τα{" "}
          <strong>«Βύσσεια»</strong>.
        </p>
        <p className="text-justify">
          Επίσης μια από τις σπουδαιότερες εκδηλώσεις που έχει διοργανώσει είναι
          το <strong>Παγκόσμιο Μαθηματικό Συνέδριο</strong>, το οποίο
          πραγματοποιήθηκε με μεγάλη επιτυχία το 2000 στη Νέα Βύσσα.
        </p>
      </div>

      {/* Συνεργασίες */}
      <div className="space-y-4">
        <h2 className="text-2xl text-primary text-center">Συνεργασίες</h2>
        <p className="test-justify">
          Ο σύλλογος συνεργάζεται με πολιτιστικούς συλλόγους και φορείς από την
          ευρύτερη περιοχή του Έβρου αλλά και από όλη την Ελλάδα, έχοντας
          συμμετάσχει σε διάφορες εκδηλώσεις τόσο εντός (Μέγαρο Μουσικής,
          Ηρώδειο, Επίδαυρος, Αρχαία Ολυμπία, Λυκαβηττό) όσο και εκτός Ελλάδας,
          σε χώρες όπως η Βουλγαρία, η Γερμανία, η Τουρκία και η Αίγυπτος.{" "}
        </p>
        <p className="test-justify">
          Ο σύλλογος συνεργάζεται, ακόμη, στενά με όλους τους φορείς του Δήμου
          Ορεστιάδας και της Περιφέρειας Ανατολικής Μακεδονίας και Θράκης,
          λαμβάνοντας ηθική και υλική υποστήριξη σε όλους τους τομείς της
          λειτουργίας του. Τα μέλη του και οι δημότες της Νέας Βύσσας
          υποστηρίζουν ενεργά τις εκδηλώσεις και τις δραστηριότητές του.
        </p>
        <div className="w-full">
          <div className="relative w-full h-56 lg:w-[500px] lg:mx-auto">
            <Image
              src="/o-silogos/osilogos-2.jpg"
              fill
              objectFit="cover"
              className="absolute"
              alt="o-silogos-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
