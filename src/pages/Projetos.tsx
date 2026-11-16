import { produtos } from "../content/produtos";
import { useSeo } from "../lib/seo";
import { Button } from "../components/ui/Button";
import { Section } from "../components/ui/Section";

export default function Projetos() {
  useSeo({ title: "Projetos e produtos | Tools", description: "Conheça os produtos próprios da Tools e seus estágios atuais." });
  const cards = [
    { name: produtos.sysbelt.name, status: produtos.sysbelt.statusLabel, text: produtos.sysbelt.text },
    ...produtos.emDesenvolvimento.map(({ name, statusLabel, text }) => ({ name, status: statusLabel, text })),
    { name: "Control Plane", status: "Infraestrutura interna", text: "Base de integração e gestão do ecossistema Tools. Não é apresentado como produto comercial independente." },
  ];
  return <Section labelledBy="projects-title" innerClassName="flex flex-col gap-8"><p className="eyebrow m-0 text-copper">PROJETOS</p><h1 id="projects-title" className="t-h2-lg m-0 text-petrol">Produtos próprios, com estágio comunicado com clareza.</h1><p className="t-lead m-0 max-w-[800px] text-ink-soft">Não anunciamos disponibilidade comercial antes da validação. Demonstrações e condições são confirmadas em conversa.</p><div className="grid gap-4 md:grid-cols-2">{cards.map((item) => <article key={item.name} className="rounded-card border border-line bg-card p-6"><p className="eyebrow m-0 text-copper">{item.status}</p><h2 className="t-h3 mt-3 mb-0">{item.name}</h2><p className="mt-3 mb-0 leading-7 text-ink-soft">{item.text}</p></article>)}</div><div><Button to="/diagnostico" arrow large>Conversar sobre uma demonstração</Button></div></Section>;
}
