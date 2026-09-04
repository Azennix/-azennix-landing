import Image from "next/image";

export default function PixelWordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo/azennix-wordmark.png"
      alt="AZENNIX"
      width={512}
      height={512}
      className={className}
    />
  );
}