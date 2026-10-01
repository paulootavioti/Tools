import { site } from "../../content/site";
import { Button } from "../ui/Button";
import { ModularArt } from "../ui/ModularArt";
import { Section } from "../ui/Section";

export function Hero() {
  const { hero } = site;
  return (
    <Section labelledBy="h-hero" innerClassName="grid items-center gap-12 lg:min-h-[640px] lg:grid-cols-[7fr_5fr] lg:gap-14">
      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="eyebrow text-copper">{hero.eyebrow}</div>
        <h1 id="h-hero" className="t-display m-0 text-petrol">
          {hero.title}
        </h1>
        <p className="t-lead m-0 max-w-[600px] text-ink-soft">{hero.text}</p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4 lg:pt-2">
          <Button to={site.cta.to} arrow large>
            {site.cta.label}
          </Button>
          <Button to={hero.secondaryCta.to} variant="secondary" large>
            {hero.secondaryCta.label}
          </Button>
        </div>
        <p className="m-0 max-w-[520px] border-t border-line pt-3 text-sm leading-[21px] text-muted">{hero.note}</p>
      </div>
      <div className="w-[216px] md:w-[320px] lg:w-full lg:max-w-[432px] lg:justify-self-center">
        <ModularArt variant="hero" className="w-full" />
      </div>
    </Section>
  );
}
