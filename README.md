# Site — Maiara Pereira de Souza (Psicóloga)

Site institucional em Next.js 16 + TypeScript + Tailwind CSS v4. Blog em MDX, sem CMS externo.

## Rodar localmente

Requer Node 18.18+ ou 20+.

```bash
npm install
npm install gray-matter next-mdx-remote   # dependências do blog em MDX
npm run dev
```
Abre em `http://localhost:3000`.

## Páginas do site

| Rota | Conteúdo |
|---|---|
| `/` | Home (hero, atendimentos, sobre, como funciona, FAQ) |
| `/blog` | Lista de artigos + formulário de newsletter |
| `/blog/[slug]` | Artigo individual (arquivos `.mdx` em `content/posts/`) |
| `/indicacoes` | Indicações de leitura |
| `/eventos` | Participações em eventos/congressos (dados reais do Lattes) |
| `/politica-de-privacidade` | Ainda placeholder — ver pendências |

## Onde editar o quê

| O que mudar | Arquivo |
|---|---|
| Nome, CRP, WhatsApp, cidade, domínio | `src/lib/content.ts` → `siteConfig` |
| Áreas de atendimento (cards) | `src/lib/content.ts` → `services` |
| Perguntas do FAQ | `src/lib/content.ts` → `faqItems` |
| Passos do "Como funciona" | `src/lib/content.ts` → `steps` |
| Indicações de leitura | `src/lib/content.ts` → `books` — **hoje são placeholders**, trocar pelos livros reais |
| Eventos/atividades | `src/lib/content.ts` → `events` |
| Artigos do blog | arquivos `.mdx` em `content/posts/` — cada um com frontmatter (`title`, `description`, `date`) no topo |
| Texto da bio / "Sobre mim" | `src/components/sections/About.tsx` |
| Cores, tipografia, raios (design tokens) | `src/app/globals.css` → bloco `@theme` |
| Foto de perfil | `public/images/maiara-foto.jpg` (troque o arquivo, mesmo nome) |
| Política de Privacidade | `src/app/politica-de-privacidade/page.tsx` — **ainda com texto placeholder, precisa de revisão jurídica antes de publicar** |

Adicionar um artigo novo no blog = criar um arquivo `.mdx` novo em `content/posts/`. Não precisa
mexer em nenhum componente — a lista em `/blog` e as páginas individuais são geradas
automaticamente a partir dos arquivos ali.

## Newsletter — ainda não conectada

O formulário em `/blog` e a rota `src/app/api/newsletter/route.ts` estão funcionando (validam o
e-mail, mostram sucesso/erro), mas **não cadastram ninguém em lugar nenhum ainda** — o endpoint
responde erro 501 de propósito até ser conectado a um provedor real. Escolha um (Buttondown,
Mailchimp, Resend Audiences etc.), pegue a API key, e substitua o `TODO` comentado dentro de
`route.ts`. Depois disso é só guardar a key numa env var na Vercel.

## Conteúdo do blog — cuidado ético

Os textos em `content/posts/` são conteúdo educativo genérico (o que é TCC, sinais de ansiedade,
como funciona a orientação a pais/escola) — de propósito, não descrevem nenhum caso real nem
usam depoimento de paciente. A Resolução CFP nº 3/2007 (arts. 53-58) e a Nota Técnica CFP
01/2022 vedam publicidade com depoimento ou relato de caso que identifique a pessoa atendida,
mesmo anonimizado. Ao escrever novos artigos, mantenha esse mesmo nível — teórico/educativo, sem
"na sessão com [paciente]...".

## Pendências conhecidas antes do lançamento

- [ ] Duração padrão da sessão no FAQ (`content.ts`) ainda é placeholder
- [ ] Confirmar ano de formatura — o Lattes indica 2018–2022, o currículo tradicional indica
      conclusão em 12/2023
- [ ] Trocar `siteConfig.siteUrl` pelo domínio `.com.br` real assim que estiver ativo
- [ ] Revisar o texto da Política de Privacidade com apoio jurídico (LGPD)
- [ ] Confirmar se o telefone fixo deve aparecer no site (hoje só WhatsApp é exibido)
- [ ] Preencher `books` em `content.ts` com as indicações de leitura reais dela
- [ ] Conectar a newsletter a um provedor real (ver seção acima)

## Deploy

1. Suba o repositório para o GitHub.
2. Importe o repo em [vercel.com/new](https://vercel.com/new) — cada push na `main` gera um
   deploy novo automaticamente.
3. Em **Project → Settings → Domains**, adicione o domínio `.com.br` e aponte o DNS pelo
   Registro.br conforme as instruções da Vercel.
4. Depois de confirmado, atualize `siteConfig.siteUrl` em `src/lib/content.ts` para o domínio
   final — esse valor alimenta o SEO (`metadataBase`, `robots.ts`, `sitemap.ts`) e os dados
   estruturados (`src/lib/structuredData.ts`).

## SEO e metadados

Gerados automaticamente pelas convenções de arquivo do Next.js — não é necessário configurar
nada manualmente além do `siteConfig.siteUrl`:

- `src/app/robots.ts` → `/robots.txt`
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/opengraph-image.tsx` → imagem de prévia ao compartilhar o link
- `src/app/icon.tsx` / `apple-icon.tsx` → favicon
- `src/app/manifest.ts` → manifest para "adicionar à tela inicial" no mobile
- `src/lib/structuredData.ts` → dados estruturados (schema.org `Psychologist`) para resultados
  ricos no Google

`sitemap.ts` hoje lista só `/` e `/politica-de-privacidade` — se quiser as páginas de blog/
indicações/eventos indexadas também (recomendado), adicione as URLs lá.
