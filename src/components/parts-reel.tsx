import { ArrowDownRight, Sparkles } from "lucide-react";
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { PARTS_IMAGES } from "@/components/tilted-grid-hero-demo";

/**
 * "The parts reel" — the tilted grid used as a full-bleed band between the
 * hero and the parts grid, so the shop window finally shows real parts.
 * Copy is laid out like the rest of the page: left aligned, brand display
 * face, kicker in gold. The band runs low (axis 70) so the headline sits in
 * clear space above it.
 */
export default function PartsReel() {
  return (
    <section
      id="reel"
      aria-label="BBS parts reel"
      className="border-t border-border bg-[#101012]"
    >
      <TiltedGridHero
        images={PARTS_IMAGES}
        speed={4.5}
        axis={70}
        fade={14}
        className="h-[520px] w-full bg-[#101012] sm:h-[560px]"
      >
        <div className="relative z-10 flex h-full flex-col items-start px-6 pt-12 sm:px-[5.1vw] sm:pt-14">
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[2.3px] text-[#efbd46]">
            <Sparkles size={13} /> The parts reel
          </p>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(44px,6vw,88px)] font-extrabold uppercase leading-[0.83] tracking-[0] text-white">
            Every part,
            <br />
            <span className="text-[#e9432d]">every turn.</span>
          </h2>
          <p className="mt-5 max-w-[340px] text-[12px] leading-[1.8] text-[#dddddf]">
            Chains, brakes, engines and the details in between — the stockroom
            that keeps Dhaka moving.
          </p>
          <a href="#parts" className="cta mt-7">
            Explore parts <ArrowDownRight size={18} />
          </a>
        </div>
      </TiltedGridHero>
    </section>
  );
}
