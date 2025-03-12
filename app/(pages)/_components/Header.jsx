"use client";

import Image from "next/image";
import InstaIcon from "@/public/insta";
import { Mail } from "lucide-react";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/public/facebook";

export default function Header() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setSelected("");
    }
    if (pathname.includes("silogos")) {
      setSelected("silogos");
    } else if (pathname.includes("drastiriotites")) {
      setSelected("drastiriotites");
    } else if (pathname.includes("ekdilosis")) {
      setSelected("ekdilosis");
    } else if (pathname.includes("epikinonia")) {
      setSelected("epikinonia");
    }
  }, [pathname]);

  return (
    <div className="w-full">
      {/* social media links */}
      <div className="bg-primary text-[var(--muted)] p-2 flex items-center gap-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.instagram.com/s.karatheodori?igsh=MTNldzlnOGY0bmZ3ZA==`}
        >
          <InstaIcon color="var(--muted)" size={24} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.facebook.com/share/16B6jDaqTU/`}
        >
          <FacebookIcon color="var(--muted)" size={24} />
        </Link>
        <Link
          href="mailto:skaratheodoris@yahoo.gr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={26} className="text-secondary" />
        </Link>
      </div>

      <nav className="p-2 relative flex items-center justify-between ">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/sk-logo.svg"
              className=""
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <Link href="/">
            <div className={`text-center  `}>
              <h1 className="text-[10px] lg:text-[14px] ">
                Πολιτιστικός Σύλλογος Νέας Βύσσας
              </h1>
              <span className="text-sm lg:text-xl font-semibold text-primary">
                &quot;Στέφανος Καραθεοδωρής&quot;
              </span>
            </div>
          </Link>
        </div>

        {/* hamburger only small screens */}
        <div className="lg:hidden ">
          <Hamburger />
        </div>

        {/* nav links only big screens */}
        <div className="hidden lg:block">
          <ul
            onClick={(e) => setSelected(e.target.getAttribute("value"))}
            className="flex justify-center gap-4 text-xs lg:text-lg "
          >
            <Link href="/silogos">
              <li
                value="silogos"
                className={`hover:cursor-pointer hover:text-primary ${
                  selected === "silogos"
                    ? "underline underline-offset-2 decoration-primary "
                    : ""
                } `}
              >
                Ο Σύλλογος
              </li>
            </Link>
            <Link href="/drastiriotites">
              <li
                value="drastiriotites"
                className={`hover:cursor-pointer hover:text-primary ${
                  selected === "drastiriotites"
                    ? "underline underline-offset-2 decoration-primary"
                    : ""
                } `}
              >
                Δραστηριότητες
              </li>
            </Link>
            <Link href="/ekdilosis">
              <li
                value="ekdilosis"
                className={`hover:cursor-pointer hover:text-primary ${
                  selected === "ekdilosis"
                    ? "underline underline-offset-2 decoration-primary"
                    : ""
                } `}
              >
                Εκδηλώσεις
              </li>
            </Link>
            <Link href="/epikinonia">
              <li
                value="epikinonia"
                className={`hover:cursor-pointer hover:text-primary ${
                  selected === "epikinonia"
                    ? "underline underline-offset-2 decoration-primary"
                    : ""
                } `}
              >
                Επικοινωνία
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
