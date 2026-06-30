import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/data/navigation";
import { FOOTER_BADGES } from "@/data/awards";
import { IMAGES } from "@/data/images";

export function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-gold/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* Top row: wordmark + nav */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="shrink-0">
            <Link href="/" aria-label="Fifty Seventh & 7th — Home">
              <Image
                src={IMAGES.LOGO}
                alt="Fifty Seventh & 7th logo"
                width={60}
                height={66}
                className="mb-4 opacity-90"
              />
            </Link>
            <p className="font-display text-xl text-ink tracking-wider">
              Fifty Seventh &amp; 7th
            </p>
            <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-gold mt-1">
              Luxury Homes
            </p>
          </div>

          {/* Nav columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-[0.7rem] tracking-[0.12em] uppercase text-light/55 hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Award badges */}
        <div className="flex flex-wrap items-center gap-5 mb-16 pb-16 border-b border-gold/10">
          {FOOTER_BADGES.map((badge, i) => (
            <Image
              key={i}
              src={badge.url}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className="opacity-65 hover:opacity-100 transition-opacity duration-300 object-contain"
              style={{ maxHeight: 60, width: "auto" }}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Contact */}
          <div className="flex flex-col gap-1">
            <a
              href="tel:2817885700"
              className="font-body text-sm text-light/55 hover:text-gold transition-colors duration-200"
            >
              (281) 788-5700
            </a>
            <a
              href="mailto:info@fiftyseventhandseventh.com"
              className="font-body text-sm text-light/55 hover:text-gold transition-colors duration-200"
            >
              info@fiftyseventhandseventh.com
            </a>
            <p className="font-body text-sm text-light/40">
              7026 Old Katy Road, Suite 103, Houston, TX 77024
            </p>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col md:items-end gap-3">
            <a
              href="https://www.instagram.com/fiftyseventhandseventh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fifty Seventh & 7th on Instagram"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={IMAGES.INSTAGRAM}
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <p className="font-body text-[0.65rem] tracking-[0.1em] text-light/30">
              © 2026 Fifty Seventh &amp; 7th Luxury Homes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
