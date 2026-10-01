import { site, whatsappHref } from "../../content/site";
import { sobre } from "../../content/produtos";
import { Button } from "../ui/Button";
import { ModularArt } from "../ui/ModularArt";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { tintAt } from "../ui/tint";

export function Sobre() {
  const { photo } = sobre;
  return (
    <Section id="sobre" labelledBy="h-sobre" innerClassName="grid items-start gap-10 lg:grid-cols-[4fr_7fr] lg:gap-16">
      <Reveal>
        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className="w-full rounded-card object-cover"
          />
        ) : (
          <div className="flex min-h-[320px] flex-col justify-between gap-8 rounded-card bg-sand p-6 lg:min-h-[560px] lg:p-8">
            <ModularArt variant="cta" className="w-24 lg:w-32" />
            <div>
              <p className="m-0 font-display text-2xl font-bold">{site.founder}</p>
              <p className="m-0 mt-1 text-[15px] text-ink-soft">Fundador da Tools</p>
            </div>
          </div>
        )}
      </Reveal>

      <div className="flex flex-col gap-5 lg:gap-[22px]">
        <div className="eyebrow text-copper">{sobre.eyebrow}</div>
        <h2 id="h-sobre" className="t-h2-lg m-0 text-petrol">
          {sobre.title}
        </h2>
        {sobre.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0 text-base leading-[26px] text-ink-soft lg:text-lg lg:leading-[29px]">
            {paragraph}
          </p>
        ))}
        <ul className="m-0 grid list-none gap-2 p-0 text-base font-semibold sm:grid-cols-2 sm:gap-x-6">
          {sobre.roles.map((role) => (
            <li key={role} className="relative pl-[18px]">
              <span aria-hidden="true" className="absolute left-0 top-2 h-2 w-2 rounded-sm bg-copper" />
              {role}
            </li>
          ))}
        </ul>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {sobre.repertoire.map((item, index) => (
            <li key={item} className={`rounded-full px-3.5 py-2 text-sm font-medium ${tintAt(index)}`}>
              {item}
            </li>
          ))}
        </ul>
        <div>
          <Button
            variant="secondary"
            arrow
            {...(whatsappHref ? { href: whatsappHref } : { to: site.cta.to })}
          >
            {site.talkCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
