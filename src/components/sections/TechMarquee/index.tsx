import { MarqueeTrack, TechMarqueeRoot } from './styled';
const items = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Rust',
  'Next.js',
  'Redis',
  'GraphQL',
  'Docker',
  'Systems',
  'Performance',
];
export function TechMarquee() {
  return (
    <TechMarqueeRoot aria-hidden="true">
      <MarqueeTrack>
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </MarqueeTrack>
    </TechMarqueeRoot>
  );
}
