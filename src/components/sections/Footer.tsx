import type { Portfolio } from "@/lib/types";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";

export function Footer({ brand, data }: { brand: Portfolio["brand"]; data: Portfolio["footer"] }) {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <Container className="grid items-center gap-6 text-center md:grid-cols-3 md:text-left">
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <Icon name="code" size={32} className="text-primary" />
          <div><p className="font-bold">{brand.name}</p><p className="text-xs text-muted">{brand.tagline}</p></div>
        </div>
        <p className="text-sm">{data.text}</p>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {data.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="social-link"
              >
                <Icon name={s.icon} size={16} className="social-icon" />
              </a>
            ))}
            <a href="#home" aria-label="Back to top" className="social-link social-link-top">
              <Icon name="up" size={16} className="social-icon" />
            </a>
          </div>
          <p className="text-xs text-muted">{data.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
