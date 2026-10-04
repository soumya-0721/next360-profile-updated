import type { Metadata } from "next";

const SITE_URL = "https://next360.in";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
};

const SEO_KEYWORDS =
  "Next360 Organic,flagship Agritech initiative,organic products India,digital commerce India,agriculture technology,agricultural ecosystems,supply chains,market access,Agritech Hyderabad,IT Services Hyderabad,software development Hyderabad,managed technology services,Slick Technologies,SlickCode,SlickSEO,Slixo,Organize,AI-assisted development,Save now. Find anytime.,Next360 Hyderabad Telangana,India's first certified organic marketplace,certified organic products India,verified organic marketplace India,traceable organic products India,NPOP certified organic India,Jaivik Bharat certified products,organic certificate based platform India,buy certified organic online India,organic farmers marketplace India,eco-friendly natural products India,best organic marketplace Hyderabad,top certified organic company Hyderabad,best organic products Hyderabad,top organic marketplace India";

const DEFAULT_DESCRIPTION =
  "Next360 builds digital commerce, business technology, AI, infrastructure, advertising and growth solutions in Hyderabad. Flagship: Next360 Organic. Talk to us.";

const SHORT_DESCRIPTION =
  "Next360 builds digital commerce, business technology, AI, infrastructure, advertising and growth solutions. Flagship: Next360 Organic.";

export const SEO_ROUTES: Record<string, SeoEntry> = {
  "/": { title: "Digital Commerce, AI & Infrastructure", description: DEFAULT_DESCRIPTION, keywords: SEO_KEYWORDS },
  "/about": {
    title: "About Next360",
    description: DEFAULT_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  },
  "/capabilities": {
    title: "Capabilities",
    description: SHORT_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  },
  "/projects": {
    title: "Projects",
    description: SHORT_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  },
  "/organic": {
    title: "Next360 Organic",
    description: SHORT_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  },
  "/agritech": { title: "Agritech", description: SHORT_DESCRIPTION, keywords: SEO_KEYWORDS },
  "/it-services": { title: "IT Services", description: SHORT_DESCRIPTION, keywords: SEO_KEYWORDS },
  "/slick": { title: "SLICK Technologies", description: SHORT_DESCRIPTION, keywords: SEO_KEYWORDS },
  "/contact": { title: "Contact", description: SHORT_DESCRIPTION, keywords: SEO_KEYWORDS },
};

export function metadataFor(pathname: string): Metadata {
  const entry = SEO_ROUTES[pathname] ?? SEO_ROUTES["/"];
  const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords.split(","),
    robots: "index, follow, max-image-preview:large",
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      siteName: "Next360",
      locale: "en_IN",
      type: "website",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  };
}