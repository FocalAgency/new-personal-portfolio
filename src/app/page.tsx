import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Work } from "@/components/home/work";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/home/contact";
import { PageMotion } from "@/components/home/page-motion";

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
