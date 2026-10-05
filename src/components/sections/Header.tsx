"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import type { Link as LinkType } from "@/lib/types";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { ThemeToggle } from "../theme/ThemeToggle";

export function Header({ brand, nav, cta }: { brand: string; nav: LinkType[]; cta: LinkType }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-bold"><Icon name="code" className="text-primary" size={26} />{brand}</a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-muted transition hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={cta.href} icon={cta.icon} className="hidden sm:inline-flex">{cta.label}</Button>
          <button type="button" className="relative z-[60] grid h-9 w-9 place-items-center rounded-full border border-border bg-bg lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>
      {mounted && createPortal(<div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "visible" : "invisible pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          aria-modal="true"
          className={`absolute inset-y-0 left-0 flex w-[min(19rem,85vw)] flex-col border-r border-border bg-[rgb(var(--bg))] px-6 pb-8 pt-20 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          {nav.map((n) => <a key={n.href} href={n.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="border-b border-border py-4 text-muted transition hover:text-primary">{n.label}</a>)}
          <Button href={cta.href} icon={cta.icon} className="mt-6 sm:hidden" onClick={() => setOpen(false)}>{cta.label}</Button>
        </nav>
      </div>, document.body)}
    </header>
  );
}
