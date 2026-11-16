export type ExternalLink = { label: string; href: string };

/**
 * Dados de contato. Valores `null` ficam ocultos no site até serem informados.
 * Itens marcados "confirmar" vieram do site pessoal do Paulo e precisam de conferência.
 */
export const contact = {
  /** Lançamento confirmado com atendimento direto; endpoint não ativa o formulário. */
  mode: "direct" as "direct" | "form",
  /** WhatsApp oficial, confirmado por Paulo; somente dígitos com DDI. */
  whatsappNumber: "5561991768044" as string | null,
  email: "suporte.toolink@gmail.com" as string | null,
  instagramTools: null as string | null,
  /** Confirmar. */
  instagramPessoal: "https://www.instagram.com/paulootavioti" as string | null,
  /** Confirmar. */
  linkedin: "https://www.linkedin.com/in/paulootavioti" as string | null,
  /** Confirmar. */
  github: "https://github.com/paulootavioti" as string | null,
  hardStudio: null as string | null,
  sysbelt: "https://sysbeltfp.netlify.app/" as string | null,
};

export const whatsappHref = contact.whatsappNumber
  ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent("Olá, Paulo! Conheci a Tools e gostaria de conversar sobre uma necessidade do meu negócio.")}`
  : null;

export const site = {
  name: "Tools — Soluções Inteligentes",
  shortName: "Tools",
  slogan: "Tecnologia que organiza, conecta e prepara empresas para crescer.",
  founder: "Paulo Otávio",
  founderRole: "Analista de Sistemas e Negócios",
  year: 2026,
  skipLabel: "Pular para o conteúdo",
  nav: [
    { label: "Soluções", to: "/solucoes" },
    { label: "Segmentos", to: "/segmentos" },
    { label: "Projetos", to: "/projetos" },
    { label: "Como trabalhamos", to: "/#metodo" },
  ],
  seo: {
    home: {
      title: "Tools | CRM, automação, IA e sistemas sob medida",
      description:
        "CRM, automações, inteligência artificial e sistemas sob medida para melhorar vendas, atendimento e eficiência operacional.",
    },
    notFound: { title: "Página não encontrada | Tools", description: "A página procurada não existe." },
  },
  cta: { label: "Solicitar diagnóstico", to: "/diagnostico" },
  talkCta: { label: "Conversar com Paulo" },
  hero: {
    eyebrow: "Tools — Soluções Inteligentes",
    title: "Sua empresa mais organizada, conectada e preparada para crescer.",
    text: "Implementamos CRM, automações, inteligência artificial e sistemas sob medida para melhorar vendas, atendimento e eficiência operacional.",
    secondaryCta: { label: "Conhecer nossas soluções", to: "/solucoes" },
    note: "Diagnóstico, implantação, treinamento e evolução contínua — com proximidade e clareza em cada etapa.",
  },
  ctaFinal: {
    title: "Qual processo do seu negócio precisa funcionar melhor?",
  },
};
