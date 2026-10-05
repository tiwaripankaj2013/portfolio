import type { Link as LinkType } from "@/lib/types";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Button } from "./Button";

type Props = {
  id?: string; title: string; subtitle?: string; icon?: string; action?: LinkType;
  bare?: boolean; className?: string; children: React.ReactNode;
};

/** Standard section wrapper: heading row (icon, title, optional action) + content. bare = no Container. */
export function Section({ id, title, subtitle, icon, action, bare, className = "", children }: Props) {
  const head = (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {icon && <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><Icon name={icon} size={22} /></span>}
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>
      {action && <Button variant="outline" href={action.href} icon={action.icon} className="!py-1.5">{action.label}</Button>}
    </div>
  );
  return (
    <section id={id} className={`py-10 ${className}`}>
      {bare ? <div>{head}{children}</div> : <Container>{head}{children}</Container>}
    </section>
  );
}
