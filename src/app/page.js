import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-charcoal overflow-hidden selection:bg-brand-gold selection:text-brand-charcoal">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

