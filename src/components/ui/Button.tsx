import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "outline" | "ghost";
const styles: Record<Variant, string> = {
  primary: "btn-3d btn-primary",
  outline: "btn-3d btn-outline",
  ghost: "btn-3d btn-ghost",
};
type Props = { variant?: Variant; href?: string; icon?: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", href, icon, className = "", children, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${styles[variant]} ${className}`;
  const body = <>{children}<Icon name={icon} size={16} /></>;
  return href ? <Link href={href} className={cls}>{body}</Link> : <button className={cls} {...rest}>{body}</button>;
}
