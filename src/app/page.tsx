import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Contacts from "@/components/sections/Contacts";
import Gallery from "@/components/sections/Gallery";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
