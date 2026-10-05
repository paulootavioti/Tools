import { Section } from "../ui/Section";

const perguntas = [
  ["Como começa um projeto?", "Começamos entendendo sua operação e o problema prioritário. Se houver aderência, definimos o diagnóstico ou a solução indicada e apresentamos uma proposta com escopo, prazo e investimento."],
  ["Preciso saber qual sistema contratar?", "Não. Você pode trazer o problema, mesmo sem uma solução definida. Avaliamos o processo atual e as alternativas antes de propor desenvolvimento."],
  ["Quanto custa e quanto tempo leva?", "O valor e o prazo dependem do escopo, das integrações e dos dados disponíveis. Essas condições são combinadas na proposta; o contato inicial não gera contratação automática."],
  ["O SysBelt é um projeto sob medida?", "O SysBelt é um produto para academias de artes marciais. A demonstração apresenta sua rotina de alunos, turmas, presença e evolução pedagógica. Condições de implantação e assinatura são combinadas antes da contratação."],
  ["O atendimento pode ser remoto?", "Paulo atua a partir de Brasília, com atendimento remoto para todo o Brasil. Treinamento, implantação e acompanhamento são definidos conforme a necessidade do projeto."],
];

export function Perguntas() {
  return <Section id="duvidas" labelledBy="h-duvidas">
    <h2 id="h-duvidas" className="t-h2-lg m-0 mb-8 text-petrol">Antes de começarmos</h2>
    <div className="divide-y divide-line">
      {perguntas.map(([titulo, resposta]) => <details key={titulo} className="py-5">
        <summary className="cursor-pointer font-semibold text-lg">{titulo}</summary>
        <p className="mt-4 max-w-3xl leading-7 text-ink-soft">{resposta}</p>
      </details>)}
    </div>
  </Section>;
}
