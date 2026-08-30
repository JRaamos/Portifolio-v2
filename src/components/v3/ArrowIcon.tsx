export function ArrowIcon({
  direction = 'northEast',
}: {
  direction?: 'northEast' | 'right' | 'down';
}) {
  const rotation = direction === 'right' ? 45 : direction === 'down' ? 135 : 0;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      style={{ rotate: `${rotation}deg` }}
    >
      <path
        d="M5 19 19 5M8 5h11v11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
