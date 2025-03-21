"use client";

import { AlignJustify, ChevronDown } from "lucide-react";
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

  return (
    <div>
      {links.length > 0 ? (
        <div
          className="flex gap-2 items-center hover:text-primary hover:cursor-pointer "
          onClick={() => setSubmenuIsOpen((open) => !open)}
        >
          <span className="text-xl">{title}</span>
          <ChevronDown
            className={`text-primary transition-transform duration-300 ${
              submenuIsOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      ) : (
        <div onClick={() => setWholeMenuIsOpen(false)}>
          <Link className="text-xl hover:text-primary" href={href}>
            {title}
          </Link>
        </div>
      )}

      {submenuIsOpen && (
        <div className="pl-8 flex flex-col ">
          {links.map((el) => (
            <div key={el.title} onClick={() => setWholeMenuIsOpen(false)}>
              <Link
                className="flex gap-2 items-center hover:text-primary hover:cursor-pointer text-lg"
                onClick={() => setWholeMenuIsOpen(false)}
                href={el.href}
              >
                {el.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
