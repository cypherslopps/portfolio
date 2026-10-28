import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Now from "@/components/sections/Now";
import Projects from "@/components/sections/Projects";
import Proof from "@/components/sections/Proof";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Now />
      <Skills />
      <Projects />
      <Proof />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
