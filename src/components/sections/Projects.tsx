"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Icon } from "../ui/Icon";

export function Projects({ data }: { data: Portfolio["projects"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild;
    if (!track || !firstSlide) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (firstSlide.getBoundingClientRect().width + gap), behavior: "smooth" });
  }

  function goTo(index: number) {
    const track = trackRef.current;
    const slide = track?.children.item(index);
    if (!track || !(slide instanceof HTMLElement)) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }

  function updateActiveIndex() {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children);
    let nearest = 0;
    let distance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const offset = Math.abs((slide as HTMLElement).offsetLeft - track.scrollLeft - track.offsetLeft);
      if (offset < distance) { distance = offset; nearest = index; }
    });
    setActiveIndex(nearest);
  }

  return (
    <Section id="projects" title={data.title} subtitle={data.subtitle} icon="code" action={data.cta}>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={updateActiveIndex}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Project slides"
        >
          {data.items.map((p) => {
            const isPublic = p.href.startsWith("http");
            return (
              <div key={p.title} className="w-full shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]">
                <Card className="h-full flex-col">
                  <div className="mb-4 aspect-video overflow-hidden rounded-lg border border-border bg-surface">
                    {isPublic ? (
                      <iframe
                        src={p.href}
                        title={`${p.title} live site preview`}
                        loading="lazy"
                        className="h-full w-full border-0"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-accent/10 p-6">
                        <span className="text-center text-sm text-muted">Private project · live preview unavailable</span>
                      </div>
                    )}
                  </div>
                  <div className="flex min-h-14 items-center gap-3">
                    <a
                      href={p.href}
                      target={isPublic ? "_blank" : undefined}
                      rel={isPublic ? "noreferrer" : undefined}
                      aria-label={isPublic ? `Open ${p.title} website` : `${p.title} is a private project`}
                      className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-surface p-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {p.image ? (
                        <img src={p.image} alt={`${p.title} logo`} loading="lazy" className="h-full w-full object-contain" />
                      ) : (
                        <span className="text-xs font-bold text-primary">{p.title.slice(0, 3).toUpperCase()}</span>
                      )}
                    </a>
                    <h3 className="font-semibold leading-snug"><a href={p.href} target={isPublic ? "_blank" : undefined} rel={isPublic ? "noreferrer" : undefined} className="rounded-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{p.title}</a></h3>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">{p.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                  <p className="mt-3 flex-1 text-sm text-muted">{p.description}</p>
                  <Link href={p.href} target={isPublic ? "_blank" : undefined} rel={isPublic ? "noreferrer" : undefined} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {isPublic ? "Visit Website" : "Contact for details"} <Icon name="arrow" size={14} />
                  </Link>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3" aria-label="Choose a project">
            <Hand className="h-5 w-5 shrink-0 animate-pulse text-primary" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-1.5">
              {data.items.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${activeIndex === index ? "w-6 bg-primary" : "w-2.5 bg-muted/40 hover:bg-primary/60"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-fg transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-fg transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
