import { getEvents } from "@/supabase";

export default async function AdminPage() {
  const { mainEvents, secEvents } = await getEvents();
  const data = [...mainEvents, ...secEvents];
  console.log(data);
  return <div className=""></div>;
}
