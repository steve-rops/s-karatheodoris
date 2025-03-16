"use server";

export const handleSubmit = async (formData) => {
  const name = formData.get("name");
  console.log(name);
};
