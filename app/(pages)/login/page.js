import { login } from "@/app/actions";
import Button from "./_components/Button";

export default function LoginPage() {
  return (
    <form
      action={login}
      className="md:w-96 w-full mx-auto border-2 border-primary rounded-lg p-4 grid grid-cols-[25%,1fr] gap-2 items-center "
    >
      <label htmlFor="email">Email:</label>
      <input
        className="border-[0.1px] rounded-md focus:ring-1 focus:ring-primary border-primary p-1 outline-none "
        id="email"
        name="email"
        type="email"
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        className="border-[0.1px] rounded-md focus:ring-1 focus:ring-primary border-primary p-1 outline-none "
        id="password"
        name="password"
        type="password"
        required
      />
      <Button>Συνδεθείτε</Button>
    </form>
  );
}
