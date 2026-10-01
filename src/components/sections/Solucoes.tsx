import { Link } from "react-router-dom";
import { site } from "../../content/site";
import { solucoes } from "../../content/servicos";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { tintAt } from "../ui/tint";

export function Solucoes() {
  return (
    <Section id="solucoes" labelledBy="h-solucoes" innerClassName="flex flex-col gap-10">
      <Reveal className="max-w-[760px]">
        <SectionHeader eyebrow={solucoes.eyebrow} title={solucoes.title} titleId="h-solucoes" />
      </Reveal>
      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {solucoes.items.map((item, index) => (
          <li key={item.title} className="flex">
            <Reveal delay={(index % 3) * 60} className="flex w-full">
              <article className="group flex w-full flex-col gap-2.5 rounded-card border border-line bg-card p-[18px] transition-[border-color,box-shadow,transform] duration-[240ms] ease-soft hover:-translate-y-0.5 hover:border-petrol-600 hover:shadow-card focus-within:border-petrol-600 md:p-6 lg:min-h-[232px]">
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className={`h-9 w-9 rounded-lg lg:h-10 lg:w-10 ${tintAt(index)}`} />
                  <span aria-hidden="true" className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="t-h3 m-0 mt-1 lg:text-2xl lg:leading-[29px]">{item.title}</h3>
                <p className="m-0 text-[15px] leading-[23px] text-ink-soft">{item.text}</p>
                <Link
                  to={site.cta.to}
                  className="mt-auto inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-copper hover:text-copper-hover hover:underline underline-offset-4"
                >
                  {solucoes.linkLabel}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> — {item.title}</span>
                </Link>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
