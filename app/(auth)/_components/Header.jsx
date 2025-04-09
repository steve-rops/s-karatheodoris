import Button from "@/app/(pages)/login/_components/Button";
import { signOut } from "@/app/actions";

export default function Header() {
  return (
    <div className="w-full h-10 bg-primary flex items-center justify-end px-4">
      <form action={signOut}>
        <Button>Αποσύνδεση</Button>
      </form>
    </div>
  );
}
