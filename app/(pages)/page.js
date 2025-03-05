import Image from "next/image";
import Hamburger from "./_components/Hamburger";
import InstaIcon from "@/public/insta";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-primary text-white p-2 flex items-center gap-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.instagram.com/s.karatheodori?igsh=MTNldzlnOGY0bmZ3ZA==`}
        >
          <InstaIcon color="#89857d" size={24} />
        </Link>

        <Link
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={26} className="text-secondary" />
        </Link>
      </div>

      <nav className="p-2 relative flex items-center justify-between ">
        <div className="flex items-center">
          <Image
            src="/sk-logo.svg"
            className=""
            width={100}
            height={100}
            alt="logo"
          />

          <div className={`text-center  `}>
            <h1 className="text-[10px] lg:text-[14px] ">
              Πολιτιστικός Σύλλογος Νέας Βύσσας
            </h1>
            <span className="text-sm lg:text-xl font-semibold text-primary">
              &quot;Στέφανος Καραθεοδωρής&quot;
            </span>
          </div>
        </div>

        <div className="lg:hidden ">
          <Hamburger />
        </div>

        <div className="hidden lg:block">
          <ul className="flex justify-center gap-4 text-xs lg:text-lg ">
            <li className="hover:cursor-pointer hover:text-primary ">
              Ο Σύλλογος
            </li>
            <li className="hover:cursor-pointer hover:text-primary ">
              Δραστηριότητες
            </li>
            <li className="hover:cursor-pointer hover:text-primary ">
              Εκδηλώσεις
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
