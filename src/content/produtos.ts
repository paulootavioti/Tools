export type ProductStatus = "operacao" | "desenvolvimento" | "independente";

export const produtos = {
  eyebrow: "04 — Ecossistema de produtos",
  title: "Um ecossistema de produtos, uma origem.",
  intro:
    "Produtos desenvolvidos pela Tools a partir de operações reais, cada um com seu público e seu estágio.",
  seal: "powered by tools",
  sysbelt: {
    name: "SysBelt",
    status: "operacao" as ProductStatus,
    statusLabel: "Em operação inicial",
    text: "Plataforma de gestão para academias e equipes de artes marciais. Une a administração ao planejamento pedagógico.",
    image: "/img/sysbelt-painel.webp",
    imageWidth: 1200,
    imageHeight: 572,
    imageAlt: "Painel do SysBelt, captura real do sistema",
    caseLink: { label: "Ver o case", to: "/#case" },
  },
  emDesenvolvimento: [
    {
      name: "Mecanix",
      status: "desenvolvimento" as ProductStatus,
      statusLabel: "Em desenvolvimento",
      text: "Sistema para oficinas mecânicas.",
    },
    {
      name: "Psyché",
      status: "desenvolvimento" as ProductStatus,
      statusLabel: "Em desenvolvimento",
      text: "Sistema para psicólogos, consultórios e clínicas.",
    },
  ],
  hardStudio: {
    name: "Hard Studio",
    status: "independente" as ProductStatus,
    statusLabel: "Marca independente",
    text: "Marca criativa com identidade própria: impressão 3D, souvenirs, decoração, brinquedos, jogos e papelaria.",
    linkLabel: "Conhecer o Hard Studio",
  },
  infra: {
    label: "Infraestrutura",
    text: "Por baixo dos produtos, o Control Plane: contas, planos, assinaturas, licenças e acesso compartilhados.",
  },
};

export const caseSysbelt = {
  eyebrow: "05 — Case em destaque",
  title: "SysBelt: a gestão da academia pensada para artes marciais.",
  statusLabel: "Produto em validação e operação inicial",
  blocks: [
    {
      title: "Contexto das academias",
      text: "Academias de artes marciais lidam com o que sistemas genéricos não resolvem: currículo técnico, presença, graduação por faixa e grau, e a relação com as famílias.",
    },
    {
      title: "O problema",
      text: "Muitas ainda dependem de planilhas, cadernos e controles paralelos. Mensalidade, presença e evolução dos alunos ficam em lugares diferentes, e o método do professor fica na cabeça dele.",
    },
    {
      title: "A solução",
      text: "O SysBelt reúne gestão administrativa e planejamento pedagógico em uma plataforma: do cadastro do aluno à graduação, passando por presença, financeiro e acompanhamento pelas famílias.",
    },
  ],
  modules: [
    { title: "Gestão pedagógica", text: "Currículo por faixa e plano de aula organizados." },
    { title: "Presença", text: "Chamada ligada ao plano da aula." },
    { title: "Graduação", text: "Evolução por presença, com grau e troca de faixa." },
    { title: "Financeiro", text: "Mensalidades e cobrança por Pix." },
    { title: "Portal da família", text: "Responsáveis acompanham presenças, evolução e comunicados." },
    { title: "Portal do professor", text: "Rotina da aula e registro pedagógico em um lugar só." },
  ],
  figure: {
    src: "/img/sysbelt-planejamento.webp",
    width: 1200,
    height: 605,
    alt: "Tela de planejamento pedagógico do SysBelt, captura real do sistema",
    caption: "Planejamento pedagógico no SysBelt. Captura real do sistema.",
  },
  siteLinkLabel: "Visitar o site do SysBelt",
};

export const sobre = {
  eyebrow: "06 — Sobre Paulo",
  title: "Tecnologia com repertório de vida real.",
  paragraphs: [
    "Sou Paulo Otávio, Analista de Sistemas e Negócios, Desenvolvedor Full Stack e fundador da Tools. Minha trajetória passa por comércio automotivo, soluções corporativas, licitações públicas, gestão de clínica odontológica, administração rural, atendimento, liderança, jiu-jítsu e gestão de academias.",
    "É esse repertório que me permite entender uma operação antes de propor um sistema: ouvir, diagnosticar e transformar a necessidade em uma solução que funciona na prática.",
  ],
  roles: [
    "Analista de Sistemas e Negócios",
    "Desenvolvedor Full Stack",
    "Fundador da Tools",
    "Conhece operações reais",
    "Transforma necessidades em soluções",
  ],
  repertoire: [
    "Tecnologia",
    "Desenvolvimento Full Stack",
    "Análise de requisitos",
    "Comércio automotivo",
    "Soluções corporativas",
    "Licitações públicas",
    "Clínica odontológica",
    "Administração rural",
    "Atendimento e liderança",
    "Jiu-jítsu e gestão de academias",
  ],
  /** Foto oficial fornecida por Paulo. */
  photo: { src: "/img/paulo-otavio.png", width: 2048, height: 2048, alt: "Paulo Otávio, Analista de Sistemas e Negócios e fundador da Tools" },
};
