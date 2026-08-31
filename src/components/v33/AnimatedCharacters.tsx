import type { CSSProperties } from 'react';

interface AnimatedCharactersProps {
  text: string;
  className?: string;
}

export function AnimatedCharacters({ text, className = '' }: AnimatedCharactersProps) {
  const words = text.split(' ');

  return (
    <span className={`animated-characters-v33 ${className}`.trim()} aria-hidden="true">
      {words.map((word, wordIndex) => (
        <span className="animated-characters-v33__word" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character, characterIndex) => (
            <span
              className="animated-characters-v33__character"
              style={
                {
                  '--character-index':
                    characterIndex +
                    words
                      .slice(0, wordIndex)
                      .reduce((offset, precedingWord) => offset + precedingWord.length + 1, 0),
                } as CSSProperties
              }
              key={`${character}-${characterIndex}`}
            >
              {character}
            </span>
          ))}
          {wordIndex < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
