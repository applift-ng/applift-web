"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const WhatWeDo = () => {
  const [current, setCurrent] = useState(0);
  const currentHead = useRef(null);
  const currentDesc = useRef(null);
  const services = [
    {
      name: "UI/UX Development",
      desc: "We craft intuitive and engaging user interfaces that focus on the user's experience. Our design process ensures that every interaction is seamless, functional, and visually appealing, balancing creativity with usability. From wireframes to fully interactive prototypes, we bring your vision to life.",
    },
    {
      name: "User Interface Auditing",
      desc: "Our detailed UI auditing process uncovers design inconsistencies, usability issues, and areas for improvement. We analyze your interface's layout, accessibility, and interaction flow to ensure an optimized user experience. The result is a polished interface that meets both design standards and user expectations.",
    },
    {
      name: "Web Development",
      desc: "We specialize in building robust, scalable, and responsive websites. Using modern web technologies, we develop platforms that not only look great but also perform efficiently. Whether it’s a simple landing page or a complex web application, we deliver solutions that meet your business needs.",
    },
    {
      name: "Mobile Development",
      desc: "Our mobile development services focus on creating high-performance, user-friendly apps for both iOS and Android. We design and build apps that enhance mobile experiences, from smooth animations to seamless integrations, ensuring your app stands out in today’s competitive market.",
    },
    {
      name: "Blockchain Development",
      desc: "Leverage the power of decentralized technology with our blockchain development services. We help businesses build secure, transparent, and scalable blockchain solutions, from smart contracts to decentralized applications (dApps), unlocking new possibilities in various industries.",
    },
  ];

  useGSAP(() => {
    const ST = ScrollTrigger.create({
      trigger: ".whatwedo",
      start: "top top",
      end: "+=500%", // Extend the scrollable area
      scrub: true, // Smooth animation
      pin: ".whatwedo", // Pin the section in place during the scroll
      markers: true,
      onUpdate: (self) => {
        // Calculate the index based on scroll progress

        const newIndex = Math.min(
          services.length - 1, // Ensure we don't exceed the array length
          Math.floor(self.progress * services.length)
        );

        console.log(newIndex);
        if (current !== newIndex) {
          // Trigger fade-out for previous content
          gsap.to([currentHead.current, currentDesc.current], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              // Once fade-out is complete, update the current index and fade-in the new content
              setCurrent(newIndex);

              gsap.to([currentHead.current, currentDesc.current], {
                opacity: 1,
                duration: 1, // Fade-in animation for new content
              });
            },
          });
        }
      },
    });

    return () => ST.kill(); // Clean up the ScrollTrigger when the component unmounts
  }, []);

  const shownService = services.slice(0, current);

  return (
    <section className="whatwedo h-screen bg-[#CCFF6F] flex flex-col gap-10 p-14">
      <h3 className="text-4xl font-orelega-one">What we Do?</h3>

      <section className="flex">
        <div className="left">
          <Image
            src="/proudman.png"
            width={1000}
            height={1000}
            className="md:w-[340px] md:h-[400px] md:scale-100 scale-[0.70]   -top-1/4 md:top-auto left-5 md:bottom-0 "
            alt=""
          />
        </div>
        <div className="right w-1/2">
          <ul>
            {shownService.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <article>
            <h2 className="bg-applift-blue text-white  text-3xl h-[70px] flex items-center px-4">
              <span ref={currentHead}>{services[current].name}</span>
            </h2>
            <article>
              <p ref={currentDesc}>{services[current].desc}</p>
            </article>
          </article>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
