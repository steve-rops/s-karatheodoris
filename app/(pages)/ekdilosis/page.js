import { Suspense } from "react";
import {
  EkdilosisList,
  EkdilosisListSkeleton,
} from "./_components/EkdilosisList";
import { Button } from "@/components/ui/button";
import { revalidateEvens } from "@/app/actions";

export default function EkdilosisPage() {
  return (
    <div className="lg:max-w-[65%] lg:mx-auto space-y-10">
      <h1 className="text-2xl text-primary text-center">Εκδηλώσεις</h1>

      <form action={revalidateEvens}>
        <Button type="submit">Revalidate</Button>
      </form>

      <Suspense fallback={<EkdilosisListSkeleton />}>
        <EkdilosisList />
      </Suspense>
    </div>
  );
}
