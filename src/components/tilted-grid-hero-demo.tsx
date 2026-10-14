import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

// Real Unsplash photos of motorcycle parts — every URL below was checked to
// return 200 at w=1200 before it went in. Portrait sources are cropped to the
// tiles by object-cover, the same as the original R2 demo.
const CDN = "https://images.unsplash.com";
const PARAMS = "?auto=format&fit=crop&w=1200&q=80";

export const PARTS_IMAGES = [
  {
    src: `${CDN}/photo-1762012507780-060fe0bcc783${PARAMS}`,
    alt: "Close-up of a motorcycle's front brake system",
  },
  {
    src: `${CDN}/photo-1525207106105-b340f7384b30${PARAMS}`,
    alt: "Gold drive sprocket in selective focus",
  },
  {
    src: `${CDN}/photo-1777104782087-5c5d762cb32a${PARAMS}`,
    alt: "Chrome motorcycle engine casing",
  },
  {
    src: `${CDN}/photo-1769537754999-724044ec2e32${PARAMS}`,
    alt: "Motorcycle rear wheel and drive chain",
  },
  {
    src: `${CDN}/photo-1671834214096-6aa88bd6470d${PARAMS}`,
    alt: "Handlebar controls close up",
  },
  {
    src: `${CDN}/photo-1588017530244-c57df911f73b${PARAMS}`,
    alt: "Brake disc rotor detail",
  },
  {
    src: `${CDN}/photo-1534755563369-ad37931ac77b${PARAMS}`,
    alt: "Air-cooled motorcycle engine",
  },
  {
    src: `${CDN}/photo-1774902410481-5b9e54a55def${PARAMS}`,
    alt: "Exhaust muffler and rear wheel",
  },
  {
    src: `${CDN}/photo-1598915850224-386a8a520c29${PARAMS}`,
    alt: "Motorcycle speedometer reading zero",
  },
  {
    src: `${CDN}/photo-1773609287505-2abbd476eeec${PARAMS}`,
    alt: "Dirt bike rear wheel and chain",
  },
  {
    src: `${CDN}/photo-1629310601207-bb59daf1763b${PARAMS}`,
    alt: "Black and silver engine detail",
  },
  {
    src: `${CDN}/photo-1590506995460-d0d9892b54da${PARAMS}`,
    alt: "Full face motorcycle helmet",
  },
];

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={PARTS_IMAGES}
      className="h-[560px] w-full rounded-lg border border-border bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Every frame,
            <br />
            brought into focus.
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm text-muted-foreground">
          Parts curve in from one edge, flatten out at the centre, then fade
          away round the other.
        </p>
      </div>
    </TiltedGridHero>
  );
}
