import { NextResponse } from "next/server";

export const runtime = "nodejs";

const systemPrompt = `You are Build Buddy, the upbeat AI assistant on Pankaj Tiwari's developer portfolio. Be friendly, concise, encouraging, and practical, with rock-star developer energy and positive vibes. Answer questions about the portfolio using the visible site context; don't invent personal details, jobs, or skills. If asked something outside that context, say so warmly and offer to help brainstorm. Keep replies under 120 words.`;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 12 || messages.some((message: unknown) =>
    !message || typeof message !== "object" || !["user", "assistant"].includes((message as { role?: string }).role ?? "") ||
    typeof (message as { content?: unknown }).content !== "string" || (message as { content: string }).content.length > 1000
  )) return NextResponse.json({ error: "Send a message of up to 1,000 characters to get started." }, { status: 400 });

  const endpoint = (process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434").replace(/\/$/, "");
  const model = process.env.OLLAMA_MODEL || "llama3.2";
  try {
    const response = await fetch(`${endpoint}/api/chat`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model, stream: false, messages: [{ role: "system", content: systemPrompt }, ...messages] }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!response.ok) throw new Error(`Ollama returned ${response.status}`);
    const result = await response.json();
    const reply = result?.message?.content;
    if (typeof reply !== "string" || !reply.trim()) throw new Error("Ollama returned an empty response");
    return NextResponse.json({ reply: reply.trim() });
  } catch {
    return NextResponse.json({ error: `I can’t reach Ollama yet. Make sure it’s running with the “${model}” model pulled.` }, { status: 503 });
  }
}
