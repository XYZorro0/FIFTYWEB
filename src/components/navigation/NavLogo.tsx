import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/data/images";

interface NavLogoProps {
  scrolled?: boolean;
}

export function NavLogo({ scrolled = false }: NavLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Fifty Seventh & 7th — Home">
      <Image
        src={IMAGES.LOGO}
        alt="Fifty Seventh & 7th logo"
        width={106}
        height={116}
        priority
        className="transition-all duration-300"
        style={{ height: scrolled ? 36 : 44, width: "auto" }}
      />
    </Link>
  );
}
