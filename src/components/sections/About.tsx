import type { Portfolio } from "@/lib/types";
import { Section } from "../ui/Section";
import { ProgressBar } from "../ui/ProgressBar";
import { Button } from "../ui/Button";

export function About({ data }: { data: Portfolio["about"] }) {
  return (
    <Section id="about" bare title={data.title} icon="users">
      <p className="text-muted">{data.text}</p>
      <div className="mt-6 space-y-4">{data.bars.map((b) => <ProgressBar key={b.label} {...b} />)}</div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-primary">Education</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted">{data.education.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary">Personal</h3>
          <p className="mt-2 text-sm text-muted">{data.personal}</p>
        </div>
      </div>
      <Button variant="outline" href={data.cta.href} icon={data.cta.icon} className="mt-6">{data.cta.label}</Button>
    </Section>
  );
}
