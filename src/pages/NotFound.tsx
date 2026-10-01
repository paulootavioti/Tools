import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";
import { site } from "../content/site";
import { useSeo } from "../lib/seo";

export default function NotFound() {
  useSeo({ ...site.seo.notFound, noindex: true });
  return (
    <Section labelledBy="h-404" innerClassName="flex flex-col items-start gap-5">
      <h1 id="h-404" className="t-h2-lg m-0 text-petrol">
        Página não encontrada
      </h1>
      <p className="t-body m-0 text-ink-soft">O endereço pode ter mudado ou não existe.</p>
      <Button to="/" arrow>
        Voltar ao início
      </Button>
    </Section>
  );
}
