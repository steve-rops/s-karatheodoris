import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["200", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="max-w-[1440px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
