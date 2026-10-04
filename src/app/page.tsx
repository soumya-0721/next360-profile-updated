import Image from "next/image";
import Link from "next/link";

import { CeoProfile } from "@/components/ceo-profile";
import { HeroPortrait } from "@/components/hero-portrait";
import { Reveal } from "@/components/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui";
import {
  capabilityLists,
  collaborators,
  company,
  mentorship,
  panelMembers,
  photos,
  projects,
  slickProducts,
  teamCapabilities,
  technologyDomains,
} from "@/lib/site";

/* Which deployments prove each domain. Anything unproven stays unpublished. */
const domainProof: Record<string, string[]> = {
  "Digital Commerce": ["Next360 Organic Marketplace", "Vanyabhumi"],
  "Business Technology": [
    "Facial Recognition Attendance System",
    "Hospital Management System",
    "CRM & IVR Systems",
    "Ayurvena",
  ],
  "AI & Computer Vision": [
    "ORR Intelligent CCTV & Vehicle Monitoring",
    "Facial Recognition Attendance System",
  ],
  "Digital Infrastructure": [
    "Mallaram Digital Village",
    "ORR Intelligent CCTV & Vehicle Monitoring",
    "EV Charging Solutions",
  ],
  "Digital Advertising": ["Digital Screens & Transit Advertising"],
  "Digital Growth": [],
};

const domainIcons: Record<string, string> = {
  "Digital Commerce": "fa-solid fa-store",
  "Business Technology": "fa-solid fa-diagram-project",
  "AI & Computer Vision": "fa-solid fa-eye",
  "Digital Infrastructure": "fa-solid fa-tower-broadcast",
  "Digital Advertising": "fa-solid fa-rectangle-ad",
  "Digital Growth": "fa-solid fa-arrow-trend-up",
};

/* Network portraits, served locally so the page never depends on a CDN. */
const networkAvatars = [
  "/images/network/network-1.jpg",
  "/images/network/network-2.jpg",
  "/images/network/network-3.jpg",
  "/images/network/network-4.jpg",
];

/* Anchor id shared by the hero panel nav and the existing member cards, so the
   thumbnails scroll to the profile that is already published on this page. */
