import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
