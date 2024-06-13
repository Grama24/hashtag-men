import Catalog from "@/components/Catalog";
import DespreNoi from "@/components/DespreNoi";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import TopScroll from "@/components/TopScroll";

export default function Home() {
  return (
   <div>
      <Hero/>
      <DespreNoi/>
      <Catalog />
      <Contact />
      <TopScroll/>
     
   </div>
  );
}
