import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { company, slickDescriptor, slickProducts } from "@/lib/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Digital Commerce, AI & Infrastructure",
  description:
    "Next360 builds digital commerce, business technology, AI, infrastructure, advertising and growth solutions in Hyderabad. Flagship: Next360 Organic. Talk to us.",
  keywords: [
    "Next360 Organic",
    "flagship Agritech initiative",
    "organic products India",
    "digital commerce India",
    "agriculture technology",
    "Agritech Hyderabad",
    "IT Services Hyderabad",
    "Slick Technologies",
    "SlickCode",
    "SlickSEO",
    "Slixo",
    "Organize",
  ],
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "Digital Commerce, AI & Infrastructure",
    description:
      "Next360 builds digital commerce, business technology, AI, infrastructure, advertising and growth solutions. Flagship: Next360 Organic.",
    siteName: "Next360",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Commerce, AI & Infrastructure",
    description:
      "Next360 builds digital commerce, business technology, AI, infrastructure, advertising and growth solutions. Flagship: Next360 Organic.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://next360.in/#organization",
  url: "https://next360.in",
  name: "Next360",
  description: company.positioning,
  slogan: company.tagline,
  email: company.contact.email,
  telephone: company.contact.phone,
  areaServed: ["Hyderabad", "Telangana", "India"],
  brand: slickProducts.map((product) => product.name),
  subOrganization: {
    "@type": "Organization",
    name: "SLICK Technologies",
    description: slickDescriptor,
  },
  knowsAbout: [
    ...slickProducts.flatMap((product) => [...product.scope]),
    "certified organic marketplace",
    "verification-first commerce",
    "organic traceability",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "T-Hub Phase 2 Launch, 20 Inorbit Mall Road, Vittal Rao Nagar, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  legalName: company.legalName,
};

const footerNavigate = [
  { href: "/about", label: "About Next360" },
  { href: "/organic", label: "Next360 Organic" },
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

const footerVentures = [
  { href: "/organic", label: "Next360 Organic" },
  { href: "/agritech", label: "Agritech" },
  { href: "/it-services", label: "IT Services" },
  { href: "/slick", label: "SLICK Technologies" },
];

const footerLegal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/legal", label: "Legal Notice" },
];

function SiteFooter() {
  return (
    <footer aria-label="Site footer" className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <a
              href={`tel:${company.contact.phone.replace(/[^+\d]/g, "")}`}
              className="text-lg font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              {company.contact.phone}
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="mt-3 block break-all text-3xl font-bold tracking-tight text-neutral-900 transition-colors hover:text-lime-700 sm:text-4xl"
            >
              {company.contact.email}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              T-Hub Phase 2, Hyderabad &middot; CIN {company.registration.cin}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8" aria-label="Footer">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Navigate
              </h2>
              <ul className="mt-4 space-y-3">
                {footerNavigate.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-semibold text-neutral-900 transition-colors hover:text-lime-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Ventures
              </h2>
              <ul className="mt-4 space-y-3">
                {footerVentures.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-lg font-semibold text-neutral-900 transition-colors hover:text-lime-700"
                    >
                      {item.label}
                      <i
                        className="fa-solid fa-arrow-up-right-from-circle text-xs text-neutral-400 transition-colors group-hover:text-neutral-900"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <p
          aria-hidden="true"
          className="mt-14 select-none text-center text-[13vw] font-black leading-none tracking-tighter text-neutral-900 md:text-[10vw]"
        >
          NEXT360
        </p>
      </div>
      <div className="bg-neutral-950 text-sm text-neutral-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="theme-color" content="#0f0f0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand-accent focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-brand-dark"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}