import { Badge } from "@/components/ui/badge";

export default function MouseioLaografiko() {
  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="text-2xl text-primary text-center">
          Νέο Λαογραφικό Μουσείο
        </h1>

        <div className="border-green-700 border-[0.5px] rounded-md bg-green-200 p-2 flex items-baseline lg:items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-800"></div>
          <p className="text-xs ">
            Το μουσείο βρίσκεται σε στάδιο ανέγερσης και σύντομα θα είναι κοντά
            σας.
          </p>
        </div>

        {/* <Badge className="bg-yellow-300 flex items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-800"></div>
          <span className="text-yellow-800">Υπό Ανέγερση</span>
        </Badge> */}

        <div className="text-justify">
          Ένα παραδοσιακό Βυσσιώτικο σπίτι που θα αφηγείται την ιστορία του
          τόπου, από τα πρώτα χρόνια της προσφυγιάς μέχρι τη σύγχρονη εποχή.
          Κάθε δωμάτιο θα έχει το δικό του αφήγημα, ενώ η παρουσίαση των τοπικών
          ενδυμασιών θα γίνεται τόσο με φυσικά εκθέματα όσο και με ψηφιακά μέσα.
        </div>
      </div>
    </div>
  );
}
