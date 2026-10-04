import Link from "next/link";

import { Reveal } from "@/components/reveal";
import {
  ButtonLink,
  DarkSection,
  ImageCard,
  PageHero,
  SectionLabel,
  SectionTitle,
} from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { company, photos, technologyDomains } from "@/lib/site";

export const metadata = metadataFor("/capabilities");

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        label="Capabilities"
        title={
          <>
            WHAT WE CAN <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-green bg-clip-text text-transparent">
              DELIVER.
            </span>
          </>
        }
        intro="Six technology and business domains, plus technology published only where it connects to real projects and capabilities."
      />

      {/* Six domains, architecture-level capability groups. */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel label="Capability Groups" />
        <SectionTitle className="mt-2 max-w-2xl">
          Products and operations, under one roof.
        </SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyDomains.map((group, i) => (
            <Reveal
              key={group.name}
              delay={i * 70}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-8 card-lift hover:border-brand-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent">
                  <i className={`${group.icon} text-sm text-black`} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold text-gray-400">{group.index}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{group.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{group.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-gray-100 p-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Vertical capability inventories
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              Agritech and IT Services keep their own full capability inventories, verified row by
              row before anything publishes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/agritech" variant="dark">
              Agritech inventory
            </ButtonLink>
            <ButtonLink href="/it-services" variant="dark">
              IT Services inventory
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Technology: stated as a principle, proven in the portfolio. */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-dark-green p-8 text-white md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-brand-dark-green-ring opacity-50" />
          <div className="relative z-10 max-w-2xl">
            <SectionLabel label="Technology Capabilities" tone="dark" />
            <SectionTitle tone="dark" className="mt-2">
              Technology connected to real work.
            </SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-green-100">
              Every stack claim on this site ties to an actual project or capability &mdash; see the
              ten proven deployments. There is no logo list here, because an unconnected stack claim
              is not a capability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/projects">See the proof</ButtonLink>
              <ButtonLink href="/contact" variant="white">
                Scope a requirement
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Next360 Organic keeps its photograph; the Projects half becomes a text card
          so the pair stays balanced without the deleted infrastructure image. */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <ImageCard
            href="/organic"
            src={photos.organic}
            alt="Produce market"
            title="Next360 Organic"
            description="The flagship venture."
          />
          <Reveal delay={80}>
            <Link
              href="/projects"
              className="group flex h-full min-h-[18rem] flex-col justify-end rounded-[2rem] bg-brand-dark-green p-8 text-white card-lift hover:bg-brand-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent">
                <i className="fa-solid fa-diagram-project text-sm text-black" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Projects</h3>
              <p className="mt-3 text-sm leading-relaxed text-green-100">
                Ten proven projects and deployments.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-accent">
                Open the portfolio
                <i
                  className="fa-solid fa-arrow-right -rotate-45 text-[10px] transition-transform duration-300 ease-gentle group-hover:rotate-0"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <DarkSection>
        <SectionLabel label="Contact" tone="dark" />
        <SectionTitle tone="dark" className="mt-3 max-w-2xl">
          Scope a requirement with us.
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">{company.tagline}</p>
        <Reveal delay={70}>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Start an enquiry</ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Read the profile
            </ButtonLink>
          </div>
        </Reveal>
      </DarkSection>
    </>
  );
}