import FacebookIcon from "@/public/facebook";
import InstaIcon from "@/public/insta";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center items-start">
          {/* Logo - social */}
          <div className="">
            <Link href="/">
              <Image
                src="/sk-logo-white.svg"
                className="mx-auto"
                width={100}
                height={100}
                alt="logo"
              />
              <div className="text-center">
                <h1 className="text-[10px] lg:text-[14px] ">
                  Πολιτιστικός Σύλλογος Νέας Βύσσας
                </h1>
                <span className="text-sm lg:text-xl font-semibold text-white">
                  &quot;Στέφανος Καραθεοδωρής&quot;
                </span>
              </div>
            </Link>

            {/* social */}
            <div className="w-full flex justify-center">
              <div className="text-[var(--muted)] p-2 flex items-center gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.instagram.com/s.karatheodori?igsh=MTNldzlnOGY0bmZ3ZA==`}
                >
                  <InstaIcon color="var(--muted)" size={30} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.facebook.com/share/16B6jDaqTU/`}
                >
                  <FacebookIcon color="var(--muted)" size={30} />
                </Link>
                <Link
                  href="mailto:skaratheodoris@yahoo.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={30} className="text-secondary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4 items-center">
            <h3 className="text-xl font-semibold ">Σύνδεσμοι</h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <Link href="/silogos" className="text-muted hover:text-white">
                  Σύλλογος
                </Link>
              </li>
              <li>
                <Link
                  href="/drastiriotites"
                  className="text-muted hover:text-white"
                >
                  Δραστηριότητες
                </Link>
              </li>
              <li>
                <Link href="/ekdilosis" className="text-muted hover:text-white">
                  Εκδηλώσεις
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl mx-auto font-semibold mb-4">Επικοινωνία</h3>
            <div className=" flex gap-2 lg:flex-col">
              <Link
                className="text-[var(--muted)] hover:text-white flex gap-1 items-center"
                href="mailto:skaratheodoris@yahoo.gr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
                <span className="hidden lg:block">skaratheodoris@yahoo.gr</span>
              </Link>
              <Link
                className="text-[var(--muted)] hover:text-white flex gap-1 items-center"
                href="tel:+302552071515"
              >
                <Phone />
                <span className="hidden lg:block">+302552071515</span>
              </Link>
              <Link
                className="text-[var(--muted)] hover:text-white flex gap-1 items-center"
                href="https://maps.app.goo.gl/pZjwGypP2oECv5d58"
              >
                <MapPin />
                <span className="hidden lg:block">
                  Διεύθυνση: Νέα Βύσσα Ορεστιάδας, 68001
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} s-karatheodoris. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
