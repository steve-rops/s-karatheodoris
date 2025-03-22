export const getEvents = async () => {
  const baseURL =
    process.env.NODE_ENV !== "production"
      ? process.env.ENV_BASE_URL
      : process.env.PRODUCTION_BASE_URL;

  try {
    const res = await fetch(`${baseURL}/api/events`, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
