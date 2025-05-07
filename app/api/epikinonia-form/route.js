import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(`${process.env.RESEND_KEY}`);

export async function POST(req) {
  try {
    const { name, surname, email, message } = await req.json();

    if (!name || !surname || !email)
      return NextResponse.json({ status: 500, error: "error" });

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "skaratheodoris@yahoo.gr",
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Surname:</strong> ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    });

    console.log(error);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ status: 200, message: "sent success" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
