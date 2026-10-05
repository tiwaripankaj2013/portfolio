import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Icon } from "../ui/Icon";
import { Monogram } from "../ui/Monogram";

export function Testimonials({ data }: { data: Portfolio["testimonials"] }) {
  return (
    <Section id="testimonials" title={data.title} icon="star" className="border-t border-border bg-surface">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((t) => (
          <Card key={t.name} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Monogram text={t.name} round className="h-10 w-10" />
              <div><p className="text-sm font-semibold">{t.name}</p><p className="text-xs text-muted">{t.role}</p></div>
            </div>
            <blockquote className="flex-1 text-sm text-muted">“{t.quote}”</blockquote>
            <div className="flex gap-0.5 text-primary" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }, (_, i) => <Icon key={i} name="star" size={14} fill="currentColor" />)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
