"use client";
import { Button } from "@/components/ui/button";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <Header />

      <div className="p-4 mb-12 ">
        {pathname !== "/" && (
          <Link className="" href="/">
            <Button size="sm" className="mb-8" variant="outline">
              <ArrowLeft />
              <span>Αρχική</span>
            </Button>
          </Link>
        )}
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </div>
      <Footer />
    </div>
  );
}
