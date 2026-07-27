import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../config/site";

// TEMPORARY PLACEHOLDER WHATSAPP NUMBER - Easily replace with production contact in the future
const PLACEHOLDER_WHATSAPP_NUMBER = siteConfig.whatsappNumber;
const WHATSAPP_ORDER_URL = `https://wa.me/${PLACEHOLDER_WHATSAPP_NUMBER}?text=Hello%20Royal%20Matka%20Biryani%2C%20I%20would%20like%20to%20place%20an%20order%20for%20delicious%20Matka%20Biryani!`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-bg-base pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* Subtle background ambient lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-spice/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      {/* Traditional Pakistani pattern overlay (Subtle background detail) */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (Editorial styling) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pre-headline Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
                A Legacy of Royal Spices
              </span>
            </div>
 
            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-text-base leading-[1.1] tracking-wide max-w-2xl">
              Where Every Matka Tells a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#e3c79d] to-brand-gold">Royal Story</span>
            </h1>
 
            {/* Supporting Copy */}
            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Indulge in Karachi&apos;s finest slow-cooked biryani, traditionally cooked in organic clay pots to lock in the intense aroma, tender marinated meat, and spice-infused premium basmati rice. Crafted with heritage, served for royalty.
            </p>
 
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-sm font-bold uppercase tracking-wider text-white bg-brand-spice hover:bg-brand-spice-hover transition-all duration-300 hover:shadow-xl hover:shadow-brand-spice/30 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Order Now
              </a>
              <Link
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-gold rounded-full text-sm font-bold uppercase tracking-wider text-text-base hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Menu
              </Link>
            </div>
 
            {/* Divider */}
            <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent lg:via-brand-gold/20 lg:to-transparent"></div>
 
            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
              
              {/* Trust Point 1 */}
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex-shrink-0 p-2 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-text-base">
                    Traditional Matka Cooking
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Rich Pakistani Flavors
                  </p>
                </div>
              </div>
 
              {/* Trust Point 2 */}
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex-shrink-0 p-2 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-text-base">
                    Freshly Prepared
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Hand-picked desi spices
                  </p>
                </div>
              </div>
 
              {/* Trust Point 3 */}
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <div className="flex-shrink-0 p-2 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-text-base">
                    Steaming Hot
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Delivered in sealed matkas
                  </p>
                </div>
              </div>
 
            </div>
 
          </div>
 
          {/* Right Column: Layered Premium Food Collage */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center">
            
            {/* Background Decorative Gold Ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] border border-dashed border-brand-gold/15 rounded-full animate-[spin_100s_linear_infinite] pointer-events-none"></div>
            
            {/* Accent Gold frame border */}
            <div className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] border border-brand-gold/10 rounded-full pointer-events-none"></div>
 
            {/* Main Image: Chicken Matka Biryani */}
            <div className="absolute z-20 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-4 border-brand-gold shadow-2xl transition-all duration-500 hover:scale-105 group bg-surface-secondary">
              <Image
                src="/checkn-rp9utt4i4dtcgb25qe934587dnajlqea7cvrg9y6eo.jpg"
                alt="Signature Chicken Matka Biryani"
                fill
                sizes="(max-width: 768px) 240px, 300px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-bg-base/10 to-transparent opacity-80 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                <span className="bg-brand-spice text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded border border-white/15 text-white">
                  Signature Dish
                </span>
                <h3 className="font-serif text-text-base text-sm sm:text-base font-semibold mt-1.5 drop-shadow-md">
                  Chicken Matka Biryani
                </h3>
              </div>
            </div>
 
            {/* Secondary Floating Card: Beef Matka Biryani */}
            <div className="absolute z-10 -left-4 sm:left-4 bottom-2 sm:bottom-6 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full overflow-hidden border-2 border-brand-gold/40 shadow-xl hover:scale-105 hover:z-30 transition-all duration-300 bg-surface-secondary">
              <Image
                src="/beef-rp9wbxnxnxwqzyfsoaip6ziqteifua9un99bavp240.jpg"
                alt="Beef Matka Biryani"
                fill
                sizes="(max-width: 768px) 130px, 170px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                <h4 className="font-serif text-text-base text-[10px] sm:text-xs font-semibold">
                  Beef Matka
                </h4>
              </div>
            </div>
 
            {/* Tertiary Floating Card: Mutton Matka Biryani */}
            <div className="absolute z-10 -right-4 sm:right-4 top-2 sm:top-6 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full overflow-hidden border-2 border-brand-gold/40 shadow-xl hover:scale-105 hover:z-30 transition-all duration-300 bg-surface-secondary">
              <Image
                src="/mutton-rp9w6qm1vwsotjzi0jnxwsq0lq4eain9ljfosteei8.jpg"
                alt="Mutton Matka Biryani"
                fill
                sizes="(max-width: 768px) 130px, 170px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                <h4 className="font-serif text-text-base text-[10px] sm:text-xs font-semibold">
                  Mutton Matka
                </h4>
              </div>
            </div>
 
          </div>
 
        </div>
      </div>
    </section>
  );
}
