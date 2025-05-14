import { Beis } from "./components/eventsDescription/Beis";
import { DiethnisMeraMouseiwn } from "./components/eventsDescription/DiethnisMeraMouseiwn";
import { KatharaDeutera } from "./components/eventsDescription/KatharaDeutera";
import { KonstantinoyKaiElenis } from "./components/eventsDescription/KonstantinoyKaiElenis";
import { MathimatikoSynedrio } from "./components/eventsDescription/MathimatikoSynedrio";
import { MnhmosKaratheodori } from "./components/eventsDescription/MnhmosKaratheodori";
import { ParousiasiBibliou23 } from "./components/eventsDescription/ParousiasiBibliou23";
import { SinedrioThermodinamikis2023 } from "./components/eventsDescription/SinedrioThermodinamikis2023";
import { Vysseia } from "./components/eventsDescription/Vysseia";
import { ProsexwsDiethnisMeraMouseiwn } from "./components/prosexwsDetails/ProsexwsDiethnisMeraMouseiwn";
import { ProsexwsKonstantinoyKaiElenis } from "./components/prosexwsDetails/ProsexwsKonstantinoyKaiElenis";

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
    prosexwsDetails: () => ProsexwsKonstantinoyKaiElenis(),
    item: () => KonstantinoyKaiElenis(),
  },
  {
    slug: "mnhmosKaratheodori",
    title: "Μνημόσυνο Καραθεοδωρή",
    from: "",
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
    item: () => MnhmosKaratheodori(),
  },
  {
    slug: "beis",
    title: "Μπέης",
    item: () => Beis(),
    from: `(πηγή: Πρακτικά 3ου Πανελλήνιου Συνεδρίου Ιστορίας και Πολιτισμού της Ορεστιάδας, “Η Ορεστιάδα στον 21ο αιώνα: Προκλήσεις και Προοπτικές”)`,
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
  },
  {
    slug: "katharaDeutera",
    title: "Καθαρά Δευτέρα",
    item: () => KatharaDeutera(),
    from: "",
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
  },
  {
    slug: "vysseia",
    title: "Βύσσεια",
    item: () => Vysseia(),
    from: "",
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
  },
  {
    slug: "parousiasiBibliou-23",
    title: "Παρουσίαση Βιβλίου",
    item: () => ParousiasiBibliou23(),
    from: "",
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
  },
  {
    slug: "sinedrioThermodinamikis2023",
    title: `Συνέδριο Θερμοδυναμικής "Κωνσταντίνος Καραθεοδωρή"`,
    item: () => SinedrioThermodinamikis2023(),
    from: "",
    prosexwsDetails: () => <p>Αναμένεται ανακοίνωση προγράμματος</p>,
  },
  {
    slug: "mathimatikoSynedrio",
    title: "Παγκόσμιο Μαθηματικό Συνέδριο στη Νέα Βύσσα",
    item: () => MathimatikoSynedrio(),
    from: "(πηγή: https://geofarmak.blogspot.com/2012/04/blog-post.html)",
    prosexwsDetails: () => ProsexwsDiethnisMeraMouseiwn(),
  },

  {
    slug: "diethnisMeraMouseiwn",
    title: "Διεθνής Ημέρα Μουσείων",
    item: () => DiethnisMeraMouseiwn(),
    from: "",
    prosexwsDetails: () => ProsexwsDiethnisMeraMouseiwn(),
  },
];

export const DIFERRENCE_IN_DAYS = 31;
