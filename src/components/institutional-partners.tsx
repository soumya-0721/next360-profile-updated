"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { institutionalPartners } from "@/lib/site";

/*
  Institutional Partner gallery: logos only, same tile language as the
  collaborator marks (white background, subtle border, rounded). An entry
  without a logo file renders a neutral placeholder mark until the real asset
  is added, so the grid never shows a broken image or an invented logo.
*/
function InstitutionalLogo({
  partner,
}: {
  partner: (typeof institutionalPartners)[number];
}) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(partner.logo) && !failed;

  if (!showLogo) {
    return (
      <div
        role="img"
        aria-label="Institutional partner logo placeholder"
        className="flex h-20 w-full items-center justify-center rounded-xl border border-gray-200 bg-white"
      >
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8 text-gray-200"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="40" height="40" rx="12" fill="currentColor" />
          <rect x="17" y="17" width="14" height="14" rx="4" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={partner.logo}
      alt={`${partner.name} logo`}
      width={200}
      height={80}
      className="h-20 w-full rounded-xl border border-gray-200 bg-white object-contain p-4"
      onError={() => setFailed(true)}
    />
  );
}

export function InstitutionalPartnerLogos() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {institutionalPartners.map((partner, i) => {
        const logo = <InstitutionalLogo partner={partner} />;

        return (
          <li key={partner.name || `partner-${i}`} className="flex">
            {partner.href ? (
              /*
                The whole tile is the link target, so the card is clickable
                everywhere, not just on the logo. Hover lifts the card and adds
                a shadow; the focus ring keeps it keyboard-accessible.
              */
              <Link
                href={partner.href}
                aria-label={`Open the ${partner.name} institutional partner profile`}
                className="group flex w-full rounded-xl transition duration-300 ease-gentle hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-ink focus-visible:ring-offset-2"
              >
                {logo}
              </Link>
            ) : (
              logo
            )}
          </li>
        );
      })}
    </ul>
  );
}
