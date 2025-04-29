import EkdilosisProvider from "@/context/ekdilosisContext";

export default function Layout({ children }) {
  return <EkdilosisProvider>{children}</EkdilosisProvider>;
}
