import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type PreviewImage = {
  src?: string;
  alt: string;
};

type ImageReadyPreviewProps = {
  image?: PreviewImage;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
};

export function ImageReadyPreview({
  image,
  children,
  className,
  imageClassName
}: ImageReadyPreviewProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {image?.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
          className={cn("object-cover", imageClassName)}
          loading="lazy"
          unoptimized
        />
      ) : (
        children
      )}
    </div>
  );
}
