import Hero from "@/components/Home/Hero";
import OurProjects from "@/components/Home/OurProject";
import OurProcess from "@/components/Home/Process";
import VisionHero from "@/components/Home/Vision";
import WhatWeDo from "@/components/Home/WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <VisionHero />
      <WhatWeDo />
      <OurProcess />
      <OurProjects />
    </div>
  );
}
