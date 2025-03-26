const baseURL =
  process.env.NODE_ENV !== "production"
    ? process.env.ENV_BASE_URL
    : process.env.PRODUCTION_BASE_URL;

export const getEvents = async () => {
  try {
    const res = await fetch(`${baseURL || ""}/api/events`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
