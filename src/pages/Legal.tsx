import { Section } from "../components/ui/Section";
import { legal } from "../content/formulario-e-rodape";
import { useSeo } from "../lib/seo";
import { contact } from "../content/site";

type Props = { page: "privacidade" | "termos" };

/** Informações do atendimento por WhatsApp e e-mail. */
export default function Legal({ page }: Props) {
  const doc = legal[page];
  useSeo({ title: doc.seoTitle, description: doc.title, noindex: true });
  return (
    <Section labelledBy="h-legal" innerClassName="max-w-[820px] flex flex-col gap-4">
      <h1 id="h-legal" className="t-h2-lg m-0 text-petrol">
        {doc.title}
      </h1>
      <p className="m-0 text-sm text-ink-soft">Atualizado em {legal.updatedAt}.</p>
      {doc.sections.map((section) => (
        <section key={section.title} className="mt-4 flex flex-col gap-3">
          <h2 className="m-0 font-display text-2xl font-semibold text-petrol">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="t-body m-0 break-words text-ink-soft">{paragraph}</p>
          ))}
        </section>
      ))}
      <a href={`mailto:${contact.email}`} className="mt-4 break-all underline underline-offset-2">{contact.email}</a>
    </Section>
  );
}
