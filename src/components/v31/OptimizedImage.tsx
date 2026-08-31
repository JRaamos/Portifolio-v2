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
  const hasGeneratedVariants = /\.png$/i.test(src);
  const webp = hasGeneratedVariants ? src.replace(/\.png$/i, '.webp') : null;
  const avif = hasGeneratedVariants ? src.replace(/\.png$/i, '.avif') : null;

  return (
    <picture className={className}>
      {avif ? <source srcSet={avif} type="image/avif" /> : null}
      {webp ? <source srcSet={webp} type="image/webp" /> : null}
      <img src={src} alt={alt} loading={loading} decoding="async" width={width} height={height} />
    </picture>
  );
}
