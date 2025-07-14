"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const vysseia25 = [
  {
    date: new Date("2025-05-23T00:00:00"),
    1: {
      time: "18:00",
      title: "Ποδηλατοδρομία και παιχνίδια",
      location: {
        name: "Kεντρική Πλατεία Νέας Βύσσας",
        href: "https://maps.app.goo.gl/Q91FRxVnpoqX6pyE9",
      },
    },
    2: {
      time: "21:30",
      title: "Προβολή ταινίας «ΦΑΝΤΑΣΙΑ» του Αλέξη Καρδαρά",
      location: {
        name: "Μουσείο των Καραθεοδωρή",
        href: "https://maps.app.goo.gl/ipEF7PnSQS2WMWHT7",
      },
    },
  },
  {
    date: new Date("2025-05-24T00:00:00"),
    1: {
      time: "18:30",
      title:
        "Παρουσίαση βιβλίου του Νικόλαου Κουφού «Ιγνάτιος ο Λακεδαιμόνιος, Μητροπολίτης Ουγγροβλαχίας» (Προστάτης του σπουδαστή Στέφανου Καραθεοδωρή)",
      location: {
        name: "Μουσείο των Καραθεοδωρή",
        href: "https://maps.app.goo.gl/ipEF7PnSQS2WMWHT7",
      },
    },
    2: {
      time: "21:00",
      title:
        "Θεατρική κωμική παράσταση «Ευτυχώς...τρελάθηκα!» από το θεατρικό εργαστήρι Ορεστιάδας ΔΙΟΝΥΣΟΣ",
      location: {
        name: "Δημοτικο Αμφιθέατρο Νέας Βύσσας (κάτω από το Αναψυκτήριο)",
        href: "https://maps.app.goo.gl/yhVmUS4h5EGqpxdw5",
      },
    },
  },
  {
    date: new Date("2025-05-25T00:00:00"),
    1: {
      time: "19:30",
      title:
        "Μέγας Πανηγυρικός Εσπερινός και εν συνεχεία Αγρυπνία στο Παλαιό Παρεκκλήσι.",
      location: {
        name: "Ιερά Μονή Αγίας Σκέπης και Αγίας Παρασκευής",
        href: "https://maps.app.goo.gl/qLbiKdWuQ1pj23MF7",
      },
    },
    2: {
      time: "21:15",
      title: "ΚΕΝΤΡΙΚΗ ΕΚΔΗΛΩΣΗ",
      analysis: () => (
        <div className="space-y-1">
          <p> Έναρξη - χαιρετισμοί</p>
          <p>Βραβεύσεις αριστούχων μαθητών Γυμνασίου και Λυκείου Νέας Βύσσας</p>
          <p>Εμφάνιση χορευτικών τμημάτων:</p>
          <ul className="list-disc pl-2">
            <li>Πολιτιστικός Σύλλογος Νέας Βύσσας «Στέφανος Καραθεοδωρής»</li>
            <li>
              Πολιτιστικός Λαογραφικός Σύλλογος Νεολαίας Ν.Ορεστιάδας «ΟΙ
              ΘΡΑΚΕΣ»
            </li>
          </ul>

          <p> Γλέντι για όλον τον κόσμο με το συγκρότημα «ΑΚΡΙΤΙΚΟΣ ΗΧΟΣ»</p>
        </div>
      ),
      location: {
        name: "Kεντρική Πλατεία Νέας Βύσσας",
        href: "https://maps.app.goo.gl/Q91FRxVnpoqX6pyE9",
      },
    },
  },
  {
    date: new Date("2025-05-26T00:00:00"),
    1: {
      time: "7:30",
      title:
        "Όρθρος και Πανηγυρική Θεία Λειτουργία & Λιτάνευση της Ιερής Εικόνας της Αγίας Παρασκευής",
      location: {
        name: "Ιερά Μονή Αγίας Σκέπης και Αγίας Παρασκευής",
        href: "https://maps.app.goo.gl/qLbiKdWuQ1pj23MF7",
      },
    },
    2: {
      time: "19:30",
      title: "Μεθεόρτιος Εσπερινός και Παράκληση στην Αγία Παρασκευή",
      location: {
        name: "Ιερά Μονή Αγίας Σκέπης και Αγίας Παρασκευής",
        href: "https://maps.app.goo.gl/qLbiKdWuQ1pj23MF7",
      },
    },
    3: {
      time: "20:30",
      title: "ΛΑΟΓΡΑΦΙΚΗ ΒΡΑΔΙΑ",
      analysis: () => (
        <div className="space-y-1">
          <p>«Το πανυγήρι της Αγίας Παρασκευής στα χρόνια εκείνα...»</p>
          <p>Ομιλητές:</p>
          <ul className="list-disc pl-2">
            <li>
              Δρ. Ελένη Φιλιππίδου, Αν, Καθηγήτρια Ελληνικού Παραδοσιακού Χορού
              Ε.Κ.Π.Α
            </li>
            <li>
              Σαράντης Σαραντίδης, Δάσκαλος - Διευθυντής Δημοτικού Σχολείου Νέας
              Βύσσας «ΚΑΡΑΘΕΟΔΩΡΕΙΟ»
            </li>
          </ul>
          <p>Συμμετέχει η Χορωδία του Συλλόγου Γυναικών Ν. Βύσσας</p>
        </div>
      ),
      location: {
        name: "Ιερά Μονή Αγίας Σκέπης και Αγίας Παρασκευής",
        href: "https://maps.app.goo.gl/qLbiKdWuQ1pj23MF7",
      },
    },
  },
];

export const ProsexwsVysseia25 = () => {
  const [dotIndex, setDotIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setDotIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index) => {
    if (api) api.scrollTo(index);
  };
  return (
    <div className="p-2 relative w-full">
      <Carousel setApi={setApi} className="md:w-[90%] mx-auto">
        <CarouselContent className=" w-full flex md:w-[95%] mx-auto gap-12 md:gap-16 ">
          {vysseia25.map((ev, i) => (
            <CarouselItem
              key={i}
              className="   p-0 border border-green-300 rounded-md"
            >
              <div className="space-y-4 p-1">
                <h3 className="text-lg font-bold">
                  {ev.date.toLocaleDateString("el-GR", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <div className="space-y-2">
                  {Object.entries(ev).map(([key, value]) => {
                    return (
                      <div
                        key={key}
                        className=" grid grid-cols-[50px_1fr] w-full space-y-2"
                      >
                        <p className="font-semibold ">{value.time}</p>
                        <div className="">
                          <p>{value.title}</p>
                          {value.analysis && <div>{value.analysis()}</div>}
                          {value.location && (
                            <a
                              href={value.location.href}
                              className="text-blue-500 underline"
                            >
                              {value.location.name}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/3 hidden md:flex " />
        <CarouselNext className="top-1/3 hidden md:flex " />
      </Carousel>

      <div className="grid place-items-center p-2">
        <div className="flex gap-2 mx-auto">
          {vysseia25.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-primary ${
                dotIndex === index ? "bg-primary" : ""
              } cursor-pointer`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
