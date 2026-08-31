import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Portfolio V3.3', () => {
  it('renders the English-first system narrative and professional work', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: 'JF Signal' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /jonathan febraio — home/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let’s talk/i })).toHaveAttribute('href', '/#contact');
    expect(screen.getByRole('heading', { name: 'Jonathan Febraio' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Crypto AI', level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /engineering contributions delivered through x-apps/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /open anonymized case/i })[0]).toHaveAttribute(
      'href',
      '/work/learning-intelligence-platform',
    );
    expect(screen.getByRole('link', { name: /converse com amor/i })).toHaveAttribute(
      'href',
      'https://github.com/JRaamos/Converse-com-amor',
    );
    expect(screen.getAllByRole('link', { name: /talk on whatsapp/i })[0]).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/5511921404143'),
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

  it('traps the accessible mobile menu context and closes it with Escape', async () => {
    render(<App />);
    const openButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(openButton);
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe('hidden');
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() =>
      expect(
        screen.queryByRole('navigation', { name: /mobile navigation/i }),
      ).not.toBeInTheDocument(),
    );
    expect(document.body.style.overflow).toBe('');
    expect(openButton).toHaveFocus();
  });

  it('transforms the System Lab architecture and its real technology context', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('tab', { name: /04 AI/i }));
    expect(
      screen.getByRole('heading', { name: /intelligence stays inside a bounded role/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/product → backend → openai → vector search → context/i),
    ).toBeInTheDocument();
    expect(screen.getByText('Qdrant')).toBeInTheDocument();
    expect(document.querySelector('canvas[data-signal-scene="lab-ai"]')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('explains architecture boundaries and foregrounds JavaScript without erasing TypeScript', () => {
    render(<App />);
    expect(
      screen.queryByText(/react native journeys share service contracts/i),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /explain mobile/i }));
    expect(screen.getByText(/react native journeys share service contracts/i)).toBeInTheDocument();
    expect(screen.getAllByText('JavaScript').length).toBeGreaterThan(0);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0);
  });

  it('marks the section reported by IntersectionObserver as the active navigation item', async () => {
    const OriginalIntersectionObserver = window.IntersectionObserver;
    class ActiveSectionObserver {
      readonly root = null;
      readonly rootMargin = '0px';
      readonly thresholds = [0];
      constructor(private readonly callback: IntersectionObserverCallback) {}
      observe(element: Element) {
        if (element.id === 'system') {
          this.callback(
            [
              {
                target: element,
                intersectionRatio: 0.72,
                isIntersecting: true,
              } as IntersectionObserverEntry,
            ],
            this as unknown as IntersectionObserver,
          );
        }
      }
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    }
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: ActiveSectionObserver,
    });
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      writable: true,
      value: ActiveSectionObserver,
    });

    render(<App />);
    await waitFor(() =>
      expect(screen.getByRole('link', { name: 'System' })).toHaveAttribute(
        'aria-current',
        'location',
      ),
    );

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: OriginalIntersectionObserver,
    });
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      writable: true,
      value: OriginalIntersectionObserver,
    });
  });

  it('renders a direct case route with a case-specific title', async () => {
    window.history.replaceState({}, '', '/work/crypto-ai');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Crypto AI', level: 1 })).toBeInTheDocument();
    await waitFor(() => expect(document.title).toContain('Crypto AI'));
    expect(screen.getByRole('link', { name: /back to work/i })).toHaveAttribute('href', '/#work');
    expect(screen.getByText(/deterministic analysis services/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /crypto ai engineering architecture/i }),
    ).toBeInTheDocument();
  });
});
