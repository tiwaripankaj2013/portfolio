"use client";
import { useState, type FormEvent } from "react";
import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

const field = "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted/70 focus:border-primary";

export function Contact({ data }: { data: Portfolio["contact"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok) {
        setError(result?.error || "Couldn't send your message. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title={data.title} icon="mail" className="border-t border-border">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="max-w-md text-muted">{data.text}</p>
          <ul className="mt-6 space-y-4">
            {data.info.map((i) => (
              <li key={i.value} className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-primary text-primary"><Icon name={i.icon} size={18} /></span>{i.value}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2" aria-busy={status === "sending"}>
          <input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name *" aria-label="Your name (required)" className={field} />
          <input name="email" type="email" required maxLength={254} autoComplete="email" pattern="[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)+" title="Enter a valid email address, such as name@example.com" placeholder="Your email *" aria-label="Your email (required)" className={field} />
          <input name="phone" type="tel" required maxLength={25} autoComplete="tel" inputMode="tel" pattern="\\+[1-9][0-9 ()-]{6,19}" title="Use + and your country code, followed by 7–14 digits. Spaces, parentheses, and hyphens are allowed." placeholder="Phone with country code *" aria-label="Phone number with country code (required)" className={field} />
          <select name="subject" aria-label="Subject" className={field}><option value="">Choose a subject (optional)</option>{data.subjects.map((s) => <option key={s}>{s}</option>)}</select>
          <textarea name="message" required minLength={10} maxLength={500} rows={4} placeholder="Tell me about your project or inquiry (10–500 characters) *" aria-label="Message (required)" className={`${field} sm:col-span-2`} />
          <Button type="submit" icon="send" disabled={status === "sending"} className="sm:col-span-2">{status === "sending" ? "Sending..." : "Send Message"}</Button>
          <p role="status" className="text-sm sm:col-span-2">
            {status === "sent" && "Message sent. I'll reply soon."}
            {status === "error" && error}
          </p>
        </form>
      </div>
    </Section>
  );
}
