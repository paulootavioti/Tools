import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "onDark" | "onDarkOutline";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  /** Mostra a seta ↗ ao final. */
  arrow?: boolean;
  large?: boolean;
  block?: boolean;
  className?: string;
  /** Rota interna. */
  to?: string;
  /** Endereço externo ou âncora simples. */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  busy?: boolean;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-150 disabled:cursor-not-allowed md:text-base";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-white hover:bg-copper-hover active:bg-[#6f3310] disabled:bg-line disabled:text-ink-soft",
  secondary: "border-[1.5px] border-petrol text-petrol hover:bg-petrol hover:text-paper",
  onDark: "bg-copper-light text-ink hover:bg-copper-light-hover",
  onDarkOutline: "border-[1.5px] border-paper text-paper hover:bg-paper hover:text-ink",
};

export function Button({
  children,
  variant = "primary",
  arrow = false,
  large = false,
  block = false,
  className = "",
  to,
  href,
  type = "button",
  disabled,
  busy,
}: ButtonProps) {
  const cls = [base, variants[variant], large ? "md:min-h-14 md:px-8" : "", block ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">↗</span> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} aria-busy={busy ? true : undefined}>
      {content}
    </button>
  );
}
