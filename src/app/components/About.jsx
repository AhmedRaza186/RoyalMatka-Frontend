"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand-charcoal py-20 md:py-28"
    >
      {/* Decorative Background */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-brand-spice/5 blur-[100px] pointer-events-none" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d2724_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Image Composition */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Decorative Frame */}
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border border-brand-gold/30" />

            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#161311] shadow-2xl">
              <Image
                src="/checkn-rp9utt4i4dtcgb25qe934587dnajlqea7cvrg9y6eo.jpg"
                alt="Traditional Royal Matka Biryani"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-brand-gold/25 bg-brand-charcoal/80 p-5 backdrop-blur-md">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Our Promise
                  </p>

                  <p className="mt-1 font-serif text-xl font-semibold text-brand-cream">
                    Authentic taste. Timeless tradition.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Element */}
            <div className="absolute -bottom-6 -right-4 hidden h-24 w-24 rounded-full border border-brand-gold/30 bg-brand-charcoal sm:block">
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-3xl text-brand-gold">
                  R
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>

            {/* Section Label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />

              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
              A Taste of Tradition,
              <span className="block text-brand-gold">
                Crafted for Royalty
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 font-sans text-sm leading-7 text-neutral-muted sm:text-base">
              At Royal Matka Biryani, we believe that great food is more than
              just a meal. It is a celebration of tradition, family, and the
              unforgettable flavors that bring people together.
            </p>

            <p className="mt-4 font-sans text-sm leading-7 text-neutral-muted sm:text-base">
              Inspired by the rich culinary heritage of Karachi, our biryani
              is carefully prepared with aromatic spices, premium basmati rice,
              and tender marinated meat. Slow-cooked in traditional clay pots,
              every matka is crafted to deliver an authentic experience with
              every bite.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

              {/* Highlight 1 */}
              <div className="border-l-2 border-brand-gold/40 pl-4">
                <h3 className="font-serif text-lg font-bold text-brand-cream">
                  Traditional
                </h3>

                <p className="mt-1 font-sans text-xs leading-5 text-neutral-muted">
                  Authentic clay-pot cooking
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="border-l-2 border-brand-gold/40 pl-4">
                <h3 className="font-serif text-lg font-bold text-brand-cream">
                  Premium
                </h3>

                <p className="mt-1 font-sans text-xs leading-5 text-neutral-muted">
                  Carefully selected ingredients
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="border-l-2 border-brand-gold/40 pl-4">
                <h3 className="font-serif text-lg font-bold text-brand-cream">
                  Authentic
                </h3>

                <p className="mt-1 font-sans text-xs leading-5 text-neutral-muted">
                  Rich Karachi-inspired flavors
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/50 bg-brand-gold/10 px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-charcoal"
              >
                Explore Our Menu
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}