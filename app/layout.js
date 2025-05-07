import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ weight: ["200", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Πολιτιστικός Σύλλογος Νέας Βύσσας 'Στέφανος Καραθεοδωρής'",
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  description: "Πολιτιστικός Σύλλογος Νέας Βύσσας 'Στέφανος Καραθεοδωρής'",
  keywords: [
    "karatheodoris",
    "Stefanos Karatheodoris",
    "Καραθεοδωρης",
    "Καραθεοδωρής",
    "Στεφανος Καραθεοδωρης",
    "skaratheodoris",
    "skaratheodoris.gr",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/icon.ico" sizes="180x180" />
        <link rel="icon" href="/icon.ico" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon.ico" sizes="16x16" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={`${poppins.className} antialiased`}>
        <div className="max-w-[1440px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
