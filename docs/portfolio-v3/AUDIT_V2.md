# Portfolio V3 — Auditoria do V2

Data da auditoria: 2026-08-30

Baseline de código: `3fda48c4ed93`

Site observado: <https://jraamos.github.io/Portifolio-v2/>

## Escopo e método

Esta auditoria combina quatro fontes de evidência:

1. inspeção visual do site publicado em `1440 × 900` e `390 × 844`;
2. inspeção do DOM renderizado, hierarquia de headings, links, imagens e dimensões da página;
3. leitura do `HEAD` publicado, separada das alterações de V3 ainda não publicadas;
4. comparação com sites e repositórios oficiais, usados como referência de qualidade, não como material para reprodução.

Não foi executado Lighthouse nesta fase. Portanto, qualquer observação de performance abaixo é um risco técnico comprovável pelo código ou pelos assets, não uma pontuação de laboratório.

## Resumo executivo

O V2 é uma boa base de conteúdo e já corrige problemas importantes de um portfólio iniciante: o idioma principal é inglês, os projetos são reais, as descrições evitam métricas inventadas, a página é semanticamente legível e não apresenta overflow horizontal no mobile testado.

O problema é de posicionamento e experiência. A interface ainda se comporta como um currículo técnico em tema dark: hero estático, navegação em pill de vidro, badges, chips, cards e modais. Ela afirma “end-to-end engineering”, mas não faz o visitante perceber o fluxo entre Web, Mobile, Backend, Data, AI e Cloud. Também coloca produtos independentes antes do trabalho profissional e reduz Magventure, Meu Auto/CRM, Anajustra e demais entregas da X-Apps a um parágrafo genérico.

Para chegar à V3, não basta polir o V2. A página precisa trocar a metáfora de “coleção de cards” por uma metáfora de “sistema em execução”, com trabalho profissional em primeiro plano, cases endereçáveis por URL e movimento orientado à compreensão.

## O que o V2 já faz bem e deve ser preservado

- **Inglês como idioma padrão.** O documento publicado usa `lang="en-US"` e a proposta de valor é adequada a oportunidades internacionais.
- **Posicionamento claro.** “Full Stack Software Engineer” e a descrição end-to-end são compreensíveis em poucos segundos.
- **Evidência real.** FebraioTech, Manual dos Achados, Crypto AI, BuildBalance e Converse com Amor têm descrições técnicas específicas e imagens reais.
- **Separação entre fonte pública e privada.** O conteúdo evita prometer acesso a código privado e não expõe detalhes de clientes.
- **Sem overflow no viewport mobile observado.** Em `390 × 844`, `scrollWidth` e `innerWidth` foram ambos `390px`.
- **Base semântica razoável.** Há um único `h1`, seções rotuladas, headings coerentes, texto alternativo nas imagens e links externos identificáveis.
- **Fallback global para reduced motion.** O CSS reduz animações, transições e smooth scroll quando a preferência do sistema está ativa.
- **Metadados sociais existentes.** Há título, descrição, canonical, Open Graph, Twitter card e um `Person` em JSON-LD.
- **Assets com dimensão suficiente.** As imagens de projeto têm cerca de `1265–1280 × 712–720`, adequadas para recortes responsivos se forem convertidas para formatos modernos.
- **GitHub Pages já resolvido.** Assets usam `BASE_URL`, o que é importante para o subdiretório `/Portifolio-v2/`.

## Problemas prioritários

### P0 — O trabalho profissional não aparece como produto

A seção de experiência cita X-Apps, mas não permite entender o que Jonathan efetivamente construiu. O visitante não vê Magventure, Meu Auto App/CRM, Anajustra ou outros sistemas relevantes como trabalhos profissionais distintos.

Consequências:

- um recrutador vê anos e stack, mas não vê escopo, domínio, arquitetura ou maturidade de entrega;
- o portfólio supervaloriza projetos independentes e subvaloriza trabalho de produção;
- a frase “real products” fica associada principalmente a side projects.

Correção V3:

- criar **Professional Work** antes de **Independent Products**;
- cada trabalho profissional deve ter domínio, contexto sanitizado, contribuição verificada, arquitetura, integrações, qualidade e limite de confidencialidade;
- preservar a experiência cronológica em uma seção curta, sem usá-la como substituto dos cases.

