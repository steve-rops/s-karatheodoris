export const getEvents = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events`,
      {
        headers: {
          apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        cache: "force-cache", // Cache the request
        next: { revalidate: 10 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) throw new Error("Failed to fetch events");

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
