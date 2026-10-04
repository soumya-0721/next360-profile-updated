import Image from "next/image";
import Link from "next/link";

import { CeoProfile } from "@/components/ceo-profile";
import { Reveal } from "@/components/reveal";
import {
  ButtonLink,
  DarkSection,
  PageHero,
  SectionLabel,
  SectionTitle,
} from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import {
  academicCollaboration,
  company,
  companySnapshot,
  corporateStructure,
  deliverySteps,
  mentorship,
  collaborators,
  profileArchitecture,
  technologyDomains,
} from "@/lib/site";

export const metadata = metadataFor("/about");

/* Single source of truth: company facts come from site.ts, never restated here. */
const facts = [
  { label: "Extended network", value: company.team.extended },
  { label: "Developers", value: company.team.developers },
  { label: "Technology domains", value: String(technologyDomains.length) },
  ...(company.established
    ? [{ label: "Established", value: company.established }]
    : []),
];

/* Where each domain leads. Only routes that actually exist are linked. */
const domainHref: Record<string, string> = {
  "Digital Commerce": "/organic",
  "Business Technology": "/it-services",
  "AI & Computer Vision": "/capabilities",
  "Digital Infrastructure": "/capabilities",
  "Digital Advertising": "/capabilities",
  "Digital Growth": "/capabilities",
};

