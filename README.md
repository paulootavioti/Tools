# Tools — Soluções Inteligentes

Site institucional. React 19, TypeScript, Vite 6, Tailwind CSS v4.

> **Validação local:** `npm run typecheck` e `npm run build` concluídos em 01/10/2026. Publicação no Netlify ainda não realizada.

## Executar

```bash
npm install
npm run dev        # desenvolvimento
npm run typecheck  # tipos
npm run build      # tsc + vite build, saída em dist/
npm run preview
```

Em hospedagem estática (Netlify), `public/_redirects` já cobre as rotas do SPA.

## Formulário

`src/lib/form.ts` envia JSON por POST para `VITE_FORM_ENDPOINT`. Copie `.env.example` para `.env` e preencha com o endpoint escolhido (API própria ou serviço compatível com POST JSON). Sem endpoint, o envio falha e o usuário vê a mensagem de erro com link ao WhatsApp. Há um campo isca (`site`) contra robôs. Nenhuma credencial vai no código.

## Estrutura

- `src/content/` — todos os textos e dados, separados da apresentação
  - `site.ts` contatos, navegação, hero, CTA final, SEO da home
  - `servicos.ts` problemas, soluções, método
  - `produtos.ts` ecossistema, case SysBelt, sobre
  - `formulario-e-rodape.ts` diagnóstico, páginas legais, rodapé
- `src/components/ui|layout|sections` — componentes reutilizáveis
- `src/pages/` — Home, Diagnostico, Legal, NotFound (SEO por página via `useSeo`)
- `src/lib/` — `seo.ts`, `form.ts`
- `src/styles/index.css` — tokens (`@theme`), tipografia, movimento

## Pendências (confirmar ou fornecer)

- Logo em **SVG** (os PNGs em `public/img` são recortes provisórios)
- Texto final de Política de privacidade e Termos (páginas provisórias, `noindex`)
- Conferir em `site.ts`: Instagram pessoal, LinkedIn e GitHub (marcados "confirmar")
- Informar Instagram da Tools e URL do Hard Studio (`null` = oculto no site)
- Preço do SysBelt fica apenas no site do SysBelt, por decisão

## Decisão em aberto: SEO e prerender

O SEO por página é aplicado no cliente (`useSeo`). Para que buscadores e prévias de redes sociais leiam os metadados sem executar JavaScript, será preciso prerender no build (por exemplo `vite-prerender-plugin` ou SSG). Não foi adicionado para evitar dependência sem necessidade confirmada.

## Publicação futura no Netlify

- Diretório base: raiz do repositório.
- Comando de build: `npm run build`.
- Diretório de publicação: `dist`.
- Configurar `VITE_FORM_ENDPOINT` com endpoint público compatível; nunca incluir segredos em variáveis `VITE_*`.
- O fallback da SPA está em `public/_redirects`.

Dependências, builds, arquivos de ambiente e a cópia antiga local ficam fora do Git.

## Contatos e foto confirmados

- E-mail: suporte.toolink@gmail.com.
- WhatsApp: +55 (61) 99176-8044.
- Foto fornecida por Paulo em `public/img/paulo-otavio.png`, exibida na seção Sobre.
