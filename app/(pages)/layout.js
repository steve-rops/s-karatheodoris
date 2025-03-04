import Image from "next/image";
import Hamburger from "./_components/Hamburger";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function layout({ children }) {
  return (
    <>
      <nav className="py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/sk-logo.svg"
            className="text-primary"
            width={100}
            height={100}
            alt="logo"
          />
          <div
            className={`flex flex-col justify-between text-xs h-full font-semibold ${space.className} antialiased`}
          >
            <p>Πολιτιστικός Σύλλογος</p>
            <p>Νέας Βύσσας</p>
            <p>Στέφανος Καραθεοδωρής</p>
          </div>
        </div>

        <Hamburger className="lg:hidden" />

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
