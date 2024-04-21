import About from "@/components/modules/About";
import Career from "@/components/modules/Career";
import Header from "@/components/modules/Header";
import Hero from "@/components/modules/Hero";
import Services from "@/components/modules/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Services />
        <Career />
      </main>
    </>
  );
}
