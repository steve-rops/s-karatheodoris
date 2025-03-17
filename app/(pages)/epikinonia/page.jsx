import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Submit from "./_components/Submit";
import { handleSubmit } from "@/app/actions";
import InstaIcon from "@/public/insta";
import FacebookIcon from "@/public/facebook";

export default function EpikinoniaPage() {
  return (
    <div className="space-y-10 w-full">
      <div>
        <h1 className="text-2xl text-primary text-center">Επικοινωνία</h1>
        <p className="text-sm text-gray-800 text-balance text-center">
          Επικοινωνήστε μαζί μας. Πείτε μας προτάσεις, παράπονα και οτιδήποτε
          μπορούμε να φανούμε χρήσιμοι.
        </p>
      </div>

      <div className="text-gray-600 space-y-2 grid place-items-center">
        <div className="flex gap-2 ">
          <Link
            href="tel:+302552071515"
            className=" flex items-center text-sm  gap-1 hover:text-black"
          >
            <Phone size={16} />
            <span>2552071xxx</span>
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
            className="text-sm"
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

      <div className=" lg:w-96 mx-auto flex justify-center flex-col ">
        <h3 className="text-primary text-lg">Στείλε μας ένα μήνυμα</h3>
        <form
          action={handleSubmit}
          className="max-w-lg  border-[0.5px] border-primary/50 rounded-md p-3  shadow-lg space-y-4"
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
            <label htmlFor="lastname" className="text-gray-700 font-medium">
              Επίθετο:
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Πληκτρολογήστε το όνομά σας"
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

          <Submit />
        </form>
      </div>
    </div>
  );
}
