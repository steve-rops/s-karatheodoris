"use server";

export const handleSubmit = async (formData) => {
  const submisionData = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const { data, error } = await fetch(
      "http://localhost:3000/api/epikinonia-form",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submisionData),
      }
    );

    if (error) throw new Error(error);
  } catch (error) {
    console.error(error);
  }
};
