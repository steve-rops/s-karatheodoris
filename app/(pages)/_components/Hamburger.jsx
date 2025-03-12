"use client";

import { AlignJustify, SquareArrowOutDownLeft } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} className="lg:hidden">
      <SheetTrigger>
        <AlignJustify size={30} />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-primary">Μενού</SheetTitle>
        </SheetHeader>
        <ul className="flex-col justify-center space-y-5 pl-2 text-lg ">
          <Link onClick={() => setIsOpen(false)} href="/silogos">
            <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
              <SquareArrowOutDownLeft className="text-primary" />
              <span>Ο Σύλλογος</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/drastiriotites">
            <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
              <SquareArrowOutDownLeft className="text-primary" />
              <span>Δραστηριότητες</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/ekdilosis">
            <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
              <SquareArrowOutDownLeft className="text-primary" />
              <span>Εκδηλώσεις</span>
            </li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/epikinonia">
            <li className="hover:cursor-pointer hover:text-primary flex gap-2 ">
              <SquareArrowOutDownLeft className="text-primary" />
              <span>Επικοινωνία</span>
            </li>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
