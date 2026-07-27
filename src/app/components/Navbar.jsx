"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config/site";

// Temporary placeholder WhatsApp number.
// Replace the value inside siteConfig when the real number is confirmed.
const PLACEHOLDER_WHATSAPP_NUMBER = siteConfig.whatsappNumber;

const WHATSAPP_ORDER_URL = `https://wa.me/${PLACEHOLDER_WHATSAPP_NUMBER}?text=Hello%20Royal%20Matka%20Biryani%2C%20I%20would%20like%20to%20place%20an%20order%20for%20delicious%20Matka%20Biryani!`;

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About Us", href: "#about" },
  { name: "Catering", href: "#catering" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? "border-b border-brand-gold/10 bg-brand-charcoal/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Royal Matka Biryani Home"
          >
            <div className="relative h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
              <Image
                src="/logo.png"
                alt="Royal Matka Biryani"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col justify-center leading-none">
              <span className="font-serif text-[17px] font-semibold tracking-wide text-brand-cream transition-colors duration-300 group-hover:text-brand-gold sm:text-lg">
                Royal Matka
              </span>

              <span className="mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.22em] text-brand-gold sm:text-[9px]">
                Biryani House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  group relative py-2
                  font-sans text-[13px] font-medium tracking-normal
                  text-neutral-light/85
                  transition-colors duration-300
                  hover:text-brand-gold
                "
              >
                {link.name}

                <span
                  className="
                    absolute bottom-0 left-1/2
                    h-px w-0
                    -translate-x-1/2
                    bg-brand-gold
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-brand-spice
                px-5 py-2
                font-sans text-[12px] font-semibold uppercase
                tracking-wide text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-brand-spice-hover
                hover:shadow-lg hover:shadow-brand-spice/20
                active:translate-y-0
              "
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="
              inline-flex h-10 w-10
              items-center justify-center
              rounded-full
              text-brand-cream
              transition-colors duration-300
              hover:bg-brand-gold/10
              hover:text-brand-gold
              focus:outline-none
              focus:ring-2
              focus:ring-brand-gold/50
              lg:hidden
            "
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-x-0 top-16 bottom-0
          z-40
          bg-brand-charcoal/98
          backdrop-blur-xl
          transition-all duration-300 ease-out
          lg:hidden
          ${
            isMobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col px-6 py-8">
          
          <nav
            className="flex flex-col"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  border-b border-brand-gold/10
                  py-4
                  font-serif text-2xl font-medium
                  text-brand-cream
                  transition-colors duration-300
                  hover:text-brand-gold
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-8 pt-10">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex w-full items-center justify-center
                rounded-full
                bg-brand-spice
                px-6 py-3.5
                font-sans text-sm font-semibold uppercase
                tracking-wide text-white
                shadow-lg shadow-brand-spice/20
                transition-all duration-300
                hover:bg-brand-spice-hover
              "
            >
              Order Now
            </a>

            <div className="mt-6 text-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-neutral-muted">
                Need Help? Call Us
              </span>

              <p className="mt-1.5 font-sans text-sm font-medium tracking-wide text-brand-gold">
                +92 300 1002222
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}