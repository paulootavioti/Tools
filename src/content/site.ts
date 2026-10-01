export type ExternalLink = { label: string; href: string };

/**
 * Dados de contato. Valores `null` ficam ocultos no site até serem informados.
 * Itens marcados "confirmar" vieram do site pessoal do Paulo e precisam de conferência.
 */
export const contact = {
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
  ? `https://wa.me/${contact.whatsappNumber}`
  : null;

export const site = {
  name: "Tools — Soluções Inteligentes",
  shortName: "Tools",
  slogan: "Tecnologia para operar. Estratégia para crescer.",
  founder: "Paulo Otávio",
  founderRole: "Analista de Sistemas e Negócios",
  year: 2026,
  skipLabel: "Pular para o conteúdo",
  nav: [
    { label: "Soluções", to: "/#solucoes" },
    { label: "Produtos", to: "/#produtos" },
    { label: "Método", to: "/#metodo" },
    { label: "Sobre", to: "/#sobre" },
    { label: "Contato", to: "/#contato" },
  ],
  seo: {
    home: {
      title: "Tools — Soluções Inteligentes | Tecnologia para operar. Estratégia para crescer.",
      description:
        "Diagnóstico e soluções digitais sob medida para pequenos negócios, a partir de operações reais. Criada por Paulo Otávio.",
    },
    notFound: { title: "Página não encontrada | Tools", description: "A página procurada não existe." },
  },
  cta: { label: "Solicitar diagnóstico", to: "/diagnostico" },
  talkCta: { label: "Conversar com Paulo" },
  hero: {
    eyebrow: "Tools — Soluções Inteligentes",
    title: "Tecnologia para operar. Estratégia para crescer.",
    text: "Compreendemos sua operação, identificamos o que impede o crescimento e transformamos esse diagnóstico em soluções digitais que funcionam na prática.",
    secondaryCta: { label: "Conhecer soluções", to: "/#solucoes" },
    note: "Criada por Paulo Otávio, Analista de Sistemas e Negócios, a partir de operações reais.",
  },
  ctaFinal: {
    title: "Qual processo do seu negócio precisa funcionar melhor?",
  },
};
