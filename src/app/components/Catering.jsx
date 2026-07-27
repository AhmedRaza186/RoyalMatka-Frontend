import Link from "next/link";
import { siteConfig } from "../config/site";

const WHATSAPP_CATERING_URL = `https://wa.me/${
  siteConfig.whatsappNumber
}?text=${encodeURIComponent(
  "Hello Royal Matka Biryani, I would like to inquire about catering services for my event."
)}`;

const CATERING_FEATURES = [
  {
    title: "Weddings & Events",
    description:
      "Make your special occasions memorable with authentic matka biryani prepared for your guests.",
    icon: "✦",
  },
  {
    title: "Corporate Gatherings",
    description:
      "Delicious and convenient catering options for office events, meetings, and corporate celebrations.",
    icon: "◆",
  },
  {
    title: "Family Celebrations",
    description:
      "From intimate gatherings to large family occasions, we bring the royal biryani experience to your table.",
    icon: "✧",
  },
];

export default function Catering() {
  return (
    <section
      id="catering"
      className="relative overflow-hidden bg-surface-base py-20 md:py-28 border-t border-border-base transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Catering & Events
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-text-base sm:text-5xl lg:text-6xl">
            Bring the Royal Feast
            <span className="block text-brand-gold mt-1">
              to Your Special Occasion
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-7 text-text-muted sm:text-base">
            Planning a wedding, corporate gathering, or family celebration?
            Let Royal Matka Biryani make your event unforgettable with rich
            flavors, traditional preparation, and a feast your guests will
            remember.
          </p>
        </div>

        {/* Catering Features */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
          {CATERING_FEATURES.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border-base bg-bg-base/40 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-active hover:bg-bg-base hover:shadow-xl hover:shadow-brand-gold/5"
            >
              {/* Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 font-serif text-xl text-brand-gold transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold text-text-base">
                {item.title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-6 text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 rounded-3xl border border-border-base bg-gradient-to-br from-bg-base to-surface-secondary p-8 text-center shadow-2xl md:mt-16 md:p-12 hover:border-border-active transition-colors duration-350">
          <div className="mx-auto max-w-2xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Planning an Event?
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold text-text-base sm:text-4xl leading-tight">
              Let&apos;s Make Your Celebration Special
            </h3>

            <p className="mt-4 font-sans text-sm leading-6 text-text-muted">
              Tell us about your event, guest count, and requirements. Our
              team will help you plan a memorable biryani experience for your
              guests.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_CATERING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-spice px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-spice-hover hover:shadow-lg hover:shadow-brand-spice/20"
              >
                Inquire About Catering
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/45 px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-bg-base hover:shadow-lg hover:shadow-brand-gold/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}