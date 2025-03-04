import { AlignJustify, SquareArrowOutDownLeft } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Hamburger() {
  return (
    <Sheet className="lg:hidden">
      <SheetTrigger>
        <AlignJustify size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-primary">Μενού</SheetTitle>
        </SheetHeader>
        <ul className="flex-col justify-center space-y-5 pl-2 text-lg ">
          <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
            <SquareArrowOutDownLeft className="text-primary" />
            <span>Ο Σύλλογος</span>
          </li>
          <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
            <SquareArrowOutDownLeft className="text-primary" />
            <span>Δραστηριότητες</span>
          </li>
          <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
            <SquareArrowOutDownLeft className="text-primary" />
            <span>Εκδηλώσεις</span>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
