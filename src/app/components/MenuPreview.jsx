"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../config/site";

// Structured menu data array for the signature dishes
const SIGNATURE_ITEMS = [
  {
    id: "chicken-matka-biryani",
    name: "Chicken Matka Biryani",
    subtitle: "Traditional clay-pot slow cooking",
    description: "Locally sourced tender chicken marinated in hand-picked spices, slow-cooked in organic clay pots with premium aged basmati rice to seal in the rich aroma.",
    image: "/checkn-rp9utt4i4dtcgb25qe934587dnajlqea7cvrg9y6eo.jpg",
    sizes: [
      { label: "Single", price: "PKR 399" },
      { label: "Family (4 Persons)", price: "PKR 1,500" },
      { label: "Double Family (8/10 Persons)", price: "PKR 2,999" },
      { label: "Mega (12/15 Persons)", price: "PKR 4,399" },
    ],
    tag: "Signature",
  },
  {
    id: "beef-matka-biryani",
    name: "Beef Matka Biryani",
    subtitle: "Rich and hearty traditional recipe",
    description: "Succulent, melt-in-mouth chunks of premium beef layered with traditional aromatic spices and slow-cooked to perfection in sealed clay matkas.",
    image: "/beef-rp9wbxnxnxwqzyfsoaip6ziqteifua9un99bavp240.jpg",
    sizes: [
      { label: "Single", price: "PKR 450" },
      { label: "Family (4 Persons)", price: "PKR 1,700" },
      { label: "Double Family (8/10 Persons)", price: "PKR 3,300" },
      { label: "Mega (12/15 Persons)", price: "PKR 4,900" },
    ],
    tag: "Popular",
  },
  {
    id: "mutton-matka-biryani",
    name: "Mutton Matka Biryani",
    subtitle: "Royalty in every single bite",
    description: "Tender premium mutton infused with traditional spices, slow-cooked in earthen clay pots for an authentic and aromatic royal dining experience.",
    image: "/mutton-rp9w6qm1vwsotjzi0jnxwsq0lq4eain9ljfosteei8.jpg",
    sizes: [
      { label: "Single", price: "PKR 650" },
      { label: "Family (4 Persons)", price: "PKR 2,400" },
      { label: "Double Family (8/10 Persons)", price: "PKR 4,700" },
      { label: "Mega (12/15 Persons)", price: "PKR 6,900" },
    ],
    tag: "Chef's Special",
  },
];

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="relative bg-bg-base py-16 md:py-24 border-t border-border-base/60 transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
            Royal Selection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-base mt-2 tracking-wide">
            Our Signature Matka Biryanis
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-[1px] w-12 bg-brand-gold/30"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span className="h-[1px] w-12 bg-brand-gold/30"></span>
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-16">
          {SIGNATURE_ITEMS.map((item) => {
            // Predialed WhatsApp message link
            const whatsappText = `Hello Royal Matka Biryani, I would like to place an order for the ${item.name}!`;
            const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              whatsappText
            )}`;

            return (
              <div
                key={item.id}
                className="group flex flex-col h-full bg-surface-base border border-border-base hover:border-border-active rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-bg-base">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Radial shadow overlay to integrate with card design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-60 transition-colors duration-300"></div>
                  
                  {/* Floating Tag Badge */}
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-brand-spice border border-white/10 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.tag}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-base group-hover:text-brand-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-sans text-[11px] font-medium text-brand-gold/80 mt-1 tracking-wide uppercase">
                    {item.subtitle}
                  </span>
                  
                  <p className="font-sans text-xs sm:text-sm text-text-muted mt-3 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Deals / Sizes pricing table */}
                  <div className="mt-5 border-t border-border-base/50 pt-4">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-text-muted block mb-2.5">
                      Available Sizing
                    </span>
                    <div className="space-y-2">
                      {item.sizes.map((size) => (
                        <div
                          key={size.label}
                          className="flex justify-between items-center text-xs py-0.5 border-b border-border-base/30 last:border-0"
                        >
                          <span className="font-sans text-text-base/80">
                            {size.label}
                          </span>
                          <span className="font-sans font-semibold text-text-base">
                            {size.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-brand-spice hover:bg-brand-spice-hover py-3 font-sans text-[11px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-brand-spice/15 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu Call to Action */}
        <div className="mt-16 text-center">
          <Link
            href="#full-menu"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold/45 text-brand-gold hover:bg-brand-gold hover:text-bg-base px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            View Full Menu & Prices
          </Link>
        </div>

      </div>
    </section>
  );
}
