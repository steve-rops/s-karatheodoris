"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Hamburger from "./Hamburger";
import FacebookIcon from "@/public/facebook";
import { menuLinks } from "@/data";

export default function Header() {
  return (
    <header className="w-full">
      {/* social media links */}
      <div className="bg-primary flex items-center justify-between p-2">
        <div className=" text-[var(--muted)] flex items-center gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.instagram.com/s.karatheodori?igsh=MTNldzlnOGY0bmZ3ZA==`}
          >
            <FaInstagram size={24} className="hover:text-white" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/share/16B6jDaqTU/`}
          >
            <FaFacebook size={24} className="hover:text-white" />
          </Link>
          <Link
            href="mailto:skaratheodoris@yahoo.gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} className="hover:text-white" />
          </Link>
        </div>

        {/* <Link href="#">
          <Button
            size="sm"
            className="p-1 bg-accent font-semibold"
            variant="secondary"
          >
            Υποστήριξέ μας!
          </Button>
        </Link> */}
      </div>

      <nav className="p-2 relative flex items-center justify-between ">
        {/* logo */}
        <div className="flex items-center">
          <Link className="relative w-[100px] h-[100px]" href="/">
            <Image
              priority
              fill
              src="/sk-logo.svg"
              className="absolute object-cover"
              alt="logo"
            />
          </Link>
          <Link href="/">
            <div className={`text-center  `}>
              <h1 className="text-[10px] lg:text-[12px] ">
                Πολιτιστικός Σύλλογος Νέας Βύσσας
              </h1>
              <span className="text-sm lg:text-[16px] font-semibold text-primary">
                &quot;Στέφανος Καραθεοδωρής&quot;
              </span>
            </div>
          </Link>
        </div>

        {/* hamburger only small screens */}
        <div className="lg:hidden ">
          <Hamburger />
        </div>

        {/* Nav links only for big screens */}
        <div className="hidden lg:block">
          <ul className="flex justify-center gap-4 lg:text-[15px] ">
            {menuLinks.map((el, index) => (
              <li
                key={index}
                className="relative group hover:text-primary cursor-pointer"
              >
                {el.links.length > 0 ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex items-center gap-2 hover:cursor-pointer hover:text-primary">
                        <span>{el.title}</span>
                        <ChevronDown />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {el.links.map((link) => (
                        <Link key={link.title} href={link.href}>
                          <DropdownMenuItem className="hover:cursor-pointer">
                            {link.title}
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={el.href}>{el.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
