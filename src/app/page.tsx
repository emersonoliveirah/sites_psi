import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Faq />
    </main>
  );
}
