import { Link } from "react-router-dom";
import { contact } from "../../content/site";
import { produtos } from "../../content/produtos";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { StatusBadge } from "../ui/StatusBadge";

const sealClass = "mono-label text-muted";
const productTitle = "m-0 font-display font-bold";

export function Ecossistema() {
  const { sysbelt, emDesenvolvimento, hardStudio, infra } = produtos;
  return (
    <Section id="produtos" labelledBy="h-produtos" innerClassName="flex flex-col gap-8">
      <Reveal className="max-w-[760px]">
        <SectionHeader eyebrow={produtos.eyebrow} title={produtos.title} titleId="h-produtos" intro={produtos.intro} />
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[7fr_5fr] lg:gap-5">
        <Reveal className="flex">
          <article className="flex w-full flex-col gap-3 rounded-card border-[1.5px] border-petrol bg-card p-5 md:p-7">
            <StatusBadge status={sysbelt.status} label={sysbelt.statusLabel} />
            <h3 className={`${productTitle} text-[32px] leading-9 lg:text-4xl lg:leading-10`}>{sysbelt.name}</h3>
            <p className="m-0 text-[15px] leading-[23px] text-ink-soft lg:text-base lg:leading-[25px]">{sysbelt.text}</p>
            <img
              src={sysbelt.image}
              alt={sysbelt.imageAlt}
              width={sysbelt.imageWidth}
              height={sysbelt.imageHeight}
              loading="lazy"
              decoding="async"
              className="mt-2 h-[150px] w-full rounded-lg border border-line object-cover object-left-top lg:h-[200px]"
            />
            <div className="flex items-center justify-between gap-4">
              <Link
                to={sysbelt.caseLink.to}
                className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-copper hover:text-copper-hover hover:underline underline-offset-4"
              >
                {sysbelt.caseLink.label}
                <span aria-hidden="true">↓</span>
              </Link>
              <span className={sealClass}>{produtos.seal}</span>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-4 lg:grid-rows-2 lg:gap-5">
          {emDesenvolvimento.map((product, index) => (
            <Reveal key={product.name} delay={(index + 1) * 60} className="flex">
              <article className="flex w-full flex-col gap-2.5 rounded-card border border-line bg-card p-5 md:p-7">
                <StatusBadge status={product.status} label={product.statusLabel} />
                <h3 className={`${productTitle} text-[28px] leading-8 lg:text-[30px] lg:leading-[34px]`}>{product.name}</h3>
                <p className="m-0 text-[15px] leading-[23px] text-ink-soft">{product.text}</p>
                <span className={`${sealClass} mt-auto`}>{produtos.seal}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <article className="flex flex-col gap-4 rounded-card border-[1.5px] border-dashed border-muted p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-7 md:py-6">
          <div className="flex max-w-[760px] flex-col gap-2">
            <StatusBadge status={hardStudio.status} label={hardStudio.statusLabel} />
            <h3 className="m-0 text-[22px] font-semibold lg:text-2xl">{hardStudio.name}</h3>
            <p className="m-0 text-[15px] leading-[23px] text-ink-soft">{hardStudio.text}</p>
          </div>
          {contact.hardStudio ? (
            <a
              href={contact.hardStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-petrol hover:underline underline-offset-4"
            >
              {hardStudio.linkLabel}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </article>
      </Reveal>

      <p className="m-0 border-t border-line pt-4 text-sm leading-[21px] text-muted">
        <span className={`${sealClass} mr-3 block sm:inline`}>{infra.label}</span>
        {infra.text}
      </p>
    </Section>
  );
}
