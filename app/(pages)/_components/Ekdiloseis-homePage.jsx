import { Button } from "@/components/ui/button";
import Link from "next/link";
import Prosexws from "./Prosexws";

export default function EkdiloseisHomePage() {
  return (
    <div className="w-full space-y-4 bg-muted/35 p-2  rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-primary text-center">
        Εκδηλώσεις
      </h2>
      <p className="text-center text-gray-700">
        Μάθετε ό,τι χρειάζεστε για τις Εκδηλώσεις του Συλλόγου μας.
      </p>
      <Link href="/ekdilosis" className="flex justify-center ">
        <Button className="hover:cursor-pointer">Όλες οι Εκδηλώσεις</Button>
      </Link>

      <Prosexws />
    </div>
  );
}
