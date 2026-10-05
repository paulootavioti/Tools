# Próximos passos do lançamento

## Já verificado localmente

- Build da Tools concluído com TypeScript e Vite.
- Tools e Portfolio revisados no Chrome nas larguras de 320, 390 e 1440 px, sem imagens quebradas, transbordamento horizontal ou erros de JavaScript encontrados.
- Contatos oficiais: suporte.toolink@gmail.com e +55 (61) 99176-8044.
- Página de diagnóstico oferece contato direto, independentemente da configuração de endpoint, conforme decisão de lançamento.

## 1. Captura do aluno — confirmação recebida

`public/img/sysbelt-aluno.webp` não é referenciada nas seções atuais, mas o Vite copia o conteúdo de `public/` para `dist/`. Portanto, não aparecer na interface não impede seu acesso por URL após o deploy.

Em 05/10/2026, Paulo confirmou: “Todos os dados são fictícios”. A pendência desta captura está resolvida com base nessa declaração. O arquivo foi preservado. Essa confirmação não se estende a futuras capturas.

## 2. Documentos implementados

Paulo confirmou a identificação como Paulo Otávio — Analista de Sistemas e Negócios — e atendimento por WhatsApp e e-mail. Os textos foram implementados em `src/content/formulario-e-rodape.ts` e `src/pages/Legal.tsx`. Consulte o [registro da revisão](minuta-legal.md) para a conferência operacional na hospedagem.

As páginas continuam com `noindex`; esse atributo não restringe acesso público.

## 3. Validar a versão para lançamento

- Executar `npm run build` após as alterações.
- Revisar as duas páginas legais em desktop e celular.
- Conferir o conteúdo de `dist/`, inclusive imagens não utilizadas na interface.
- Se o lançamento for somente por contato direto, manter `VITE_FORM_ENDPOINT` ausente no ambiente de build do Netlify. Não é necessário contratar um serviço de formulário para esse modo.
- Se houver formulário, validar recebimento e erros com uma submissão de teste autorizada e refletir o fornecedor nos textos legais.

## 4. GitHub e Netlify

Depois da revisão e autorização para envio, criar commits separados em Tools e Portfolio, conferir os arquivos incluídos e enviar suas branches para os respectivos remotes. Não incluir arquivos de ambiente nem builds.

Na Tools, usar `npm run build`, saída `dist` e Node 22, conforme `netlify.toml`. O fallback das rotas está em `public/_redirects`.

Após a publicação autorizada, conferir HTTPS, atualização direta das rotas `/diagnostico`, `/politica-de-privacidade` e `/termos-de-uso`, contatos e imagens. A revisão local não confirma o funcionamento do domínio publicado.
