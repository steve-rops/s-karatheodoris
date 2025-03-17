"use server";

export const handleSubmit = async (formData) => {
  const baseURL =
    process.env.NODE_ENV !== "production"
      ? process.env.ENV_BASE_URL
      : PRODUCTION_BASE_URL;

  console.log(baseURL);

  const submisionData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch(`${baseURL}/api/epikinonia-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submisionData),
    });

    return { status: res.ok ? "success" : "error" };
  } catch (error) {
    console.error(error);
  }
};
