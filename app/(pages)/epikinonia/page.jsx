"use client";

import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Submit from "./_components/Submit";
import { handleSubmit } from "@/app/actions";
import InstaIcon from "@/public/insta";
import FacebookIcon from "@/public/facebook";
import { useState } from "react";

export default function EpikinoniaPage() {
  const [subStatus, setSubStatus] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await handleSubmit(formData);
    setSubStatus(res.status);
  };

  return (
    <div className="space-y-10 w-full">
      <div>
        <h1 className="text-2xl text-primary text-center">Επικοινωνία</h1>
        <p className="text-sm text-gray-800 text-balance text-center">
          Επικοινωνήστε μαζί μας. Πείτε μας προτάσεις, παράπονα ή ό,τι άλλο
          επιθυμείτε.
        </p>
      </div>

      <div className="text-gray-600 space-y-2 grid place-items-center">
        <div className="flex gap-2 ">
          <Link
            href="tel:+302552071515"
            className=" flex items-center text-sm  gap-1 hover:text-black"
          >
            <Phone size={16} />
            <span>2552071515</span>
          </Link>
          <div className=" flex items-center  text-sm  gap-1 hover:text-black">
            <Mail size={16} />
            <Link
              className=" hover:text-black"
              href="mailto:skaratheodoris@yahoo.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              skaratheodoris@yahoo.gr
            </Link>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <MapPin size={16} />
          <Link
            className="text-sm hover:text-black"
            href="https://maps.app.goo.gl/pZjwGypP2oECv5d58"
            target="_blank"
            rel="noopener noreferrer"
          >
            Διεύθυνση: Νέα Βύσσα, ΈΒΡΟΣ, 68001
          </Link>
        </div>

        {/* social */}
        <div className="w-full flex justify-center">
          <div className="text-gray-600 p-2 flex items-center gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.instagram.com/s.karatheodori?igsh=MTNldzlnOGY0bmZ3ZA==`}
            >
              <InstaIcon color="var(--color-gray-600)" size={30} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.facebook.com/share/16B6jDaqTU/`}
            >
              <FacebookIcon color="var(--color-gray-600)" size={30} />
            </Link>
            <Link
              href="mailto:skaratheodoris@yahoo.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={30} className="text-gray-600" />
            </Link>
          </div>
        </div>
      </div>

      {!subStatus && (
        <div className=" mx-auto flex justify-center items-center flex-col  ">
          <h3 className="text-primary text-lg text-center">
            Φόρμα Επικοινωνίας
          </h3>
          <form
            onSubmit={onSubmit}
            className="md:w-lg w-full border-[0.5px] border-primary/50 rounded-md p-3  shadow-lg space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Όνομα:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Πληκτρολογήστε το όνομά σας"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="surname" className="text-gray-700 font-medium">
                Επίθετο:
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                required
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Πληκτρολογήστε το επίθετό σας"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Μήνυμα:
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Γράψτε το μήνυμά σας εδώ..."
              ></textarea>
            </div>

            <Submit type="submit" />
          </form>
        </div>
      )}

      {subStatus === "success" && (
        <div className="flex justify-center lg:w-96 mx-auto bg-green-200 border rounded-md border-green-500 p-10">
          <div className="flex flex-col items-center">
            <CheckCircle size={42} className="text-green-700" />
            <div>Το μήνυμα σας στάλθηκε με επιτυχία</div>
          </div>
        </div>
      )}

      {subStatus === "error" && (
        <div className="p-10 flex lg:w-96 mx-auto justify-center bg-red-200 border border-red-500 rounded-md">
          <div className="flex flex-col items-center">
            <div className="font-bold">Ουπς, κάτι πήγε λάθος</div>
            <p className="text-sm">Παρακαλούμε επικοινωνήστε μαζί μας στο</p>
            <Link
              href="mailto:skaratheodoris@yahoo.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              skaratheodoris@yahoo.gr
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
