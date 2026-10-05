import { getPortfolio } from "@/lib/api";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { DevAtmosphere } from "@/components/sections/DevAtmosphere";
import { OllamaAssistant } from "@/components/sections/OllamaAssistant";

export default async function Home() {
  const d = await getPortfolio();
  return (
    <>
      <DevAtmosphere />
      <Header brand={d.brand.name} nav={d.nav} cta={d.hero.ctaSecondary} />
      <main>
        <Hero data={d.hero} />
        <TechStack data={d.skills} />
        <Container className="grid gap-x-10 lg:grid-cols-2">
          <About data={d.about} />
          <Experience data={d.experience} />
        </Container>
        <Projects data={d.projects} />
        <Testimonials data={d.testimonials} />
        <Contact data={d.contact} />
      </main>
      <Footer brand={d.brand} data={d.footer} />
      <OllamaAssistant />
    </>
  );
}
