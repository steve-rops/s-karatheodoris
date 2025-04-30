import { Beis } from "./components/eventsDescription/Beis";
import { KatharaDeutera } from "./components/eventsDescription/KatharaDeutera";
import { KonstantinoyKaiElenis } from "./components/eventsDescription/KonstantinoyKaiElenis";
import { MnhmosKaratheodori } from "./components/eventsDescription/MnhmosKaratheodori";
import { ParousiasiBibliou23 } from "./components/eventsDescription/ParousiasiBibliou23";
import { SinedrioThermodinamikis2023 } from "./components/eventsDescription/SinedrioThermodinamikis2023";
import { Vysseia } from "./components/eventsDescription/Vysseia";

export const menuLinks = [
  {
    title: "Ο Σύλλογος",
    links: [
      { title: "Γενικά", href: "/silogos" },
      { title: "Δραστηριότητες", href: "/silogos/drastiriotites" },
      { title: "Μέλη ΔΣ", href: "/silogos/melhds" },
    ],
  },
  {
    title: "Μουσεία",
    links: [
      {
        title: "Μουσείο των Καραθεοδωρή",
        href: "/mouseio-karatheodori",
      },
      { title: "Λαογραφικό Μουσείο", href: "/mouseio-laografiko" },
    ],
  },
  { title: "Εκδηλώσεις", href: "/ekdilosis", links: [] },
  { title: "Ο Τόπος μας", href: "/otoposmas", links: [] },
  { title: "Επικοινωνία", href: "/epikinonia", links: [] },
];

export const events = [
  {
    slug: "kostantinouKaiElenis",
    title: "Πανηγύρι Κωνσταντίνου και Ελένης",
    from: "",
    item: () => KonstantinoyKaiElenis(),
  },
  {
    slug: "mnhmosKaratheodori",
    title: "Μνημόσυνο Καραθεοδωρή",
    from: "",
    item: () => MnhmosKaratheodori(),
  },
  {
    slug: "beis",
    title: "Μπέης",
    item: () => Beis(),
    from: `(πηγή: Πρακτικά 3ου Πανελλήνιου Συνεδρίου Ιστορίας και Πολιτισμού της Ορεστιάδας, “Η Ορεστιάδα στον 21ο αιώνα: Προκλήσεις και Προοπτικές”)`,
  },
  {
    slug: "katharaDeutera",
    title: "Καθαρά Δευτέρα",
    item: () => KatharaDeutera(),
    from: "",
  },
  {
    slug: "vysseia",
    title: "Βύσσεια",
    item: () => Vysseia(),
    from: "",
  },
  {
    slug: "parousiasiBibliou-23",
    title: "Παρουσίαση Βιβλίου",
    item: () => ParousiasiBibliou23(),
    from: "",
  },
  {
    slug: "sinedrioThermodinamikis2023",
    title: `Συνέδριο Θερμοδυναμικής "Κωνσταντίνος Καραθεοδωρή"`,
    item: () => SinedrioThermodinamikis2023(),
    from: "",
  },
];

export const DIFERRENCE_IN_DAYS = 31;
