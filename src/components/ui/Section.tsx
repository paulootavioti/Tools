import type { ReactNode } from "react";

type Tone = "paper" | "sand" | "ink" | "petrol";

const tones: Record<Tone, string> = {
  paper: "bg-paper",
  sand: "bg-sand",
  ink: "on-dark bg-ink text-paper",
  petrol: "on-dark bg-petrol text-paper",
};

type Props = {
  /** id do título da seção (aria-labelledby). */
  labelledBy: string;
  /** id da âncora, quando a seção é destino de link. */
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function Section({ labelledBy, id, tone = "paper", className = "", innerClassName = "", children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative overflow-hidden ${tones[tone]} ${className}`}>
      <div className={`mx-auto w-full max-w-[1280px] px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