### P0 — A promessa end-to-end é texto, não experiência

O hero tem uma imagem de fundo atmosférica, nome grande, cargo e CTA. O único movimento de entrada é um `translateY + opacity`. Não há relação visual entre Web, Backend, Mobile, AI, Cloud e Data.

Correção V3:

- transformar o primeiro viewport em um sistema visual único;
- mostrar um sinal atravessando as camadas de produto;
- fazer a mesma linguagem continuar no storytelling de scroll, no mapa de arquitetura e nas transições para cases.

### P0 — Cases em modal não são páginas

Os botões “Read case study” abrem um modal sem URL própria. O modal traz problema, papel, arquitetura, decisões, qualidade e deployment, mas não pode ser:

- compartilhado diretamente;
- indexado com metadados específicos;
- reaberto ao recarregar a página;
- usado como destino de um post no LinkedIn;
- explorado como narrativa longa.

Correção V3: rotas reais `/work/:slug`, com fallback compatível com GitHub Pages, metadados por case e retorno previsível para a posição anterior.

### P1 — A linguagem visual lembra um template SaaS dark

Os seguintes elementos se repetem até formar uma estética genérica:

- navegação flutuante em pill com blur;
- badge em pill antes de cada seção;
- chips de tecnologia em praticamente todos os blocos;
- cards elevados na timeline e no resumo do perfil;
- azul em gradiente no sobrenome;
- superfícies escuras com borda de baixa opacidade;
- monoespaçada pequena como etiqueta decorativa.

Nenhum desses elementos é incorreto isoladamente. O problema é a soma: o visitante reconhece o vocabulário de um template antes de reconhecer Jonathan.

Correção V3: uma composição dominante, menos contêineres, menos pills, screenshots em escala editorial, divisas estruturais e um único acento cromático com função narrativa.

### P1 — A página diz “verifiable”, mas não exibe a cadeia de evidência

Há bons textos técnicos, porém a evidência aparece principalmente como screenshot e lista de stack. Faltam artefatos que expliquem decisões: diagramas sanitizados, fluxos, integrações, estados de interface, testes, release boundaries e o que é ou não verificável.

Correção V3:

- adicionar uma camada “evidence” dentro dos cases;
- distinguir claramente `observed`, `verified in source`, `publicly accessible` e `confidential`;
- usar diagramas reconstruídos e screenshots sanitizados, nunca telas internas brutas.

### P1 — Movimento insuficiente para o briefing

No baseline publicado existem:

- uma animação de entrada no hero;
- transições de hover em cards, botões e imagens;
- transição do menu mobile.

Não existem:

- sequência de hero;
- scroll-linked storytelling;
- progresso de arquitetura;
- shared-layout entre projeto e case;
- transição de rota;
- timeline animada por leitura;
- motion tokens compartilhados.

Correção V3: adotar o sistema descrito em `MOTION_SYSTEM.md`, usando movimento para explicar fluxo e hierarquia, não como decoração contínua.

### P1 — Leitura longa e ritmo uniforme

Métricas observadas:

- desktop `1440 × 900`: `scrollHeight` de aproximadamente `7789px`;
- mobile `390 × 844`: `scrollHeight` de aproximadamente `11171px`.

O comprimento não é um defeito por si só. O problema é que várias seções usam a mesma cadência: eyebrow, heading, parágrafo, grid. Há áreas extensas de vazio sem função narrativa e pouca mudança de composição.

Correção V3:

- alternar capítulos densos e respirações curtas;
- usar sticky storytelling apenas onde ele explica uma transformação;
- trazer prova profissional para os primeiros dois scrolls;
- evitar repetir a mesma anatomia visual em todas as seções.

### P1 — Acessibilidade parcial

Pontos positivos: focus visível, headings semânticos, alt text, reduced motion global e menu com `aria-expanded`.

Gaps encontrados no código publicado:

