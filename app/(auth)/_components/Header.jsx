"use client";

import { signOut } from "@/app/actions";

export default function Header() {
  const handleClick = () => {
    signOut();
  };

  return (
    <div className="w-full h-10 bg-primary flex items-center justify-end px-4">
      <div
        onClick={handleClick}
        className="text-white hover:cursor-pointer hover:text-white/70"
      >
        Αποσύνδεση
      </div>
    </div>
  );
}
