import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Portfolio V3.1', () => {
  it('renders the English-first system narrative and professional work', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Jonathan Febraio' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /engineering contributions delivered through x-apps/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /open anonymized case/i })[0]).toHaveAttribute(
      'href',
      '/work/learning-intelligence-platform',
    );
  });

  it('switches all product copy to Portuguese and updates document language', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'PT' }));
    expect(
      await screen.findByText(/construo produtos entre web, backend, mobile e ia/i),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(window.localStorage.getItem('portfolio-locale')).toBe('pt');
  });

  it('opens and closes the accessible mobile navigation', async () => {
    render(<App />);
    const openButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(openButton);
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    fireEvent.click(screen.getByRole('button', { name: /close menu/i }));
    await waitFor(() =>
      expect(
        screen.queryByRole('navigation', { name: /mobile navigation/i }),
      ).not.toBeInTheDocument(),
    );
  });

  it('renders a direct case route with a case-specific title', async () => {
    window.history.replaceState({}, '', '/work/crypto-ai');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Crypto AI' })).toBeInTheDocument();
    await waitFor(() => expect(document.title).toContain('Crypto AI'));
    expect(screen.getByText(/deterministic analysis services/i)).toBeInTheDocument();
  });
});
