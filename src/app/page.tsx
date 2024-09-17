import Hero from "@/components/Home/Hero";
import VisionHero from "@/components/Home/Vision";
import WhatWeDo from "@/components/Home/WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <VisionHero />
      <WhatWeDo />
    </div>
  );
}
