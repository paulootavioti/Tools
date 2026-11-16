# Transformação comercial — Tools

## Auditoria e decisão de implementação

O repositório é o site institucional Tools (React 19, Vite 6 e Tailwind 4), com deploy configurado para Netlify. A base já oferecia boa identidade visual, navegação responsiva, páginas legais, acessibilidade básica e atendimento direto por WhatsApp/e-mail. Faltavam páginas comerciais por serviço e segmento, uma apresentação explícita do estágio dos produtos, sitemap e campos de qualificação para a futura captação.

Foram preservados os componentes e a identidade existentes. Não houve alteração de deploy, credenciais, integrações externas ou envio de mensagens.

## Arquitetura entregue

- `/`: proposta de valor e seções institucionais existentes, atualizadas com a mensagem comercial.
- `/solucoes` e páginas de CRM, automação/IA, consultoria e desenvolvimento.
- `/segmentos` e páginas para clínicas, oficinas, academias e serviços B2B.
- `/projetos`: produtos com estágio comunicado sem prometer disponibilidade.
- `/diagnostico`: landing de conversão; o formulário permanece em atendimento direto até que exista endpoint aprovado.

## Conversão e CRM

O diagnóstico é a CTA principal. O formulário já possui honeypot, validação de nome/e-mail/consentimento e agora coleta segmento, tamanho aproximado da operação e preferência de contato. O envio está deliberadamente desativado (`contact.mode: "direct"`): não há endpoint configurado nem autorização para transmitir dados.

Para ativação, recomenda-se usar HubSpot ou Pipedrive via endpoint de servidor/automação, nunca por token exposto no cliente. Avaliar na decisão: custo por usuário, adoção da equipe, integrações, API, automações, exportação de dados e dependência do fornecedor. O funil sugerido é: recebido → qualificado → contato → diagnóstico agendado → diagnóstico concluído → proposta → negociação → fechado → implantação → acompanhamento.

## Backlog

### P0 concluído

- Posicionamento, CTAs e rotas comerciais.
- Conteúdo por serviço e segmento, sem cases ou resultados inventados.
- Página de projetos com estágios explícitos.
- Sitemap, metadados por rota e campos de qualificação preparados.

### P1

- Escolher CRM e criar endpoint com rate limit, CAPTCHA/Turnstile e registro de consentimento.
- Configurar eventos de conversão com ferramenta de analytics aprovada.
- Produzir páginas educativas e demonstrações interativas simples de clínica e oficina com dados fictícios.
- Revisar textos legais quando o fluxo de dados for ativado.

### P2

- Prerender/SSG para metadados já presentes no HTML de cada rota.
- Biblioteca de conteúdos e páginas de campanha.
- Automação de nutrição e painel de indicadores comerciais.

## Estimativa indicativa

- P1 de captação/CRM: 3–5 dias úteis após definir ferramenta e acesso.
- Demonstrações e conteúdo inicial: 4–7 dias úteis.
- Prerender e mensuração: 1–3 dias úteis.

## Validação realizada

`npm run build` concluído em 16 de novembro de 2026. O build inclui verificação de TypeScript e geração de produção. Permanecem pendentes testes de integração do formulário, analytics e revisão visual em navegadores/dispositivos antes de publicação.
