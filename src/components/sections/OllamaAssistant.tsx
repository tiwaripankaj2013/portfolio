"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export function OllamaAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I’m Pankaj’s AI sidekick. Ask me about his work, skills, or what we could build together. ✨" },
  ]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt || busy) return;
    const next = [...messages, { role: "user" as const, content: prompt }];
    setMessages(next);
    setInput("");
    setError("");
    setBusy(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Couldn’t reach the AI right now.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Couldn’t reach the AI right now.");
    } finally { setBusy(false); }
  }

  return (
    <div className="assistant-root">
      {open && <section className="assistant-panel" aria-label="Chat with the portfolio AI assistant">
        <header className="assistant-header">
          <span className="assistant-avatar"><Bot size={19} /></span>
          <div><strong>Build Buddy</strong><span><i /> powered by Ollama</span></div>
          <button className="assistant-close" onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button>
        </header>
        <div className="assistant-messages" aria-live="polite">
          {messages.map((message, index) => <p key={index} className={`assistant-message ${message.role}`}>{message.content}</p>)}
          {busy && <p className="assistant-message assistant typing">Cooking up a good one…</p>}
          {error && <p className="assistant-error">{error}<br /><small>Start Ollama locally and try again.</small></p>}
          <div ref={endRef} />
        </div>
        <form className="assistant-form" onSubmit={sendMessage}>
          <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask me anything…" aria-label="Your message" maxLength={1000} />
          <button disabled={busy || !input.trim()} aria-label="Send message"><Send size={17} /></button>
        </form>
        <p className="assistant-caption">Local AI · good vibes only</p>
      </section>}
      <button className="assistant-launcher" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close AI chat" : "Open AI chat"}>
        {open ? <X size={23} /> : <><MessageCircle size={22} /><span>Chat with AI</span><i /></>}
      </button>
    </div>
  );
}
