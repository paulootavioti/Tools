import { Link, useParams } from "react-router-dom";
import { services, segments } from "../content/comercial";
import { site } from "../content/site";
import { useSeo } from "../lib/seo";
import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";

export default function Commercial({ kind }: { kind: "service" | "segments" }) {
  const { slug } = useParams();
  const service = kind === "service" ? services[slug ?? ""] : undefined;
  const segment = kind === "segments" ? segments.find((item) => item.slug === slug) : undefined;
  const title = service?.title ?? segment?.title ?? (kind === "service" ? "Soluções para sua operação" : "Soluções por segmento");
  const description = service?.intro ?? segment?.solution ?? "Conheça como a Tools organiza processos e tecnologia.";
  useSeo({ title: `${title} | Tools`, description });
  if (!slug) return <Overview kind={kind} />;
  if (!service && !segment) return <Overview kind={kind} />;
  const entries = service?.items ?? [{ title: "Problema comum", text: segment!.pain }, { title: "Fluxo possível", text: segment!.flow }, { title: "Como ajudamos", text: segment!.solution }];
  return <Section labelledBy="commercial-title" innerClassName="flex max-w-[1000px] flex-col gap-8">
    <p className="eyebrow m-0 text-copper">{service?.eyebrow ?? "SEGMENTOS"}</p><h1 id="commercial-title" className="t-h2-lg m-0 text-petrol">{title}</h1><p className="t-lead m-0 text-ink-soft">{description}</p>
    <div className="grid gap-4 md:grid-cols-2">{entries.map((item) => <article key={item.title} className="rounded-card border border-line bg-card p-6"><h2 className="t-h3 m-0">{item.title}</h2><p className="mt-3 mb-0 leading-7 text-ink-soft">{item.text}</p></article>)}</div>
    {service?.note ? <p className="m-0 border-l-4 border-copper pl-4 leading-7 text-ink-soft">{service.note}</p> : null}
    <div><Button to={site.cta.to} arrow large>Solicitar diagnóstico</Button></div>
  </Section>;
}

function Overview({ kind }: { kind: "service" | "segments" }) {
  const isService = kind === "service"; const items = isService ? Object.entries(services).map(([slug, item]) => ({ slug, title: item.eyebrow, text: item.intro })) : segments.map((item) => ({ slug: item.slug, title: item.title, text: item.solution }));
  const title = isService ? "Soluções que organizam a operação e sustentam o crescimento." : "Tecnologia aplicada à realidade do seu segmento.";
  return <Section labelledBy="overview-title" innerClassName="flex flex-col gap-8"><p className="eyebrow m-0 text-copper">{isService ? "SOLUÇÕES" : "SEGMENTOS"}</p><h1 id="overview-title" className="t-h2-lg m-0 text-petrol">{title}</h1><div className="grid gap-4 md:grid-cols-2">{items.map((item) => <Link key={item.slug} to={`/${isService ? "solucoes" : "segmentos"}/${item.slug}`} className="rounded-card border border-line bg-card p-6 transition hover:border-petrol"><h2 className="t-h3 m-0">{item.title}</h2><p className="mt-3 mb-0 leading-7 text-ink-soft">{item.text}</p><span className="mt-4 inline-block font-semibold text-copper">Conhecer solução →</span></Link>)}</div></Section>;
}
