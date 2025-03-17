"use client";

import {
  AlignJustify,
  ChevronDown,
  SquareArrowOutDownLeft,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { menuLinks } from "@/data";

export default function Hamburger() {
  const [wholeMenuIsOpen, setWholeMenuIsOpen] = useState(false);
  return (
    <Sheet
      open={wholeMenuIsOpen}
      onOpenChange={setWholeMenuIsOpen}
      className="lg:hidden"
    >
      <SheetTrigger>
        <AlignJustify size={30} />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-primary">Μενού</SheetTitle>
        </SheetHeader>
        <div className="flex-col justify-center pl-4 space-y-3 ">
          {menuLinks.map((el) => (
            <MenuItem
              href={el.href}
              key={el.title}
              title={el.title}
              links={el.links}
              setWholeMenuIsOpen={setWholeMenuIsOpen}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const MenuItem = ({ href, title, links, setWholeMenuIsOpen }) => {
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  const handleClick = () => {
    if (links.length === 0) setWholeMenuIsOpen((open) => !open);
    setSubmenuIsOpen((isOpen) => !isOpen);
  };

  return (
    <div key={title}>
      <Link
        className="flex gap-2 items-center hover:text-primary hover:cursor-pointer "
        onClick={handleClick}
        href={links.length > 0 ? "" : href}
      >
        <span className="text-xl">{title}</span>
        {links.length > 0 && (
          <ChevronDown
            className={`text-primary transition-transform duration-300 ${
              submenuIsOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
      {submenuIsOpen && (
        <div className="pl-8 flex flex-col ">
          {links.map((el) => (
            <Link
              key={el.title}
              className="flex gap-2 items-center hover:text-primary hover:cursor-pointer text-lg"
              onClick={() => setWholeMenuIsOpen((open) => !open)}
              href={el.href}
            >
              {el.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