- o modal não gerencia foco inicial, focus trap nem restauração do foco ao fechar;
- o botão de fechar tem `40px`, abaixo da meta de `44px`;
- “Read case study” mede cerca de `23px` de altura no mobile observado e precisa de área de toque maior;
- textos `0.75rem` com `rgba(255,255,255,0.4)` sobre `#020617` têm contraste calculado de aproximadamente `3.74:1`, insuficiente para texto pequeno normal;
- a experiência dos cases depende de modal e não oferece um fluxo natural de histórico/URL;
- a visualização atual de tecnologias é extensa, mas não oferece uma alternativa semântica a um futuro mapa interativo porque esse mapa ainda não existe.

### P1 — Localização existe como dependência, não como produto

O baseline contém `i18next`, mas só registra `en-US`. Não há recurso `pt-BR`, seletor visível nem persistência de idioma.

Correção V3:

- inglês padrão e português completo;
- seletor curto e inequívoco `EN / PT`;
- persistência local;
- atualização de `lang`, title, description e conteúdo de cada case;
- testes de alternância e navegação.

### P2 — SEO incompleto para uma experiência com cases

O V2 já tem uma boa base, mas faltam:

- schema `WebSite`;
- metadados específicos por case;
- canonical por rota;
- `hreflang` ou outra estratégia explícita para idiomas;
- imagem social específica e validada para os principais cases;
- sitemap/robots ajustados à estratégia de rotas do GitHub Pages.

### P2 — Risco de performance nos assets

Assets PNG atuais:

- `hero-engineering.png`: aproximadamente `1.3 MB`, `1659 × 948`;
- `profile/jonathan-febraio.png`: aproximadamente `1.7 MB`, `1254 × 1254`;
- screenshots de projeto: aproximadamente `252–756 KB` cada.

O código não oferece `srcset`, `sizes`, WebP ou AVIF. A fonte vem do Google Fonts, criando dependência de rede adicional. Isso não prova que o V2 falha Core Web Vitals, mas estabelece um risco suficiente para conversão e medição na V3.

Correção V3:

- gerar AVIF/WebP com fallback;
- usar tamanhos responsivos e dimensões explícitas;
- pré-carregar apenas o asset LCP real;
- evitar canvas/WebGL como dependência do hero se SVG + Motion entregarem a narrativa;
- hospedar ou empacotar as fontes escolhidas.

### P2 — Testes ausentes no baseline

O `package.json` publicado tem scripts de `dev`, `build`, `lint`, `format` e `preview`, mas não contém suíte unitária ou E2E.

Correção V3: cobrir navegação, idiomas, cases, links externos, menu mobile e reduced motion, além do build de GitHub Pages.

## Auditoria do carregamento progressivo de imagens

Uma captura full-page inicial mostrou placeholders em imagens abaixo da dobra. Isso foi investigado antes de registrar um defeito. Após scroll real até as respectivas regiões, todas as seis imagens carregaram com dimensões naturais válidas. Portanto:

- **não há evidência de imagens quebradas no V2**;
- a captura inicial foi efeito do `loading="lazy"`;
- o QA da V3 deve rolar cada capítulo antes de validar screenshots de página inteira.

## Leitura das referências oficiais

As referências foram observadas em 2026-08-30 e podem mudar. O objetivo é extrair princípios, não copiar composição, cor, tipografia, objetos ou animações.

### Remix

