import About from "@/components/modules/About";
import Header from "@/components/modules/Header";
import Hero from "@/components/modules/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
      </main>
    </>
  );
}
