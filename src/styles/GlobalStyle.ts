import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.background.primary};
  }

  body {
    margin: ${({ theme }) => theme.spacing.none};
    min-width: 20rem;
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.gradients.page};
    font-family: ${({ theme }) => theme.typography.family.body};
    font-size: ${({ theme }) => theme.typography.size.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  button, select, a { font: inherit; }
  button, select { color: inherit; }
  button { border: 0; }
  a { color: inherit; }
  img, svg { display: block; max-width: 100%; }

  ::selection {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.accent.soft};
  }

  :focus-visible {
    outline: ${({ theme }) => `${theme.sizes.line} solid ${theme.colors.state.focus}`};
    outline-offset: ${({ theme }) => theme.spacing.xxs};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
