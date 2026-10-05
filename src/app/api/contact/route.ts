import { NextResponse } from "next/server";

const recipient = "tiwaripankaj2013@gmail.com";
const emailPattern = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)+$/i;
const phonePattern = /^\+[1-9][\d ()-]{6,19}$/;

function normalizePhone(phone: string): string {
  return phone.replace(/[ ()-]/g, "");
}

function validMessage(message: string): boolean {
  const normalized = message.replace(/\s+/g, " ").trim();
  if (normalized.length < 10 || normalized.length > 500) return false;
  if (!/[a-z]/i.test(normalized)) return false;

  // Reject messages made from repeated characters, words, or short phrases.
  const compact = normalized.replace(/[\s\p{P}\p{S}]/gu, "").toLowerCase();
  if (compact.length >= 8 && /^(.)\1+$/.test(compact)) return false;
  const words = normalized.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  if (words.length >= 5 && new Set(words).size === 1) return false;
  for (const phraseLength of [1, 2, 3]) {
    if (words.length >= phraseLength * 3) {
      if (words.every((word, index) => word === words[index % phraseLength])) return false;
    }
  }
  return true;
}

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  const name = text(body.name);
  const email = text(body.email);
  const phone = text(body.phone);
  const normalizedPhone = normalizePhone(phone);
  const subject = text(body.subject);
  const message = text(body.message);

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Name must be between 2 and 100 characters." }, { status: 400 });
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!phonePattern.test(phone) || !/^\+[1-9]\d{7,14}$/.test(normalizedPhone)) {
    return NextResponse.json({ error: "Enter a valid phone number with country code, such as +14155552671." }, { status: 400 });
  }
  if (subject.length > 150) {
    return NextResponse.json({ error: "Subject is too long." }, { status: 400 });
  }
  if (!validMessage(message)) {
    return NextResponse.json({ error: "Write a meaningful message between 10 and 500 characters. Repeated characters or repeated phrases are not accepted." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact email is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "The contact form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  const emailSubject = subject ? `Portfolio contact: ${subject}` : `Portfolio contact from ${name}`;
  const emailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${normalizedPhone}`,
    `Subject: ${subject || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: emailSubject,
        text: emailText,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Resend contact email request failed:", response.status, await response.text());
      return NextResponse.json({ error: "Your message couldn't be delivered. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend contact email request errored:", error);
    return NextResponse.json({ error: "Your message couldn't be delivered. Please try again later." }, { status: 502 });
  }
}
