import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { Monogram } from "../ui/Monogram";

export function Experience({ data }: { data: Portfolio["experience"] }) {
  return (
    <Section id="experience" bare title={data.title} icon="briefcase" action={data.cta}>
      <ol className="relative space-y-5 border-l border-primary/40 pl-6">
        {data.items.map((e) => (
          <li key={e.company} className="group relative rounded-xl p-2 -ml-2 transition-colors duration-300 hover:bg-primary/5 focus-within:bg-primary/5">
            <span className="absolute -left-[31px] top-7 h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={e.website}
                target="_blank"
                rel="noreferrer"
                title={`Visit ${e.company}`}
                aria-label={`Visit ${e.company}`}
                className="experience-shimmer relative inline-flex h-12 w-12 shrink-0 rounded-lg sm:h-14 sm:w-14"
              >
                <Monogram text={e.logo} className="h-full w-full transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-fg" />
                {e.logoUrl && <img src={e.logoUrl} alt={`${e.company} logo`} className="absolute inset-0 h-full w-full rounded-lg object-contain p-2" />}
              </a>
              <div className="grid flex-1 gap-2 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold transition-colors duration-300 group-hover:text-primary">{e.company}</h3>
                  <p className="text-sm text-primary transition-colors duration-300 group-hover:text-accent">{e.role}</p>
                  <p className="text-xs text-muted">{e.period}</p>
                </div>
                <ul className="list-disc space-y-1 pl-4 text-xs text-muted">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