Fontes: [site oficial](https://remix.run/#the-framework) e [repositório oficial](https://github.com/remix-run/remix-website).

- primeira dobra dominada por uma marca inconfundível e um campo visual de atmosfera;
- uma única ideia por capítulo, com escala suficiente para virar experiência;
- o conteúdo verbal progride de framework → full stack → AI → components → use cases;
- o repositório usa Three.js e uma base própria de CSS/Remix, mas a lição não é “usar WebGL”: é fazer o material visual servir a uma tese única.

Aplicação segura: dar a Jonathan uma metáfora própria — fluxo de execução entre camadas — sem usar a wordmark, o verde, o espaço, o ruído ou o comportamento visual do Remix.

### Linear

Fonte: [site oficial](https://linear.app/).

- o produto aparece cedo como prova, não como decoração;
- headline curta, superfície calma e alta densidade de interface controlada;
- a narrativa se organiza por trabalhos reais: intake, planning, automation e shipping.

Aplicação segura: mostrar entregas profissionais dentro de fluxos coerentes, sem importar a estética monocromática, as janelas ou os componentes da Linear.

### Vercel

Fonte: [site oficial](https://vercel.com/).

- mensagem orientada a audiência e resultado;
- infraestrutura é explicada em blocos de capacidade conectados a provas de clientes;
- copy curta permite que o produto e os dados carreguem a credibilidade.

Aplicação segura: apresentar as camadas de atuação de Jonathan como um sistema, sempre conectadas a trabalhos verificáveis.

### Stripe

Fonte: [site oficial](https://stripe.com/).

- grid rigoroso, headline grande e um único gesto visual contínuo compartilham o hero;
- prova de escala entra no momento certo, depois da promessa;
- o sistema visual mantém força mesmo com muito conteúdo.

Aplicação segura: usar grade e hierarquia como estrutura; não copiar a escultura cromática, os gradientes ou o layout da Stripe.

### Railway

Fonte: [site oficial](https://railway.com/).

- produto em contexto é a imagem principal;
- a tela de infraestrutura funciona como prova de promessa;
- arquitetura e operação são tratadas como algo visualmente compreensível.

Aplicação segura: mostrar diagramas e estados reconstruídos dos projetos, sem simular um dashboard Railway.

### Supabase

Fonte: [site oficial](https://supabase.com/).

- um ecossistema complexo é resumido como módulos que funcionam juntos;
- cada módulo tem uma demonstração curta, não apenas um nome.

Aplicação segura: fazer o mapa Web / Mobile / Backend / Data / AI / Cloud revelar evidência. Evitar reproduzir o mosaico de cards.

### Resend

Fonte: [site oficial](https://resend.com/).

- um único objeto hero memorável, tipografia editorial e paleta muito restrita;
- a atmosfera é específica ao produto e deixa espaço para uma mensagem simples.

Aplicação segura: buscar um objeto/metáfora visual próprio — o execution trace — sem usar cubos, render 3D monocromático ou a direção tipográfica da Resend.

### Framer

Fonte: [site oficial](https://www.framer.com/).

- a demonstração do produto é o centro da composição;
- vídeo/motion não é um adorno; mostra uma tarefa sendo realizada;
- a página muda de escala entre promessa, demonstração e prova social.

Aplicação segura: animar a transformação de requisito em sistema e deixar cada case revelar decisões reais.

## Diagnóstico qualitativo

Os valores abaixo são heurísticos de design, não métricas automáticas.

| Critério                       |   V2 | Leitura                                        |
| ------------------------------ | ---: | ---------------------------------------------- |
| Clareza do posicionamento      | 8/10 | Cargo e stack são claros                       |
| Memorabilidade da marca        | 5/10 | Nome forte, linguagem visual genérica          |
| Prova de trabalho independente | 7/10 | Bons projetos e screenshots                    |
| Prova de trabalho profissional | 3/10 | Reduzida a um item de timeline                 |
| Storytelling end-to-end        | 3/10 | Afirmado em texto, não demonstrado             |
| Motion com função              | 2/10 | Entrance + hover apenas                        |
| Mobile base                    | 7/10 | Sem overflow; leitura muito longa              |
| Acessibilidade                 | 6/10 | Boa base; contraste, alvos e modal incompletos |
| SEO para cases                 | 5/10 | Home coberta; cases sem rota/metadados         |
| Prontidão de performance       | 5/10 | Base simples; PNGs pesados e sem variantes     |

## Critério de saída da V3

A V3 só supera esta auditoria quando:

1. o primeiro viewport comunica Jonathan e o sistema end-to-end sem depender de um parágrafo;
2. pelo menos três trabalhos profissionais aparecem antes ou junto dos produtos independentes;
3. cada case prioritário tem URL própria, narrativa, metadados e evidência sanitizada;
4. o mapa de capacidades aponta para trabalhos, não para uma lista de logos;
5. o motion system tem equivalentes completos para reduced motion;
6. os assets críticos estão responsivos e comprimidos;
7. `EN / PT`, navegação, menu, cases e links são cobertos por testes;
8. QA visual comprova `390`, `430`, `768`, `1366`, `1440` e `1920px`;
9. a URL publicada e os deep links funcionam após refresh no GitHub Pages.
