import { problemas } from "../../content/servicos";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { tintAt } from "../ui/tint";

export function Problemas() {
  return (
    <Section labelledBy="h-problemas" tone="sand" innerClassName="grid items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
      <Reveal>
        <SectionHeader eyebrow={problemas.eyebrow} title={problemas.title} titleId="h-problemas" intro={problemas.intro} />
      </Reveal>
      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:gap-4">
        {problemas.items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={(index % 2) * 60} className="h-full">
              <div className="flex h-full min-h-[104px] flex-col gap-1.5 rounded-card border border-line bg-paper px-[18px] py-4">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className={`h-5 w-5 flex-none rounded-[5px] ${tintAt(index)}`} />
                  <h3 className="m-0 font-display text-[18px] font-semibold leading-6 lg:text-[19px]">{item.title}</h3>
                </div>
                <p className="m-0 text-sm leading-[21px] text-ink-soft">{item.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
