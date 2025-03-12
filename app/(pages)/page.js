import { Button } from "@/components/ui/button";
import CarouselHomePage from "./_components/Carousel";

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
        <Button size="sm" className="hover:cursor-pointer">
          Μάθε Περισσότερα
        </Button>
      </div>

      <div className="space-y-2 bg-muted/35 p-2 rounded-md">
        <h2 className="text-xl font-semibold text-primary text-center">
          Εκδηλώσεις
        </h2>
      </div>
    </div>
  );
}