const narrativeHierarchy = [
  "Next360",
  "Six technology and business domains",
  "Next360 Organic Marketplace (flagship)",
  "Proven projects and deployments",
  "Slick Technologies",
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Executive Overview"
        title={
          <>
            A TECHNOLOGY +{" "}
            <span className="bg-gradient-to-r from-brand-accent to-brand-green bg-clip-text text-transparent">
              COMPANY, PROFILED.
            </span>
          </>
        }
        intro={company.positioning}
      >
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/20 pt-8">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="font-mono text-2xl font-black text-white">{fact.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel label="The Company Story" />
        <SectionTitle className="mt-2 max-w-xl">
          Establishment, journey <br />
          and milestones.
        </SectionTitle>
        <Reveal className="mt-6">
          <div className="rounded-[2rem] border border-gray-200 bg-gray-100 p-8 sm:p-10">
            <p className="max-w-3xl text-[15px] leading-relaxed text-gray-700">
              Verified items today are 6 technology and business domains, the flagship Next360 Organic
              Marketplace, a portfolio of ten proven projects and deployments, the Slick Technologies
              sub-company, and an extended network of 30+ professionals including 15+ developers.
              Everything else publishes only once approved against the source supplied for the
              profile.
            </p>
          </div>
        </Reveal>
        {/* Illustrative photography removed site-wide, so the vision/mission/philosophy
            trio now carries the full width of the section. */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal className="rounded-[2rem] border border-gray-200 bg-white p-7">
            <SectionLabel label="Our Vision" />
            <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{company.vision}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-[2rem] border border-gray-200 bg-white p-7">
            <SectionLabel label="Our Mission" />
            <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{company.mission}</p>
          </Reveal>
          <Reveal
            delay={160}
            className="rounded-[2rem] bg-brand-dark-green p-7 text-white"
          >
            <SectionLabel label="Our Philosophy" tone="dark" />
            <p className="mt-4 text-[15px] leading-relaxed text-green-100">
              {company.philosophy}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="verticals" className="mx-auto max-w-7xl px-6 pb-20">
        <SectionLabel label="Business Verticals" />
        <SectionTitle className="mt-2">
          Six domains, one <br />
          delivery organisation.
        </SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyDomains.map((domain, i) => (
            <Reveal
              key={domain.name}
              delay={i * 70}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-7 card-lift hover:border-brand-accent"
            >
              <span className="font-mono text-xs font-bold text-gray-400">
                Domain {domain.index}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{domain.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{domain.summary}</p>
              <ul className="mt-5 space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-gray-600"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={domainHref[domain.name] ?? "/capabilities"}
                className="mt-auto pt-6 text-sm font-bold text-brand-green-ink transition hover:text-black"
              >
                Explore {domain.name} &rarr;
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Corporate structure: the domain tree from the source of truth. */}
      <section id="structure" className="mx-auto max-w-7xl px-6 pb-20">
        <SectionLabel label="Corporate Structure" />
        <SectionTitle className="mt-2">
          One organisation, <br />
          six branches.
        </SectionTitle>
        <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-50 px-6 py-4">
          <p className="font-mono text-sm font-semibold text-gray-700">
            {corporateStructure.root}: {corporateStructure.rootNote}
          </p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corporateStructure.branches.map((branch, i) => (
            <Reveal
              key={branch.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-7 card-lift hover:border-brand-accent"
            >
              <span className="font-mono text-xs font-bold text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold">{branch.name}</h3>
              {branch.note ? (
                <p className="mt-2 text-sm font-semibold text-brand-green-ink">{branch.note}</p>
              ) : null}
              <ul className="mt-4 space-y-1.5">
                {branch.children.map((child) => (
                  <li key={child} className="text-sm leading-relaxed text-gray-600">
                    {child}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 rounded-[2rem] bg-gray-100 p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            How we are organised
          </p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {narrativeHierarchy.map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-snug text-gray-700"
              >
                <span className="font-mono text-xs font-bold text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <DarkSection id="methodology">
        <SectionLabel label="Our Execution Model" tone="dark" />
        <SectionTitle tone="dark" className="mt-3 max-w-2xl">
          Identify, build, deploy, measure.
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
          {company.approach}
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.no}
              delay={i * 80}
              /* Without the photo strip the icon carries the card header, so the
                 card is laid out as a full-height column and stays visually even. */
              className="flex h-full flex-col rounded-3xl border border-gray-800 bg-[#111] p-7 card-lift hover:border-brand-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent">
                  <i className={`${step.icon} text-sm text-black`} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold text-brand-accent">{step.no}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.note}</p>
            </Reveal>
          ))}
        </ol>
      </DarkSection>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel label="Industry & Academic Collaboration" />
        <SectionTitle className="mt-3 max-w-2xl">Open to working with institutions.</SectionTitle>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academicCollaboration.map((entry, i) => (
            <Reveal
              key={entry.title}
              delay={i * 60}
              className="h-full rounded-[2rem] border border-gray-200 bg-white p-7 card-lift hover:border-brand-accent"
            >
              <h3 className="text-lg font-bold">{entry.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{entry.note}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="border border-gray-200 bg-white p-7">
            <SectionLabel label="Mentorship & Guidance" />
            <ul className="mt-4 space-y-5">
              {mentorship.map((entry) => (
                <li key={entry.name} className="flex gap-4">
                  {entry.photo ? (
                    <Image
                      src={entry.photo}
                      alt={`Portrait of ${entry.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-base font-bold">{entry.name}</h3>
                    <p className="text-sm font-semibold text-brand-green-ink">{entry.title}</p>
                    {entry.note ? (
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{entry.note}</p>
                    ) : null}
                    {entry.profile ? (
                      <a
                        href={entry.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-[13px] font-bold underline-offset-4 hover:underline"
                      >
                        {entry.profileLabel} &rarr;
                        <span className="sr-only"> for {entry.name}</span>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="bg-gray-100 p-7">
            <SectionLabel label="Strategic Collaborators" />
            <ul className="mt-4 space-y-4">
              {collaborators.map((entry) => (
                <li key={entry.name} className="flex items-center gap-4">
                  {entry.logo ? (
                    <Image
                      src={entry.logo}
                      alt={`${entry.name} logo`}
                      width={112}
                      height={40}
                      className="h-10 w-auto shrink-0 rounded-lg border border-gray-200 bg-white object-contain p-1.5"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-base font-bold">{entry.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{entry.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Leadership. Sits before the snapshot because on a company profile the
          first question a buyer asks is who is accountable for the work. */}
      <CeoProfile />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionLabel label="Company Snapshot" />
        <SectionTitle className="mt-3 max-w-2xl">The essentials, in one table.</SectionTitle>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-gray-200 bg-white">
          <dl>
            {companySnapshot.map((row, i) => (
              <div
                key={row.label}
                className={`grid gap-1 px-6 py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6 sm:px-8 ${
                  i % 2 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {row.label}
                </dt>
                <dd className="text-[15px] leading-relaxed text-gray-800">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionLabel label="Corporate Profile" />
        <SectionTitle className="mt-3 max-w-2xl">The thirteen-part document.</SectionTitle>
        <ol className="mt-8 grid gap-2 sm:grid-cols-2">
          {profileArchitecture.map((part) => (
            <li
              key={part.no}
              className="flex items-baseline gap-4 border-b border-gray-100 py-3"
            >
              <span className="font-mono text-xs font-bold text-gray-400">{part.no}</span>
              <span className="text-sm font-semibold">{part.title}</span>
              <span className="ml-auto hidden text-[13px] text-gray-400 sm:inline">{part.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem] bg-black px-8 py-16 text-center text-white sm:px-14">
          <SectionLabel label="Contact" tone="dark" className="justify-center" />
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Request the full Next360 company profile.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            The master profile is available as a document for proposals, tenders and partnership
            review.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="dark">
              Request the full profile
            </ButtonLink>
            <ButtonLink href="/capabilities" variant="outline">
              Review Capabilities
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}