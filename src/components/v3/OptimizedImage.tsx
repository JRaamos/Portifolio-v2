interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  width: number;
  height: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  width,
  height,
}: OptimizedImageProps) {
  const webp = src.replace(/\.png$/i, '.webp');
  const avif = src.replace(/\.png$/i, '.avif');
  return (
    <picture className={className}>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} loading={loading} decoding="async" width={width} height={height} />
    </picture>
  );
}
