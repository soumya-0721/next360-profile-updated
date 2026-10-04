import Link from "next/link";

import { Reveal } from "@/components/reveal";
import {
  ButtonLink,
  DarkSection,
  PageHero,
  SectionLabel,
  SectionTitle,
} from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { capabilityLists } from "@/lib/site";

export const metadata = metadataFor("/it-services");

const itServices = capabilityLists[1]!;

const crossLinks = [
  {
    href: "/capabilities",
    icon: "fa-solid fa-layer-group",
    title: "Capabilities",
    description: "All six domains in full, plus technology mapped to real work.",
    action: "Review capabilities",
  },
  {
    href: "/projects",
    icon: "fa-solid fa-diagram-project",
    title: "Projects",
    description: "Ten proven projects and deployments, led by Next360 Organic.",
    action: "Open the portfolio",
  },
] as const;

/*
  The eleven IT Services capabilities are grouped into three delivery areas so
  the page explains how they work together instead of repeating a flat list.
  Grouping is editorial only; the underlying capability names are unchanged.
*/
const deliveryAreas = [
  {
    index: "01",
    title: "Software & Applications",
    icon: "fa-solid fa-code",
    items: [
      "Software development",
      "Web and mobile applications",
      "Backend engineering",
      "Enterprise software",
    ],
    note: "Product and platform engineering, from web and mobile front ends through backend services to enterprise-grade software.",
  },
  {
    index: "02",
    title: "Infrastructure & Operations",
    icon: "fa-solid fa-server",
    items: ["IT infrastructure", "Monitoring", "Asset management"],
    note: "The operational layer: infrastructure that stays watched, documented and accounted for.",
  },
  {
    index: "03",
    title: "Support & Managed Services",
    icon: "fa-solid fa-life-ring",
    items: [
      "User and endpoint support",
      "Service desk",
      "Managed technology services",
      "Technical projects",
    ],
    note: "Day-to-day technology responsibility, taken over as a managed capability rather than ad-hoc fixes.",
  },
];

export default function ItServicesPage() {
  return (
    <>
      <PageHero
        label="IT Services"
        title="IT SERVICES."
        intro="Software engineering, IT operations, support, infrastructure and managed technology services, delivered as an extension of your team. One delivery team behind the Business Technology, AI and Digital Infrastructure domains."
      >
        <div className="mt-8">
          <ButtonLink href="/contact">Discuss an IT requirement</ButtonLink>
        </div>
      </PageHero>

      {/* Full eleven-capability inventory. */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel label="Capabilities" />
        <SectionTitle className="mt-2 max-w-2xl">Eleven capabilities, one accountable team.</SectionTitle>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          Each capability row publishes only once verified.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itServices.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 40}
              className="flex h-full items-center gap-4 rounded-[1.5rem] border border-gray-200 bg-white px-6 py-5 card-lift hover:border-brand-accent"
            >
              <span className="font-mono text-xs font-bold text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-semibold leading-snug">{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How those capabilities group into delivery areas. */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionLabel label="Delivery Areas" />
        <SectionTitle className="mt-2 max-w-2xl">Three ways we take responsibility.</SectionTitle>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deliveryAreas.map((area, i) => (
            <Reveal
              key={area.index}
              delay={i * 70}
              className="flex h-full flex-col rounded-[2rem] bg-gray-100 p-8 card-lift hover:bg-brand-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <i className={`${area.icon} text-black`} aria-hidden="true" />
              </span>
              <span className="mt-6 font-mono text-xs font-bold text-gray-500">{area.index}</span>
              <h3 className="mt-6 text-2xl font-bold">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.note}</p>
              <ul className="mt-5 space-y-2.5">
                {area.items.map((item) => (
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
      </section>

      {/* The two cross-links used to be image cards. With photography removed they
          become full-height text panels so the section keeps its two-up rhythm
            and both destinations survive. */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {crossLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full min-h-[16rem] flex-col justify-between rounded-[2rem] border border-gray-200 bg-gray-100 p-8 card-lift hover:border-brand-accent hover:bg-brand-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <i className={`${item.icon} text-black`} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-black">
                  {item.action}
                  <i
                    className="fa-solid fa-arrow-right -rotate-45 text-[10px] transition-transform duration-300 ease-gentle group-hover:rotate-0"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <DarkSection>
        <SectionLabel label="Quality & Governance" tone="dark" />
        <SectionTitle tone="dark" className="mt-3 max-w-2xl">
          Operational discipline and controls.
        </SectionTitle>
        <p className="mt-4 max-w-2xl text-gray-400">
          Quality, security and governance detail forms part eleven of the company profile. Controls
          and certifications are published only once verified &mdash; request documentation for what
          you need.
        </p>
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="white">
              Request documentation
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Read the profile
            </ButtonLink>
          </div>
        </Reveal>
      </DarkSection>
    </>
  );
}