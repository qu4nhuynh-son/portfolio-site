import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
