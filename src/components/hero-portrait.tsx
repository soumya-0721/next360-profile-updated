import Image from "next/image";

import { ceo, panelMembers } from "@/lib/site";

function panelMemberId(name: string) {
  return `panel-member-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/* The cutout, its label and the panel plate all share one width so the label
   stays locked to the picture's proportions instead of floating at its own size. */
const FIGURE_WIDTH = "w-full max-w-[24rem]";

/*
  Founder portrait for the hero. Sits in its own grid column rather than being
  absolutely positioned, so it can never overlap the headline, description or CTAs
  at any breakpoint. From xl up it occupies the right-hand column; below that it
  stacks under the hero copy so it stays visible without disturbing the existing
  headline measure or typography scale.
*/
export function HeroPortrait() {
  return (
    <div className="relative flex w-full flex-col items-center">
      {/* Soft brand-tinted wash so the cutout separates from the farm photograph
          behind it without reading as a hard graphic overlay. Scoped to this
          column by the relative wrapper, so it cannot bleed over the copy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[34rem] w-[24rem] -translate-y-1/2 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <Image
          src={ceo.cutout}
          alt={`${ceo.name}, ${ceo.shortRole} of Next360`}
          width={1004}
          height={1287}
          priority
          sizes="(max-width: 1280px) 90vw, 24rem"
          className={`h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)] ${FIGURE_WIDTH}`}
        />

        {/* Profile label: reuses the hero badge treatment already in the design
            (white/10 fill, white/20 hairline border, backdrop blur) and is sized to
            the exact width of the cutout so the two read as one composed figure. */}
        <div
          className={`-mt-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center shadow-lg backdrop-blur-md ${FIGURE_WIDTH}`}
        >
          <p className="text-lg font-black leading-tight tracking-tight text-white">
            {ceo.name}
          </p>
          <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent">
            {ceo.shortRole}
          </p>
          <p className="mt-2 border-t border-white/15 pt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">
            Next360
          </p>
        </div>

        {/* Panel nav. Each entry is a plain in-page anchor to the profile card that
            already exists further down this page, so nothing is duplicated. */}
        <nav
          aria-label="Our Panel Members"
          className={`mt-8 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md ${FIGURE_WIDTH}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-300">
            Our Panel Members
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {panelMembers.map((member) => (
              <li key={member.name}>
                <a
                  href={`#${panelMemberId(member.name)}`}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  <span className="relative block h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/25 transition duration-300 ease-gentle group-hover:ring-brand-accent">
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span className="text-[11px] font-semibold leading-tight text-gray-200 transition-colors duration-300 ease-gentle group-hover:text-white">
                    {member.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle down to the published panel member section that sits directly
              below the founder profile. Same-page anchor, so it rides the existing
              smooth-scroll behaviour and needs no client state. */}
          <a
            href="#panel-members"
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-brand-accent transition duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-brand-accent hover:text-black"
          >
            View Panel Members
            <i
              className="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ease-gentle group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </nav>
      </div>
    </div>
  );
}