import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DoreesHomePage() {
  return (
    <div className="p-2 py-4 rounded-md border-[0.5px] border-primary/30 space-y-2 lg:w-[75%] mx-auto">
      <h2 className="text-xl font-semibold text-primary text-center">
        Υποστήριξέ μας
      </h2>
      <p className="text-center text-gray-700">
        Η βοήθεια σου, είναι πολύτιμη και απαραίτητη για να διατηρηθεί η
        πολιτιστική μας κληρονομιά. Αν θέλεις στήριξέ μας.
      </p>
      <Link className="flex justify-center" href="">
        <Button size="lg" className="text-white">
          Κάνε Δωρεά
        </Button>
      </Link>
    </div>
  );
}
