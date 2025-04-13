import Image from "next/image";

export default function MouseioLaografiko() {
  return (
    <div className="lg:max-w-[65%] lg:mx-auto space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl text-primary text-center">
          Νέο Λαογραφικό Μουσείο
        </h1>

        <div className="border-green-700 border-[0.5px] rounded-md bg-green-200 p-2 flex items-baseline lg:items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-800"></div>
          <p className="text-xs ">
            Το μουσείο βρίσκεται σε στάδιο ανέγερσης και σύντομα θα είναι κοντά
            σας.
          </p>
        </div>

        <div className="text-justify">
          Ένα παραδοσιακό Βυσσιώτικο σπίτι που θα αφηγείται την ιστορία του
          τόπου, από τα πρώτα χρόνια της προσφυγιάς μέχρι τη σύγχρονη εποχή.
          Κάθε δωμάτιο θα έχει το δικό του αφήγημα, ενώ η παρουσίαση των τοπικών
          ενδυμασιών θα γίνεται τόσο με φυσικά εκθέματα όσο και με ψηφιακά μέσα.
        </div>

        <div className="relative w-full h-[500px] lg:w-[800px] lg:mx-auto">
          <Image
            priority
            src="/laografiko-mouseio/laografiko-mouseio-1.jpg"
            fill
            className="absolute object-contain"
            alt="o-silogos-image"
          />
        </div>
      </div>
    </div>
  );
}
