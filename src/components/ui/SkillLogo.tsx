"use client";

import { useState } from "react";

export function SkillLogo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="skill-icon-fallback" aria-hidden="true">
        {label === "CSS3" ? "3" : label.slice(0, 1)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="skill-icon h-4 w-4 object-contain"
      onError={() => setFailed(true)}
    />
  );
}
