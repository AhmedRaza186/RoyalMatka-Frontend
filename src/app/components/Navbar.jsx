"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config/site";

// TEMPORARY PLACEHOLDER WHATSAPP NUMBER - Easily replace with production contact in the future
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

  // Monitor scroll to apply backdrop effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-charcoal/95 border-b border-brand-gold/15 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-16 lg:h-[72px]"
          }`}
        >
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`relative transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? "w-9 h-9" : "w-9 h-9 lg:w-11 lg:h-11"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Royal Matka Biryani Logo"
                  fill
                  sizes="(max-width: 1024px) 36px, 44px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm md:text-base lg:text-lg font-extrabold tracking-wide text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                  ROYAL MATKA
                </span>
                <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-brand-gold font-semibold">
                  Biryani House
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-1 text-xs lg:text-sm font-semibold tracking-wide text-neutral-light/90 hover:text-brand-gold transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full shadow-sm text-xs font-bold uppercase tracking-wide text-white bg-brand-spice hover:bg-brand-spice-hover transition-all duration-300 hover:shadow-lg hover:shadow-brand-spice/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-cream hover:text-brand-gold focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                // Close Icon (X)
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-brand-charcoal/98 backdrop-blur-xl border-t border-brand-gold/10 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 py-12 flex flex-col h-full justify-between">
          <nav className="flex flex-col space-y-5">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-xl font-bold tracking-wide text-neutral-light hover:text-brand-gold transition-colors duration-300 border-b border-brand-gold/5 pb-2"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-6 mt-8 pb-16">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide text-white bg-brand-spice hover:bg-brand-spice-hover transition-colors shadow-lg shadow-brand-spice/30"
            >
              Order Now
            </a>
            <div className="text-center">
              <span className="font-sans text-xs uppercase tracking-wide text-neutral-muted">
                Need Help? Call Us
              </span>
              <p className="font-sans text-brand-gold font-bold mt-1 tracking-wide">
                +92 300 1002222
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
