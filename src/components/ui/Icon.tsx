import { ArrowRight, ArrowUp, Briefcase, Calendar, Code2, Download, FlaskConical, GitBranch, Github, Link2, Linkedin, Mail, MapPin, Palette, Phone, Send, Sparkles, Star, Twitter, Users, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const icons: Record<string, ComponentType<LucideProps>> = {
  arrow: ArrowRight, up: ArrowUp, briefcase: Briefcase, calendar: Calendar, code: Code2,
  download: Download, flask: FlaskConical, git: GitBranch, github: Github, link: Link2, linkedin: Linkedin,
  mail: Mail, palette: Palette, pin: MapPin, phone: Phone, send: Send, sparkles: Sparkles, star: Star, twitter: Twitter, users: Users,
};

/** Look up an icon by the string name used in portfolio.json. */
export function Icon({ name, ...props }: { name?: string } & LucideProps) {
  const Cmp = name ? icons[name] : undefined;
  return Cmp ? <Cmp aria-hidden {...props} /> : null;
}
