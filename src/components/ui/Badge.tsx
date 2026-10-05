export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted">{children}</span>;
}