function panelMemberId(name: string) {
  return `panel-member-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

const ArrowButton = ({
  href,
  children,
  tone = "accent",
}: {
  href: string;
  children: string;
  tone?: "accent" | "dark" | "white" | "outline-light";
}) => {
  const tones = {
    accent:
      "bg-brand-accent text-black hover:bg-brand-green hover:text-black shadow-[0_4px_20px_rgba(204,255,0,0.3)]",
    dark: "bg-black text-white hover:bg-gray-800",
    white: "bg-white text-black hover:bg-brand-accent",
    "outline-light": "border border-white/25 text-white hover:bg-white hover:text-black",
  } as const;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wide transition duration-300 ease-gentle hover:-translate-y-0.5 active:translate-y-0 ${tones[tone]}`}
    >
      {children}
      <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] transition-transform duration-300 ease-gentle group-hover:rotate-0" />
    </Link>
  );
};

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src={photos.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-drift"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        {/* Content column keeps its original max-w-3xl measure. The portrait
            occupies a sibling column, so the two can never overlap. */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-36 xl:grid-cols-[minmax(0,48rem)_minmax(0,24rem)]">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-2 pr-4 shadow-lg backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-brand-dark">
                  360
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-white">
                  Digital Commerce + AI + Infrastructure
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-xl sm:text-6xl lg:text-8xl">
                BUILDING
                <br />
                <span className="bg-gradient-to-r from-brand-accent to-brand-green bg-clip-text text-transparent">
                  TECHNOLOGY.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-4 max-w-xl text-xl font-bold leading-relaxed text-white drop-shadow-md">
                {company.tagline}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-gray-200 drop-shadow-md">
                Digital commerce, AI, business technology and infrastructure solutions built for
                real-world execution.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                <ArrowButton href="/organic">See the flagship project</ArrowButton>
                <ArrowButton href="/contact" tone="outline-light">
                  Request Company Profile
                </ArrowButton>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {networkAvatars.map((avatar) => (
                    <Image
                      key={avatar}
                      src={avatar}
                      alt="Network member"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="flex items-center gap-2 text-sm font-medium text-gray-200">
                  <i className="fa-solid fa-users text-brand-accent" aria-hidden="true" />
                  {company.team.extended} professionals across the extended network
                </p>
              </div>
            </Reveal>
          </div>

          <HeroPortrait />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <SectionLabel label="Our Technology & Business Verticals" />
          <SectionTitle className="mt-2">
            Six Domains, One <br />
            Delivery Team.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            {company.positioning}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyDomains.map((domain, i) => {
            const proof = domainProof[domain.name] ?? [];
            return (
              <Reveal
                key={domain.name}
                delay={i * 70}
                className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-7 card-lift hover:border-brand-accent"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent">
                    <i
                      className={`${domainIcons[domain.name] ?? domain.icon} text-sm text-black`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-mono text-xs font-bold text-gray-400">{domain.index}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{domain.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{domain.summary}</p>
                <div className="mt-auto pt-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    {proof.length ? "Proven by" : "Deployments"}
                  </p>
                  {proof.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {proof.map((name) => (
                        <li key={name}>
                          <Link
                            href="/projects"
                            className="group/proof inline-flex items-start gap-2 text-[13px] font-semibold leading-snug text-gray-700 hover:text-black"
                          >
                            <i
                              className="fa-solid fa-arrow-right mt-1 text-[10px] text-brand-green"
                              aria-hidden="true"
                            />
                            <span className="underline-offset-4 group-hover/proof:underline">
                              {name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[13px] leading-snug text-gray-400">
                      No deployments published in this domain yet.
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black text-white">
            <div className="absolute inset-0">
              <Image
                src={photos.organic}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            </div>
            <div className="relative z-10 p-8 md:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase text-black">
                Flagship venture
              </span>
              <h2 className="mt-6 text-4xl font-black leading-[0.9] tracking-tighter sm:text-5xl md:text-7xl">
                NEXT360
                <br />
                <span className="bg-gradient-to-r from-brand-accent to-brand-green bg-clip-text text-transparent">
                  ORGANIC.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
                A verification-first marketplace focused on organic, natural and eco-friendly products,
                connecting consumers, farmers, producers, retailers and institutions through
                verification, traceability and trusted commerce. It shows that Next360 does not merely
                provide technology services, it builds technology-driven businesses and products.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Agriculture",
                  "Organic Products",
                  "Digital Commerce",
                  "Technology",
                  "Operations",
                  "Customer Experience",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <ArrowButton href="/organic">Open the flagship page</ArrowButton>
                <ArrowButton href="/projects" tone="outline-light">
                  See all proven projects
                </ArrowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel label="Proven Projects & Deployments" />
            <SectionTitle className="mt-2">
              Built, Deployed, <br />
              In Real Environments.
            </SectionTitle>
          </Reveal>
          <Reveal delay={80}>
            <ArrowButton href="/projects" tone="dark">
              Open the portfolio
            </ArrowButton>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 70}
              className="flex h-full min-h-[16rem] flex-col justify-between rounded-[2rem] border border-gray-200 bg-white p-7 card-lift hover:border-brand-accent"
            >
              <span className="font-mono text-xs font-bold text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{project.category}</p>
                <p className="mt-4 line-clamp-4 text-[13px] leading-relaxed text-gray-400">
                  {project.overview}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel label="Sub-company" />
            <SectionTitle className="mt-2">
              SLICK Technologies, <br />
              Our Sub-Company.
            </SectionTitle>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
              SLICK Technologies, a Next360 sub-company building its own software products.
              <br />
              Its products show Next360&apos;s own software-product and innovation capability.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ArrowButton href="/slick" tone="dark">
              Explore SLICK Technologies
            </ArrowButton>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slickProducts.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 60}
              className="flex h-full flex-col rounded-[2rem] bg-gray-100 p-7 card-lift hover:bg-brand-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <i className="fa-solid fa-cube text-sm text-black" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{product.name}</h3>
              {product.positioning ? (
                <p className="mt-1 text-sm font-semibold text-brand-green-ink">
                  {product.positioning}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2">
                {product.scope.map((chip) => (
                  <li key={chip} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green"
                      aria-hidden="true"
                    />
                    <span>{chip}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <SectionLabel label="Capabilities" />
          <SectionTitle className="mt-2">
            Products And Operations, <br />
            Under One Roof.
          </SectionTitle>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilityLists.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 80}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent">
                  <i className={`${group.icon} text-sm text-black`} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold text-gray-400">{group.index}</span>
              </div>
              <h3 className="mt-6 text-3xl font-black tracking-tight">{group.title}</h3>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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
        <Reveal>
          <div className="mt-6 rounded-[2rem] bg-gray-100 p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Technology capabilities
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              Technology is published only where it connects to a real project or capability. There
              is no logo list here, because an unconnected stack claim is not a capability.
            </p>
            <div className="mt-5">
              <ArrowButton href="/capabilities" tone="dark">
                See technology mapped to work
              </ArrowButton>
            </div>
          </div>
        </Reveal>
        </section>

{/* Founder: one premium profile section, not a card grid. */}
      <CeoProfile />

      <section id="panel-members" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-20">
        <Reveal className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Mentorship &amp; Guidance
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Next360 is guided by experienced technology, business and startup professionals.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mentorship.map((mentor) => (
              <article
                key={mentor.name}
                className="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={mentor.photo}
                    alt={`Portrait of the ${mentor.title} at ${mentor.org}`}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-tight text-neutral-900">
                      {mentor.title}
                    </h3>
                    <p className="text-[13px] font-medium text-neutral-500">{mentor.org}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{mentor.note}</p>
                <a
                  href={mentor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/prof mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-bold text-neutral-900 underline-offset-4 hover:underline"
                >
                  {mentor.profileLabel}
                  <span className="transition-transform group-hover/prof:-translate-y-0.5 group-hover/prof:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>
          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-gray-500">
            Panel Members
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {panelMembers.map((member) => (
              <li
                key={member.name}
                id={panelMemberId(member.name)}
                className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white"
              >
                <div className="relative h-64 w-full bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col p-5">
                  <p className="text-base font-bold leading-tight text-neutral-900">{member.name}</p>
                  <p className="mt-1 text-[13px] font-medium text-neutral-500">{member.role}</p>
                  {member.profile ? (
                    <a
                      href={member.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[13px] font-bold text-neutral-900 underline-offset-4 hover:underline"
                    >
                      LinkedIn <span>↗</span>
                      <span className="sr-only">profile of {member.name}</span>
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="mt-2">
            <SectionLabel label="Strategic Collaborators" />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
              The partner network enables Next360 to combine internal product development
              capabilities with specialized expertise across technology, AI, sales, marketing and
              implementation.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {collaborators.map((partner) => (
                <li key={partner.name} className="flex">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={384}
                      height={56}
                      className="h-14 w-auto max-w-[200px] rounded-xl border border-gray-200 bg-white object-contain p-2.5"
                    />
                  ) : (
                    <span className="flex h-14 w-full max-w-[200px] items-center justify-center rounded-xl border border-gray-200 bg-white p-2.5 text-center text-[13px] font-bold text-gray-500">
                      {partner.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {collaborators.map((entry) => (
                <li
                  key={entry.name}
                  className="rounded-[1.75rem] border border-gray-200 bg-white p-6"
                >
                  <p className="text-base font-bold text-neutral-900">{entry.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{entry.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        {/* The illustrative team photo is gone, so the two cards below carry the
            full width of the section and are balanced by their own min-heights. */}
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-8">
              <SectionLabel label="Our Team" />
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                Next360 operates with an extended network of{" "}
                <span className="font-mono text-xl font-black text-gray-900">
                  {company.team.extended}
                </span>{" "}
                professionals, combining the internal team with specialists from our collaborating
                partners. Role titles and photographs are not published until confirmed.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {teamCapabilities.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[13px] font-semibold text-gray-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80} className="md:col-span-2">
            <div className="relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-dark-green p-8 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[20px] border-brand-dark-green-ring opacity-50" />
              <div className="absolute -left-10 top-20 h-32 w-32 rounded-full border-[10px] border-brand-dark-green-ring opacity-30" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold">
                  Extended
                  <br />
                  Network
                </h3>
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-bold">
                  <span className="text-brand-green">{company.team.extended}</span>
                </div>
                <dl className="mt-4 space-y-1 text-xs font-medium text-green-200">
                  <div className="flex justify-between gap-3">
                    <dt>Developers</dt>
                    <dd className="font-bold text-white">{company.team.developers}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Interns</dt>
                    <dd className="font-bold text-white">{company.team.interns}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 mx-4 mb-10 mt-4 rounded-[2.5rem] bg-[#0a0a0a] py-24 text-white md:mx-6">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <SectionLabel label="Contact" tone="dark" className="justify-center" />
            <SectionTitle tone="dark" className="mt-3 text-center">
              Let&apos;s Talk About It.
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Request the full company profile, scope a digital commerce, AI or infrastructure
              requirement, or start a partnership conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ArrowButton href="/contact">Contact Next360</ArrowButton>
              <ArrowButton href="/about" tone="white">
                Read the profile
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}