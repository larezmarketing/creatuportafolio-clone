import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { ValueProp } from "@/components/ValueProp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <ValueProp />
      <Footer />
    </main>
  );
}
