import { metodo } from "../../content/servicos";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function Metodo() {
  const last = metodo.steps.length - 1;
  return (
    <Section id="metodo" labelledBy="h-metodo" tone="ink" innerClassName="flex flex-col gap-10 lg:gap-12">
      <Reveal className="max-w-[760px]">
        <SectionHeader eyebrow={metodo.eyebrow} title={metodo.title} titleId="h-metodo" intro={metodo.intro} tone="dark" />
      </Reveal>
      <ol className="m-0 grid list-none gap-0 p-0 lg:grid-cols-6 lg:gap-5">
        {metodo.steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 pb-6 lg:flex-col lg:gap-3 lg:pb-0">
            {index < last ? (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-12 w-0.5 bg-paper/25 lg:-right-5 lg:bottom-auto lg:left-[44px] lg:top-[21px] lg:h-0.5 lg:w-auto"
              />
            ) : null}
            <Reveal delay={index * 60} className="flex gap-4 lg:flex-col lg:gap-3">
              <span
                className={`flex h-11 w-11 flex-none items-center justify-center rounded-[10px] font-mono text-sm text-ink ${
                  index === last ? "bg-copper-light" : "bg-paper"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 lg:gap-3">
                <h3 className="t-h3 m-0">{step.title}</h3>
                <p className="m-0 text-[15px] leading-[23px] text-line lg:text-sm lg:leading-[22px]">{step.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
