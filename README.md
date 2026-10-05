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

## Atendimento no lançamento

Paulo confirmou em 05/10/2026 o lançamento por WhatsApp e e-mail. `contact.mode` está definido como `direct` em `src/content/site.ts`: o formulário permanece desativado mesmo com `VITE_FORM_ENDPOINT` configurado. A página de diagnóstico apresenta os canais oficiais e o link de privacidade.

O código do formulário foi preservado para uma evolução futura. Sua ativação exige alterar explicitamente o modo para `form`, configurar um endpoint público compatível com POST JSON, revisar a política de privacidade e validar o recebimento. Não inserir segredos em variáveis `VITE_*`.

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
- Conferir no lançamento as práticas do provedor de hospedagem e a correspondência com o aviso de privacidade; textos para atendimento direto implementados, mantidos com `noindex`.
- Conferir em `site.ts`: Instagram pessoal, LinkedIn e GitHub (marcados "confirmar")
- Informar Instagram da Tools e URL do Hard Studio (`null` = oculto no site)
- Preço do SysBelt fica apenas no site do SysBelt, por decisão

## Decisão em aberto: SEO e prerender

O SEO por página é aplicado no cliente (`useSeo`). Para que buscadores e prévias de redes sociais leiam os metadados sem executar JavaScript, será preciso prerender no build (por exemplo `vite-prerender-plugin` ou SSG). Não foi adicionado para evitar dependência sem necessidade confirmada.

## Publicação futura no Netlify

- Diretório base: raiz do repositório.
- Comando de build: `npm run build`.
- Diretório de publicação: `dist`.
- Lançar com atendimento direto; não é necessário configurar `VITE_FORM_ENDPOINT`.
- O fallback da SPA está em `public/_redirects`.

Dependências, builds, arquivos de ambiente e a cópia antiga local ficam fora do Git.

## Contatos e foto confirmados

- E-mail: suporte.toolink@gmail.com.
- WhatsApp: +55 (61) 99176-8044.
- Foto fornecida por Paulo em `public/img/paulo-otavio.png`, exibida na seção Sobre.

## Revisão comercial antes de publicar

Roteiro de execução em [docs/lancamento.md](docs/lancamento.md) e minuta para revisão em [docs/minuta-legal.md](docs/minuta-legal.md). Os documentos ficam fora da pasta pública.

- Textos de privacidade e termos atualizados para Paulo Otávio e atendimento direto. Revisar novamente se o tratamento de dados mudar.
- Validar o endpoint com uma submissão de teste autorizada antes de configurar `VITE_FORM_ENDPOINT`.
- Captura `public/img/sysbelt-aluno.webp`: Paulo confirmou em 05/10/2026 que todos os dados são fictícios. Ela não é usada nas seções atuais, mas é incluída no build por estar em `public/`.
- Revisar a página em celular e desktop. O build não substitui a revisão visual.
- Netlify: configuração de build em `netlify.toml`; publicação depende de ação autorizada.
