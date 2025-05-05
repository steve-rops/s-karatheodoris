import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OsilogosHomePage() {
  return (
    <section className="space-y-2 p-2 py-4">
      <h2 className="text-xl font-semibold text-primary text-center">
        Ο Σύλλογος
      </h2>
      <p className="text-sm text-justify">
        Ο Σύλλογός μας ιδρύθηκε το <strong>1977</strong> με έδρα τη Νέα Βύσσα.
        Το όνομα του συλλόγου δόθηκε προς τιμήν του γένους{" "}
        <strong>ΚΑΡΑΘΕΟΔΩΡΗ</strong> το όποιο με γενέτειρα το παλιό χωριό
        Μπόσνα, σημερινή Ν. Βύσσα, έχει αναδείξει σημαντικές προσωπικότητες
        γιατρών και διπλωματών, σε όλη την ιστορική πορεία της χώρας μας, με
        αποκορύφωμα τον μαθηματικό διεθνούς φήμης{" "}
        <strong>Κωνσταντίνο Καραθεοδωρή</strong>.
      </p>
      <Link className="flex justify-center" href="/silogos">
        <Button size="sm" className="hover:cursor-pointer">
          Μάθετε Περισσότερα
        </Button>
      </Link>
    </section>
  );
}
