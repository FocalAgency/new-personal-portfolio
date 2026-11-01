import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";
import { PageMotion } from "@/components/motion/page-motion";

export default function Home() {
  return (
    <>
      <main id="main">
        <PageMotion />
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
