import { site, whatsappHref } from "../../content/site";
import { Button } from "../ui/Button";
import { ModularArt } from "../ui/ModularArt";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function CtaFinal() {
  return (
    <Section id="contato" labelledBy="h-contato" tone="petrol" innerClassName="pb-40 md:pb-44 lg:min-h-[460px] lg:py-24">
      <div className="absolute bottom-0 right-5 w-28 md:right-10 md:w-44 lg:right-20 lg:w-56">
        <ModularArt variant="cta" className="w-full" />
      </div>
      <Reveal className="relative flex max-w-[760px] flex-col gap-6 lg:gap-8">
        <h2 id="h-contato" className="t-h2-lg m-0">
          {site.ctaFinal.title}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button
            variant="onDarkOutline"
            arrow
            large
            {...(whatsappHref ? { href: whatsappHref } : { to: site.cta.to })}
          >
            {site.talkCta.label}
          </Button>
          <Button to={site.cta.to} variant="onDark" arrow large>
            {site.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
