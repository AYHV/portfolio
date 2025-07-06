// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 🔒 Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // 📦 Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📧 Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // ปรับให้ขึ้นชื่อด้วย
      to: process.env.EMAIL_USER,
      subject: `📨 New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("❌ Email sending error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
