import Catalog from "@/components/Catalog";
import DespreNoi from "@/components/DespreNoi";
import Header2 from "@/components/Header2";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
   <div>
      <Header2 />
      <Hero/>
      <Catalog />
      <DespreNoi/>
      <Contact />
   </div>
  );
}
