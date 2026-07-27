import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuPreview from "./components/MenuPreview";
import About from "./components/About";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-charcoal overflow-hidden selection:bg-brand-gold selection:text-brand-charcoal">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <About />
      </main>
    </div>
  );
}


