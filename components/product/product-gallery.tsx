import Image from "next/image";

type ProductGalleryProps = {
  name: string;
  image: string;
};

export function ProductGallery({ name, image }: ProductGalleryProps) {
  return (
    <div className="group relative h-[360px] overflow-hidden rounded-lg border border-white/10 bg-black/40 sm:h-[430px] md:h-[520px]">
      <div key={image} className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}
