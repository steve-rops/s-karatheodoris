import Image from "next/image";
import Hamburger from "./(pages)/_components/Hamburger";

export default function Home() {
  return (
    <nav className="py-2 relative lg:flex lg:items-center lg:justify-between">
      <div className="lg:flex lg:items-center">
        <Image
          src="/sk-logo.svg"
          className="mx-auto lg:mx-0"
          width={100}
          height={100}
          alt="logo"
        />

        <div className={`text-center pt-2 lg:text-left`}>
          <h1 className="text-[14px] ">Πολιτιστικός Σύλλογος Νέας Βύσσας</h1>
          <span className="text-xl font-semibold text-primary">
            &quot;Στέφανος Καραθεοδωρής&quot;
          </span>
        </div>
      </div>

      <div className="lg:hidden absolute right-2 top-[25%]">
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
  );
}
