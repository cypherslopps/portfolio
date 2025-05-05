import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
