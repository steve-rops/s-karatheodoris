"use client";

import { getEvents } from "@/supabase";
import { useQuery } from "@tanstack/react-query";

export const useGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return { data, isLoading };
};
