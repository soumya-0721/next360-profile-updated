"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const primaryNav = [
  { href: "/agritech", label: "Agritech" },
  { href: "/it-services", label: "IT Services" },
  { href: "/organic", label: "Next360 Organic" },
  { href: "/projects", label: "Projects" },
];

const secondaryNav = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get In Touch" },
];

const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Next360" },
  { href: "/agritech", label: "Agritech" },
  { href: "/it-services", label: "IT Services" },
  { href: "/organic", label: "Next360 Organic" },
  { href: "/projects", label: "Projects" },
  { href: "/slick", label: "SLICK Technologies" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-4 transition-all duration-300 ease-smooth md:px-6 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/90 px-6 shadow-lg backdrop-blur-md transition-all duration-300 ease-smooth ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/next360-navlogo.png"
            alt="Next360 logo"
            /* The asset is a square 1254x1254 canvas, so the intrinsic size is declared
               in full and CSS scales it down. Declaring anything else makes the
               rendered box disagree with the attributes on only one axis. */
            width={1254}
            height={1254}
            sizes="160px"
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-green-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-black shadow-sm transition hover:shadow-md"
          >
            Contact Us
            <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold transition hover:text-brand-green-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="text-gray-800 focus:outline-none md:hidden"
        >
          <span className="sr-only">Menu</span>
          <i
            className={`fa-solid text-xl transition-transform duration-300 ease-smooth ${
              open ? "fa-xmark rotate-90" : "fa-bars"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute left-4 right-4 top-20 z-40 rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ease-smooth md:hidden ${
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none -translate-y-2 scale-[0.97] opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {mobileNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`transition-all duration-300 ease-gentle hover:translate-y-0 hover:opacity-100 ${
                item.label === "Home"
                  ? "font-semibold text-black"
                  : "text-gray-600 hover:text-black"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
            >
              {item.label}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </nav>
  );
}