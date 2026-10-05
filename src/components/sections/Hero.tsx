import type { Portfolio } from "@/lib/types";
import profileImage from "@/images/pankaj.png";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function Hero({ data: h }: { data: Portfolio["hero"] }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_80%_40%,rgb(var(--primary)/0.22),transparent_60%)] py-12 sm:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="hero-wordmark">
            <span className="hero-greeting">{h.greeting}</span>
            <span className="hero-name" aria-label={h.name}>{h.name}</span>
          </div>
          <p className="mt-3 text-lg font-semibold sm:text-xl">{h.role}</p>
          <div className="relative mx-auto mt-8 w-full max-w-sm lg:hidden">
            <div className="mx-auto grid aspect-square w-3/5 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_24px_rgb(var(--primary)/0.55),0_0_70px_rgb(var(--accent)/0.3)] ring-2 ring-primary/40 sm:w-2/3">
              <img src={h.image || profileImage.src} alt={h.name} className="h-full w-full object-cover" />
            </div>
            <p className="mt-3 text-center font-script text-2xl italic leading-tight text-primary sm:text-3xl">{h.script}</p>
          </div>
          <p className="mt-4 max-w-xl text-muted">{h.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={h.ctaPrimary.href} icon={h.ctaPrimary.icon}>{h.ctaPrimary.label}</Button>
            <Button variant="outline" href={h.ctaSecondary.href} icon={h.ctaSecondary.icon}>{h.ctaSecondary.label}</Button>
            <Button variant="ghost" href={h.resume.href} icon={h.resume.icon}>{h.resume.label}</Button>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {h.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <Icon name={s.icon} size={30} className="text-primary" />
                <div><dd className="text-xl font-bold">{s.value}</dd><dt className="text-sm text-muted">{s.label}</dt></div>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="mx-auto grid aspect-square w-3/5 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_24px_rgb(var(--primary)/0.55),0_0_70px_rgb(var(--accent)/0.3)] ring-2 ring-primary/40 sm:w-2/3">
            <img src={h.image || profileImage.src} alt={h.name} className="h-full w-full object-cover" />
          </div>
          <p className="mt-3 text-center font-script text-2xl italic leading-tight text-primary sm:text-3xl">{h.script}</p>
        </div>
      </Container>
    </section>
  );
}
