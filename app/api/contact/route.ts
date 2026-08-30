import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "venkateswar8703@gmail.com";

    // If Resend API key is not configured, be honest and return UNCONFIGURED code
    if (!resendApiKey || resendApiKey.startsWith("re_your_")) {
      return NextResponse.json(
        {
          code: "UNCONFIGURED_EMAIL_PROVIDER",
          message:
            "Email service provider (RESEND_API_KEY) is not yet configured in environment variables.",
          directEmail: recipientEmail,
        },
        { status: 503 }
      );
    }

    // Call Resend API if API Key is configured
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: email,
        subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Thank you! Your message has been delivered." },
        { status: 200 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to send email via provider." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
