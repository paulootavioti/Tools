import { Section } from "../components/ui/Section";
import { legal } from "../content/formulario-e-rodape";
import { useSeo } from "../lib/seo";

type Props = { page: "privacidade" | "termos" };

/** Página provisória: sem texto jurídico final, fica fora dos buscadores (noindex). */
export default function Legal({ page }: Props) {
  const doc = legal[page];
  useSeo({ title: doc.seoTitle, description: doc.title, noindex: true });
  return (
    <Section labelledBy="h-legal" innerClassName="max-w-[820px] flex flex-col gap-4">
      <h1 id="h-legal" className="t-h2-lg m-0 text-petrol">
        {doc.title}
      </h1>
      <p className="t-body m-0 text-ink-soft">{legal.pendingText}</p>
    </Section>
  );
}
