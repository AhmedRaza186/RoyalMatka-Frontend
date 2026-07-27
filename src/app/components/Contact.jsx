"use client";

import { useState } from "react";
import { siteConfig } from "../config/site";

export default function Contact() {
  const whatsappNumber = siteConfig.whatsappNumber;
  const whatsappOrderUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Royal Matka Biryani, I would like to place an order."
  )}`;
  const whatsappGeneralUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Royal Matka Biryani, I would like to get in touch regarding an order/enquiry."
  )}`;

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Clear form fields
    setFormState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-charcoal py-20 md:py-28 border-t border-brand-gold/10"
    >
      {/* Background decorations */}
      <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-48 top-0 h-96 w-96 rounded-full bg-brand-spice/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Get in Touch
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-brand-cream sm:text-5xl lg:text-6xl">
            Let&apos;s Make Your Next
            <span className="block text-brand-gold mt-1">Gathering Royal</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-7 text-neutral-muted sm:text-base">
            Have a question, want to place an order, or planning a special event? We&apos;d love to hear from you.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Visit Us Card */}
            <div className="rounded-2xl border border-brand-gold/10 bg-[#131110]/50 p-6 shadow-lg hover:border-brand-gold/25 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-cream">Visit Us</h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-brand-gold/90 font-medium">Royal Matka Biryani</p>
              <address className="mt-1 not-italic font-sans text-xs sm:text-sm leading-5 text-neutral-muted">
                Yasin Abad Chowk, Allama Iqbal Road, Block 3 Federal B Area, Gulberg Town, Karachi, Pakistan.
              </address>
            </div>

            {/* Call Us Card */}
            <div className="rounded-2xl border border-brand-gold/10 bg-[#131110]/50 p-6 shadow-lg hover:border-brand-gold/25 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-cream">Call Us</h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-muted">For phone orders and queries:</p>
              <a
                href="tel:+923001002222"
                className="mt-2 inline-block font-sans text-sm font-semibold text-brand-gold hover:underline"
              >
                +92 300 1002222
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-2xl border border-brand-gold/10 bg-[#131110]/50 p-6 shadow-lg hover:border-brand-gold/25 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold mb-4">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.453.99 6.015.99 1.593 5.36 1.59 10.792c-.001 1.761.47 3.48 1.365 5.002L1.933 20.21l4.714-1.056zM17.472 14.38c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.508-.16-.722.16-.214.32-.83 1.04-1.016 1.25-.187.21-.375.24-.695.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.55-.72-.56h-.62c-.214 0-.56.08-.856.4-.294.32-1.123 1.1-1.123 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.48 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.48.27-.71.27-1.33.19-1.46-.08-.13-.3-.21-.62-.37z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-cream">WhatsApp</h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-muted">Order directly on WhatsApp:</p>
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-gold hover:underline"
              >
                Chat & Order Now
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Opening Hours Card */}
            <div className="rounded-2xl border border-brand-gold/10 bg-[#131110]/50 p-6 shadow-lg hover:border-brand-gold/25 transition-all duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-cream">Opening Hours</h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-muted">We serve hot biryani during:</p>
              <p className="mt-2 font-sans text-sm font-semibold text-brand-gold">
                Mon - Sun: 12:00 PM - 11:30 PM
              </p>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="rounded-3xl border border-brand-gold/15 bg-[#131110]/60 p-8 sm:p-10 shadow-2xl relative">
            
            {isSubmitted ? (
              // Success Message State
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-6 animate-[bounce_1s_ease-in-out_1]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-cream">Enquiry Received</h3>
                <p className="mt-3 font-sans text-sm text-neutral-muted max-w-sm">
                  Thank you for getting in touch. A representative from Royal Matka Biryani will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-full border border-brand-gold/45 text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              // Active Form State
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                    Full Name <span className="text-brand-spice">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-brand-gold/15 bg-brand-charcoal px-4 py-3 font-sans text-sm text-brand-cream placeholder-neutral-muted/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                      Phone Number <span className="text-brand-spice">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      placeholder="e.g. +92 300 1234567"
                      className="w-full rounded-lg border border-brand-gold/15 bg-brand-charcoal px-4 py-3 font-sans text-sm text-brand-cream placeholder-neutral-muted/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                      Email Address <span className="text-neutral-muted/60 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-brand-gold/15 bg-brand-charcoal px-4 py-3 font-sans text-sm text-brand-cream placeholder-neutral-muted/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                    Message <span className="text-brand-spice">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    placeholder="Tell us about your query, bulk order request, or event details..."
                    className="w-full rounded-lg border border-brand-gold/15 bg-brand-charcoal px-4 py-3 font-sans text-sm text-brand-cream placeholder-neutral-muted/50 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-brand-spice hover:bg-brand-spice-hover py-4 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-brand-spice/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            )}

            {/* Form Footer WhatsApp Redirect */}
            <div className="mt-8 pt-6 border-t border-brand-gold/10 flex items-center justify-center gap-2 text-xs">
              <span className="font-sans text-neutral-muted">Prefer WhatsApp?</span>
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-brand-gold hover:underline flex items-center gap-1"
              >
                Chat With Us
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
