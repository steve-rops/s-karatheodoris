export const getEvents = async () => {
  const baseURL =
    process.env.NODE_ENV !== "production"
      ? process.env.ENV_BASE_URL
      : process.env.PRODUCTION_BASE_URL;

  const res = await fetch(`${baseURL}/api/events`);
  const data = await res.json();

  return data;
};
