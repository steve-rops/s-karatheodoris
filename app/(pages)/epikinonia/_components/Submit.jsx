"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`text-white disabled:bg-gray-500 w-full hover:cursor-pointer`}
      size="lg"
    >
      Υποβολή
    </Button>
  );
}
