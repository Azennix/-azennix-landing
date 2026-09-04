import Image from "next/image";

export default function BrandMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/logo/azennix-icon.png"
      alt="Azennix"
      width={512}
      height={512}
      className={className}
      priority
    />
  );
}