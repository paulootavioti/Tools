import { contact } from "../../content/site";
import { caseSysbelt } from "../../content/produtos";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { tintAt } from "../ui/tint";

export function Case() {
  const { figure } = caseSysbelt;
  return (
    <Section id="case" labelledBy="h-case" tone="sand" innerClassName="flex flex-col gap-8 lg:gap-10">
      <Reveal className="flex max-w-[860px] flex-col gap-4">
        <div className="eyebrow text-copper">{caseSysbelt.eyebrow}</div>
        <h2 id="h-case" className="t-h2">
          {caseSysbelt.title}
        </h2>
        <span className="mono-label inline-flex self-start rounded-full bg-live-bg px-2.5 py-1.5 text-live-text">
          {caseSysbelt.statusLabel}
        </span>
      </Reveal>

      <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr] lg:gap-14">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          {caseSysbelt.blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 60}>
              <div className="flex flex-col gap-1.5 border-t-2 border-ink pt-3.5">
                <h3 className="m-0 font-display text-xl font-semibold lg:text-[22px]">{block.title}</h3>
                <p className="m-0 text-[15px] leading-6 text-ink-soft lg:text-base lg:leading-[25px]">{block.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <figure className="order-1 m-0 flex flex-col gap-2.5 lg:order-2">
          <img
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            loading="lazy"
            decoding="async"
            className="w-full rounded-[10px] border border-line-strong bg-white"
          />
          <figcaption className="text-[13px] leading-[19px] text-muted">{figure.caption}</figcaption>
        </figure>
      </div>

      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {caseSysbelt.modules.map((module, index) => (
          <li key={module.title}>
            <Reveal delay={(index % 3) * 60} className="h-full">
              <div className="flex h-full min-h-[84px] items-start gap-3.5 rounded-card border border-line bg-paper px-4 py-3.5 lg:min-h-[100px] lg:px-[18px] lg:py-4">
                <span aria-hidden="true" className={`h-8 w-8 flex-none rounded-md ${tintAt(index, 2)}`} />
                <div>
                  <h3 className="m-0 font-display text-lg font-semibold leading-[23px]">{module.title}</h3>
                  <p className="m-0 mt-0.5 text-sm leading-[21px] text-ink-soft">{module.text}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {contact.sysbelt ? (
        <a
          href={contact.sysbelt}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1 self-start text-[15px] font-semibold text-copper hover:text-copper-hover hover:underline underline-offset-4"
        >
          {caseSysbelt.siteLinkLabel}
          <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </Section>
  );
}
