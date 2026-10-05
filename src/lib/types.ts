export type Palette = Record<string, string>; // token name → "#RRGGBB"
export interface Link { label: string; href: string; icon?: string }
export interface Portfolio {
  meta: { title: string; description: string };
  theme: { defaultMode: "light" | "dark" | "system"; light: Palette; dark: Palette };
  brand: { name: string; tagline: string };
  nav: Link[];
  hero: {
    greeting: string; name: string; role: string; description: string; image: string;
    script: string; badge: string; ctaPrimary: Link; ctaSecondary: Link; resume: Link;
    stats: { icon: string; value: string; label: string }[];
  };
  skills: { title: string; subtitle: string; groups: { category: string; items: string[] }[] };
  about: {
    title: string; text: string; bars: { label: string; value: number }[];
    education: string[]; personal: string; cta: Link;
  };
  experience: {
    title: string; cta: Link;
    items: { company: string; logo: string; logoUrl?: string; website?: string; role: string; period: string; points: string[] }[];
  };
  projects: {
    title: string; subtitle: string; cta: Link;
    items: { title: string; tags: string[]; description: string; href: string; image?: string; screenshot?: string }[];
  };
  testimonials: { title: string; items: { name: string; role: string; rating: number; quote: string }[] };
  contact: { title: string; text: string; info: { icon: string; value: string }[]; subjects: string[] };
  footer: { text: string; copyright: string; socials: Link[] };
}
