# Portfolio V3 — Motion System

Data: 2026-08-30

Direção associada: **Execution Trace**

## Escolha da biblioteca

Usar **Motion for React** por meio de `motion/react`.

Fontes oficiais:

- [Motion for React](https://motion.dev/docs/react)
- [Scroll animations](https://motion.dev/docs/react-scroll-animations)
- [useReducedMotion](https://motion.dev/docs/react-use-reduced-motion)
- [Layout animations](https://motion.dev/docs/react-layout-animations)

### Por que Motion

- integra-se ao estado e às rotas React sem timeline imperativa paralela;
- cobre entrada, scroll-linked, SVG path, gesture, shared layout e exit/enter com uma biblioteca;
- oferece `useReducedMotion` para mudar comportamento, não apenas encurtar duração;
- usa APIs nativas como Web Animations e ScrollTimeline quando disponíveis;
- permite `LazyMotion` e importação seletiva;
- é suficiente para a metáfora visual escolhida sem incluir Three.js ou um segundo motor.

### Por que não GSAP nesta implementação

GSAP é potente, mas a V3 não precisa de uma timeline global complexa nem de plugins adicionais. Motion reduz a superfície de integração e mantém o estado visual próximo dos componentes React.

### Por que não Three.js/WebGL

O Remix usa Three.js em sua experiência atual, mas a qualidade daquela página vem da coerência entre marca, conteúdo e material, não da tecnologia isolada. O execution trace pode ser realizado com SVG, CSS transforms e Motion, com custo menor, fallback mais simples e melhor previsibilidade no mobile.

## Tese de interação

O movimento representa **entrega em progresso**.

- uma necessidade entra no sistema;
- o sinal percorre camadas;
- trabalhos profissionais aparecem como evidência;
- um case expande a mesma geometria para explicar decisões;
- o fluxo termina em `SHIPPED`, nunca em um loop ornamental infinito.

Se uma animação não revela sequência, relação, estado ou ação, ela deve ser removida.

## Princípios

1. **Um gesto principal.** O execution trace é a assinatura; efeitos secundários não competem com ele.
2. **Transform e opacity primeiro.** Evitar animar layout, blur, shadow e gradientes grandes por frame.
3. **Scroll não sequestra.** Nada de smooth-scroll customizado ou wheel hijacking.
4. **Mobile não é desktop comprimido.** O trace vira uma progressão vertical e mais curta.
5. **Touch e teclado têm equivalentes.** Hover nunca é o único acesso a informação.
6. **Reduced motion muda a composição.** Parallax, path drawing e deslocamentos são removidos; conteúdo permanece completo.
7. **Sem autoplay decorativo persistente.** Após a sequência inicial, a página deve ficar calma.
8. **Movimento não bloqueia leitura nem navegação.** Transições de rota são curtas e interrompíveis.

## Tokens

### Durações

| Token      |   Valor | Uso                                    |
| ---------- | ------: | -------------------------------------- |
| `instant`  | `100ms` | feedback de press/focus visual         |
| `fast`     | `160ms` | underline, seta, cor e menu control    |
| `standard` | `280ms` | disclosure, mobile nav, pequenos swaps |
| `enter`    | `520ms` | entrada de seção ou mídia              |
| `hero`     | `760ms` | partes principais da sequência inicial |
| `route`    | `360ms` | shared layout para case                |

### Easings

| Token    | Valor                | Uso                                         |
| -------- | -------------------- | ------------------------------------------- |
| `out`    | `[0.16, 1, 0.3, 1]`  | entradas e expansão                         |
| `inOut`  | `[0.65, 0, 0.35, 1]` | progressão ligada a estado                  |
| `linear` | `[0, 0, 1, 1]`       | pathLength dirigido diretamente pelo scroll |

### Springs

| Token    | Configuração                             | Uso                              |
| -------- | ---------------------------------------- | -------------------------------- |
| `shared` | `stiffness: 420, damping: 38, mass: 0.8` | project poster → case hero       |
| `signal` | `stiffness: 170, damping: 26, mass: 0.7` | suavização do progresso do trace |

Os números são ponto de partida e precisam ser calibrados em gravação real a `390`, `1440` e `1920px`.

## Core motion 1 — Hero sequence

Objetivo: em aproximadamente `1.2s`, demonstrar identidade e sistema sem atrasar o CTA.

### Sequência

| Janela       | Evento                                                                    |
| ------------ | ------------------------------------------------------------------------- |
| `0–180ms`    | campo graphite e grid estrutural aparecem sem deslocamento                |
| `90–650ms`   | nome e claim entram por clip/reveal vertical de no máximo `24px`          |
| `260–820ms`  | SVG do trace desenha a rota principal                                     |
| `440–960ms`  | nós `WEB`, `API`, `DATA`, `AI`, `MOBILE`, `CLOUD` surgem na ordem da rota |
| `720–1120ms` | CTA, local e disponibilidade entram                                       |
| `1120ms+`    | movimento termina; apenas estados de interação permanecem                 |

### Regras

- nada de typewriter no nome;
- nada de scramble text na copy principal;
- o desenho da rota deve manter o texto legível durante todo o tempo;
- o LCP não pode depender de JavaScript para aparecer;
- nome, claim e CTA começam no DOM em estado semanticamente completo.

### Reduced motion

- nome, claim e CTA renderizam imediatamente;
- rota e nós já aparecem completos;
- sem clip, path drawing ou translate;
- um highlight estático indica `SHIPPED`.

## Core motion 2 — Scroll story / System Map

Objetivo: explicar como as capacidades se conectam a trabalhos reais.

### Desktop

- capítulo com `position: sticky` apenas dentro de uma faixa limitada;
- coluna esquerda contém a rota; coluna direita alterna evidência;
- `useScroll({ target })` gera progresso local, não global;
- o progresso ativa seis fases, mas não exige precisão de pixel do usuário;
- uma fase ativa por vez; anteriores permanecem visíveis com menor contraste;
- cada fase aponta para um case verificável.

### Mobile

- remover sticky prolongado;
- rota vertical curta ao lado dos headings;
- cada evidência entra quando o bloco cruza aproximadamente `65%` do viewport;
- nenhuma experiência horizontal ou swipe obrigatório.

### Reduced motion

- todos os nós aparecem ativos e conectados;
- evidências seguem no fluxo normal;
- sem progressão scroll-linked;
- a relação é preservada por numeração, linha estática e headings.

## Core motion 3 — Professional Work chapters

Objetivo: dar escala e ritmo diferentes a cada trabalho sem transformar a página em carousel.

### Comportamento

- mídia principal entra por reveal de máscara simples, uma vez;
- arquitetura sanitizada desenha apenas os links relevantes daquele trabalho;
- headlines e contribuição entram em dois beats, não item por item;
- ao avançar para o próximo trabalho, o signal amber muda de destino;
- não usar autoplay de vídeo; gravações curtas têm controle e poster.

### Reduced motion

- mídia e texto já aparecem completos;
- diagramas estáticos;
- vídeos pausados por padrão com controle explícito.

## Project-to-case transition

Objetivo: manter continuidade ao sair da home para `/work/:slug`.

- poster selecionado usa `layoutId="work-{slug}-media"`;
- título pode usar um segundo `layoutId`, desde que não cause distorção de escala;
- saída da listagem: `160ms` de opacity nas informações não compartilhadas;
- expansão compartilhada: spring `shared`, alvo abaixo de `500ms` percebidos;
- case hero aparece com conteúdo já utilizável;
- botão voltar restaura a posição anterior quando possível.

### Deep link

Quando a rota é aberta diretamente, o case usa apenas o entrance padrão; não tenta simular uma origem inexistente.

### Reduced motion

Troca imediata de rota com crossfade de `100ms` no máximo. `layoutId` pode permanecer configurado, mas a transformação compartilhada deve ser desativada.

## Timeline profissional

- linha vertical cresce com o progresso local da seção;
- cada marco muda de `ash` para `signal amber` quando o heading entra;
- texto não desliza lateralmente;
- datas permanecem estáticas para não dificultar escaneamento.

Reduced motion: linha completa e todos os marcos ativos desde o início.

## Microinterações

### Links e CTAs

- seta desloca no máximo `4px` em hover/focus;
- underline cresce da esquerda para a direita em `fast`;
- press usa `scale: 0.98` apenas em dispositivos apropriados;
- focus ring é CSS e nunca depende de animação.

### Navegação

- header muda de modo sólido/transparente por threshold, sem blur animado;
- indicador da seção ativa usa shared layout curto;
- menu mobile abre com opacity + `translateY(8px)`, não com slide de tela inteira;
- ao escolher item, o menu fecha antes do scroll nativo.

### Language switcher

- indicador `EN / PT` usa shared layout;
- conteúdo não faz fade em cascata; apenas troca de forma imediata ou com crossfade de `100ms`;
- atualização de `lang`, title e metadata não deve depender da animação.

### Media

- imagens podem ganhar `scale: 1.015` em hover, nunca em scroll contínuo;
- zoom é removido em coarse pointer;
- legendas entram sem deslocamento quando o media recebe foco/tap.

## Reduced motion matrix

| Experiência padrão        | Equivalente reduced motion        |
| ------------------------- | --------------------------------- |
| title clip reveal         | conteúdo visível imediatamente    |
| SVG path drawing          | path completo estático            |
| parallax/depth            | composição sem deslocamento       |
| sticky scroll story       | seções no fluxo normal            |
| shared layout route       | troca direta + crossfade curto    |
| image mask reveal         | imagem já renderizada             |
| timeline growth           | linha completa                    |
| autoplay/background video | poster estático e controle manual |
| hover scale               | mudança de borda/cor sem escala   |

Implementação deve combinar `MotionConfig reducedMotion="user"`, `useReducedMotion()` nos componentes que mudam composição e o media query CSS como última defesa.

## Orçamento de performance

- no máximo três superfícies grandes animando simultaneamente;
- nenhuma animação contínua offscreen;
- nada de animar `box-shadow`, `filter: blur()` ou gradiente em tela cheia por frame;
- `will-change` somente durante a animação ativa;
- preferir SVG path + transform a canvas/WebGL;
- lazy-load da biblioteca em rotas que não usam motion complexo quando aplicável;
- vídeos abaixo da dobra com poster, preload controlado e pausa fora do viewport;
- respeitar `document.visibilityState` para qualquer loop inevitável;
- medir frame drops em mobile real ou emulação com CPU throttling antes do deploy.

## Anti-patterns proibidos

- fade-up em todos os elementos da página;
- stagger longo em parágrafos ou chips;
- partículas seguindo cursor;
- magnetic buttons obrigatórios;
- smooth-scroll proprietário;
- scroll horizontal obrigatório;
- cursor customizado que substitui o cursor do sistema;
- typewriter em copy importante;
- glow pulsando em loop;
- animação que esconde conteúdo até JavaScript iniciar;
- mais de uma biblioteca de motion.

## QA obrigatório

### Viewports

- `390 × 844`
- `430 × 932`
- `768px`
- `1366px`
- `1440px`
- `1920px`

### Cenários

1. entrada do hero em conexão rápida e lenta;
2. scroll rápido cruzando o System Map;
3. navegação por teclado e foco visível;
4. touch sem hover;
5. rota aberta por click e por deep link;
6. back/forward do browser;
7. alternância EN/PT durante e depois de animações;
8. `prefers-reduced-motion: reduce` antes do load e alterado em runtime;
9. aba escondida/reativada;
10. screenshot após lazy media entrar no viewport.

### Critério de aprovação

- nenhum conteúdo essencial depende da animação;
- nenhuma transição impede interação por mais de `500ms`;
- sem jank perceptível em mobile;
- comportamento reduzido é uma composição deliberada, não uma página quebrada e ultrarrápida;
- a gravação de cinco segundos do hero deixa claro o fluxo end-to-end sem narração.
