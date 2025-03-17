import { Resend } from "resend";
import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_KEY);
const resend = new Resend("re_aR6opdv5_L8GB5Dp3YwumSrYTmfciPb1r");

export async function POST(req) {
  try {
    const { name, surname, email, message } = await req.json();

    console.log(email);

    // const { data, error } = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "somebiss@gmail.com",
    //   subject: "Hello World",
    //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    // });

    // if (error) {
    //   return NextResponse.json({ error }, { status: 500 });
    // }

    return NextResponse.json({ status: 200, message: "sent success" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
