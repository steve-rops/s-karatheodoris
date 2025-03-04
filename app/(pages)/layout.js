import Image from "next/image";
import Hamburger from "./_components/Hamburger";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function layout({ children }) {
  return (
    <>
      <nav className="py-2 relative">
        <div className="flex items-center">
          <Image
            src="/sk-logo.svg"
            className="mx-auto"
            width={100}
            height={100}
            alt="logo"
          />
        </div>

        <div className={`text-center ${space.className} pt-2`}>
          <h1 className="text-[14px] ">Πολιτιστικός Σύλλογος Νέας Βύσσας</h1>
          <span className="text-xl font-semibold text-primary">
            Στέφανος Καραθεοδωρής
          </span>
        </div>

        <div className="lg:hidden absolute right-2 top-2">
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

      {children}
    </>
  );
}
