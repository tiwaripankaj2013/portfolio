/** Small square/round tile with initials — used for logos and avatars when no image is provided. */
export function Monogram({ text, round = false, className = "" }: { text: string; round?: boolean; className?: string }) {
  const initials = text.length <= 4 ? text : text.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <span className={`inline-flex shrink-0 items-center justify-center bg-primary/15 text-xs font-bold text-primary ${round ? "rounded-full" : "rounded-lg"} ${className}`}>
      {initials}
    </span>
  );
}
