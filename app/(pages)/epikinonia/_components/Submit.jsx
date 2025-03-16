"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`text-white disabled:bg-gray-500 w-full`}
      size="lg"
    >
      Υποβολή
    </Button>
  );
}
