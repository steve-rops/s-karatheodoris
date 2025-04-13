import { Suspense } from "react";
import Footer from "../(pages)/_components/Footer";
import Header from "./_components/Header";

export default function layout({ children }) {
  return (
    <div className="">
      <Header />

      <Suspense fallback={<div className="loader" />}>
        <div className="p-4 ">{children}</div>
      </Suspense>

      <Footer />
    </div>
  );
}
