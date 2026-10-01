import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  /** Liga o título à seção por aria-labelledby. */
  titleId: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, titleId, intro, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className={`eyebrow ${dark ? "text-copper-light" : "text-copper"}`}>{eyebrow}</div>
      <h2 id={titleId} className="t-h2">
        {title}
      </h2>
      {intro ? <p className={`t-body ${dark ? "text-line" : "text-ink-soft"}`}>{intro}</p> : null}
    </div>
  );
}
