import Footer from "../(pages)/_components/Footer";
import Header from "./_components/Header";

export default function layout({ children }) {
  return (
    <div className="">
      <Header />

      <div className="p-4 h-10">{children}</div>

      <Footer />
    </div>
  );
}
