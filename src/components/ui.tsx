import Image from "next/image";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

/* Reference section marker: uppercase tracked label (dot removed per owner request). */
export function SectionLabel({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`text-sm font-bold uppercase tracking-widest ${
          tone === "dark" ? "text-brand-accent" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function SectionTitle({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-bold leading-tight md:text-5xl ${
        tone === "dark" ? "text-white" : "text-gray-900"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pb-20 pt-36 text-white md:pb-24 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[24px] border-brand-dark-green-ring opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionLabel label={label} tone="dark" />
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl md:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">{intro}</p>
        ) : null}
        <Reveal delay={240}>{children}</Reveal>
      </div>
    </section>
  );
}

export function DarkSection({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative z-10 mx-4 mb-10 mt-4 rounded-[2.5rem] bg-[#0a0a0a] py-24 text-white md:mx-6"
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

const buttonVariants = {
  default:
    "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-brand-accent px-8 py-4 text-sm font-bold text-black transition duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-brand-green",
  dark: "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-gray-800",
  white:
    "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition duration-300 ease-gentle hover:-translate-y-0.5 hover:bg-brand-accent",
  outline:
    "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-current px-8 py-4 text-sm font-bold transition duration-300 ease-gentle hover:-translate-y-0.5",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "default",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonVariants[variant]} ${className}`}>
      {children}
      <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
    </Link>
  );
}

export function PhotoBand({
  src,
  alt,
  height = "h-64 md:h-[26rem]",
  sizes = "(max-width: 1024px) 100vw, 1152px",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  height?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden rounded-[2rem] bg-gray-100 ${height} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </figure>
  );
}

export function ImageCard({
  href,
  src,
  alt,
  title,
  description,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block h-[400px] overflow-hidden rounded-[2rem] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition duration-700 ease-smooth group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <h3 className="mb-2 text-2xl font-bold uppercase text-white">{title}</h3>
        <p className="max-w-xs text-sm text-gray-200 opacity-0 transition duration-500 ease-smooth group-hover:opacity-100">
          {description}
        </p>
      </div>
    </Link>
  );
}

export function BulletList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`mt-5 space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs font-bold uppercase tracking-widest text-gray-500 ${className}`}>
      {children}
    </p>
  );
}

export type PolymorphicProps = ComponentPropsWithoutRef<ElementType>;

export { Reveal };