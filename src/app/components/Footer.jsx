"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../config/site";

export default function Footer() {
  const whatsappNumber = siteConfig.whatsappNumber;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Royal Matka Biryani, I would like to place an order."
  )}`;

  return (
    <footer className="relative border-t border-border-base bg-bg-base pt-16 pb-8 text-text-base transition-colors duration-300">
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Royal Matka Biryani Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-serif text-lg font-bold tracking-wide text-text-base transition-colors duration-300 group-hover:text-brand-gold">
                  ROYAL MATKA
                </span>
                <span className="mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-brand-gold">
                  Biryani House
                </span>
              </div>
            </Link>
            
            <p className="font-sans text-xs sm:text-sm leading-6 text-text-muted">
              Authentic Karachi-inspired matka biryani, slow-cooked with tradition and served with royal taste. Experience the culinary heritage of clay-pot cooking.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/royalmatkabiryani" // Placeholder, easily replaceable
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Royal Matka Biryani on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-base bg-bg-base text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-bg-base hover:-translate-y-0.5"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/royalmatkabiryani" // Placeholder, easily replaceable
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Royal Matka Biryani on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-base bg-bg-base text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-bg-base hover:-translate-y-0.5"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order or chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-base bg-bg-base text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-bg-base hover:-translate-y-0.5"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.453.99 6.015.99 1.593 5.36 1.59 10.792c-.001 1.761.47 3.48 1.365 5.002L1.933 20.21l4.714-1.056zM17.472 14.38c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.508-.16-.722.16-.214.32-.83 1.04-1.016 1.25-.187.21-.375.24-.695.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.55-.72-.56h-.62c-.214 0-.56.08-.856.4-.294.32-1.123 1.1-1.123 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.48 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.48.27-.71.27-1.33.19-1.46-.08-.13-.3-.21-.62-.37z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-text-muted hover:text-brand-gold transition-colors duration-300 relative py-1 group block w-fit"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-text-muted hover:text-brand-gold transition-colors duration-300 relative py-1 group block w-fit"
                >
                  Menu
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-text-muted hover:text-brand-gold transition-colors duration-300 relative py-1 group block w-fit"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#catering"
                  className="text-text-muted hover:text-brand-gold transition-colors duration-300 relative py-1 group block w-fit"
                >
                  Catering
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-text-muted hover:text-brand-gold transition-colors duration-300 relative py-1 group block w-fit"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-brand-gold">
              Contact Info
            </h3>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-text-muted">
              <div>
                <h4 className="font-bold text-text-base uppercase text-[10px] tracking-widest mb-1">
                  Visit Us
                </h4>
                <address className="not-italic leading-5">
                  Yasin Abad Chowk, Allama Iqbal Road,<br />
                  Block 3 Federal B Area, Gulberg Town,<br />
                  Karachi, Pakistan
                </address>
              </div>
              
              <div>
                <h4 className="font-bold text-text-base uppercase text-[10px] tracking-widest mb-1">
                  Call Us
                </h4>
                <a
                  href="tel:+923001002222"
                  className="hover:text-brand-gold transition-colors duration-300"
                >
                  +92 300 1002222
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-text-base uppercase text-[10px] tracking-widest mb-1">
                  Opening Hours
                </h4>
                <p>Mon - Sun: 12:00 PM - 11:30 PM</p>
              </div>
            </div>
          </div>
          
          {/* Column 4: Order CTA */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-brand-gold">
              Ready for a Feast?
            </h3>
            <p className="font-sans text-xs sm:text-sm leading-6 text-text-muted">
              Order your favourite matka biryani and experience authentic flavours crafted with tradition.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-spice px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-spice-hover hover:shadow-lg hover:shadow-brand-spice/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar Section */}
        <div className="mt-16 border-t border-border-base pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-sans text-xs text-text-muted text-center sm:text-left">
          <p>© 2026 Royal Matka Biryani. All rights reserved.</p>
          <p className="italic text-brand-gold/80">Crafted with passion for authentic taste.</p>
        </div>
        
      </div>
    </footer>
  );
}
