import { DiagnosticForm } from "../components/DiagnosticForm";
import { Section } from "../components/ui/Section";
import { diagnostico } from "../content/formulario-e-rodape";
import { useSeo } from "../lib/seo";

export default function Diagnostico() {
  useSeo(diagnostico.seo);
  return (
    <Section labelledBy="h-diagnostico" innerClassName="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
      <div className="flex flex-col gap-4">
        <div className="eyebrow text-copper">{diagnostico.eyebrow}</div>
        <h1 id="h-diagnostico" className="t-h2-lg m-0 text-petrol">
          {diagnostico.title}
        </h1>
        <p className="t-lead m-0 text-ink-soft">{diagnostico.intro}</p>
      </div>
      <DiagnosticForm />
    </Section>
  );
}
