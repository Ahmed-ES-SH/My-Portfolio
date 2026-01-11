import Image from "next/image";

interface props {
  src: string;
  className: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager" | undefined;
  priority?: boolean;
  onLoad?: () => void;
  ref?: any;
}

export default function Img({
  src,
  className,
  width = 1024,
  height = 1280,
  alt = "image",
  loading = "lazy",
  priority = false,
  onLoad,
  ref,
}: props) {
  return (
    <>
      <Image
        src={src ?? "/noImage.png"}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        priority={priority}
        onLoad={onLoad}
        ref={ref}
      />
    </>
  );
}
