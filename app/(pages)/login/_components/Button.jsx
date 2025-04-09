"use client";

import { Button as UIButton } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const Button = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <UIButton
      type="submit"
      disabled={pending}
      className={`text-white hover:cursor-pointer`}
    >
      {pending ? <span className="loader-small"></span> : children}
    </UIButton>
  );
};

export default Button;
