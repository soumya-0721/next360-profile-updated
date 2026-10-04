import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui";
import { ceo } from "@/lib/site";

/*
  The founder profile is a single two-column section rather than a card grid.
  Image sits left at ~40% on desktop and stacks above the copy on mobile.
  The photograph is rendered untouched at its original aspect ratio.
*/
export function CeoProfile() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20" aria-labelledby="ceo-profile-name">
      <Reveal>
        <SectionLabel label="Leadership" />
        <SectionTitle className="mt-3 max-w-2xl">Who leads Next360.</SectionTitle>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid items-center gap-10 rounded-[2rem] border border-gray-200 bg-white p-8 sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Left: the existing CEO photograph, unaltered. */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-100">
              <Image
                src={ceo.photo}
                alt="Samhith Reddy Sangam, Founder &amp; Chief Executive Officer of Next360"
                width={1086}
                height={1448}
                sizes="(max-width: 1024px) (max-width: 640px) 100vw, 40vw"
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Right: all founder content. */}
          <div>
            <h3
              id="ceo-profile-name"
              className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Samhith Reddy Sangam
            </h3>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-brand-green-ink sm:text-base">
              Founder &amp; Chief Executive Officer
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
              Founder and Chief Executive Officer at Next360, leading the company’s vision, strategy,
              and business growth. Drives Next360’s mission to build technology-driven solutions
              across organic commerce, healthcare, and emerging sectors. Focused on innovation,
              sustainability, and creating meaningful opportunities that contribute to a stronger,
              future-ready Bharat.
            </p>

            {/* Deliberately a refined external link, not a large CTA. */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                CEO Portfolio
              </p>
              <a
                href="https://samhithreddysangam.portfolio.next360.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 text-base font-bold text-gray-900 underline-offset-[6px] transition-colors duration-300 ease-gentle hover:text-brand-green-ink hover:underline"
              >
                <span>View Portfolio</span>
                <i
                  className="fa-solid fa-arrow-up-right-from-square text-xs text-brand-green-ink transition-transform duration-300 ease-gentle group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  &#8212; opens Samhith Reddy Sangam’s personal portfolio in a new tab
                </span>
              </a>
              <p className="mt-2 text-[13px] text-gray-400">
                samhithreddysangam.portfolio.next360.in
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}