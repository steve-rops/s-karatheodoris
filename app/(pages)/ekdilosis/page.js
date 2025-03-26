import { EkdilosisList } from "./_components/EkdilosisList";

export const dynamic = "force-dynamic";

export default function EkdilosisPage() {
  return (
    <div className="lg:max-w-[65%] lg:mx-auto space-y-10">
      <h1 className="text-2xl text-primary text-center">Εκδηλώσεις</h1>
      {/* 
      <Suspense fallback={<EkdilosisListSkeleton />}>
        <EkdilosisList />
      </Suspense> */}

      <EkdilosisList />
    </div>
  );
}
