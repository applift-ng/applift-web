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
  const currentIndexRef = useRef(0);
  const currentHead = useRef<HTMLHeadingElement>(null);
  const currentImg = useRef<HTMLImageElement>(null);
  const currentDesc = useRef<HTMLParagraphElement>(null);
  const services = [
    {
      name: "UI/UX Development",
      desc: "We craft intuitive and engaging user interfaces that focus on the user's experience. Our design process ensures that every interaction is seamless, functional, and visually appealing, balancing creativity with usability. From wireframes to fully interactive prototypes, we bring your vision to life.",
      image: "/uiux.jpg",
    },
    {
      name: "User Interface Auditing",
      desc: "Our detailed UI auditing process uncovers design inconsistencies, usability issues, and areas for improvement. We analyze your interface's layout, accessibility, and interaction flow to ensure an optimized user experience. The result is a polished interface that meets both design standards and user expectations.",
      image: "/auditing.jpg",
    },
    {
      name: "Web Development",
      desc: "We specialize in building robust, scalable, and responsive websites. Using modern web technologies, we develop platforms that not only look great but also perform efficiently. Whether it’s a simple landing page or a complex web application, we deliver solutions that meet your business needs.",
      image: "/wevdev.jpg",
    },
    {
      name: "Mobile Development",
      desc: "Our mobile development services focus on creating high-performance, user-friendly apps for both iOS and Android. We design and build apps that enhance mobile experiences, from smooth animations to seamless integrations, ensuring your app stands out in today’s competitive market.",
      image: "/mobdev.jpg",
    },
    {
      name: "Blockchain Development",
      desc: "Leverage the power of decentralized technology with our blockchain development services. We help businesses build secure, transparent, and scalable blockchain solutions, from smart contracts to decentralized applications (dApps), unlocking new possibilities in various industries.",
      image: "/blockchain.jpg",
    },
  ];
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const ST = ScrollTrigger.create({
        trigger: ".whatwedo",
        start: "top top",
        end: "+=500%", // Extend the scrollable area
        scrub: true, // Smooth animation
        pinSpacing: true,
        pin: ".whatwedo", // Pin the section in place during the scroll

        onLeave: () => {
          // This callback ensures the content below starts after scroll ends
          gsap.to(".vision", { opacity: 1, duration: 1, delay: 0.5 });
        },
        onUpdate: (self) => {
          // Calculate the index based on scroll progress
          console.log(Math.floor(self.progress * 5));
          const newIndex = Math.min(
            services.length - 1, // Ensure we don't exceed the array length
            Math.floor(self.progress * services.length)
          );
          console.log(currentIndexRef.current, newIndex);
          if (currentIndexRef.current !== newIndex) {
            // Trigger fade-out for previous content

            gsap.to(
              [currentHead.current, currentDesc.current, currentImg.current],
              {
                opacity: 1,
                duration: 0.5,
                onComplete: () => {
                  // Once fade-out is complete, update the current index and fade-in the new content
                  currentIndexRef.current = newIndex;
                  setCurrent(newIndex);

                  if (currentHead.current && currentDesc.current) {
                    currentHead.current.textContent = services[newIndex].name;
                    currentDesc.current.textContent = services[newIndex].desc;
                    if (currentImg.current) {
                      currentImg.current.src = services[newIndex].image;
                    }
                  }

                  gsap.to(
                    [
                      currentHead.current,
                      currentDesc.current,
                      currentImg.current,
                    ],
                    {
                      opacity: 1,
                      duration: 1, // Fade-in animation for new content
                    }
                  );
                },
              }
            );
          }
        },
      });

      return () => ST.kill(); // Clean up the ScrollTrigger when the component unmounts
    });
    return () => ctx.revert();
  }, []);

  console.log(currentIndexRef.current, "here");
  const shownService = services.slice(0, current);

  const notShown = services.slice(current + 1, services.length);

  return (
    <section className="whatwedo overflow-hidden relative h-screen md bg-[#CCFF6F] flex flex-col p-5 gap-5 md:gap-10 md:p-16 w-full">
      <h3 className="text-4xl font-orelega-one">What we Do?</h3>
      <Image
        src="/wedocurvebig.png"
        width={500}
        height={500}
        className=" -left-[60%] h-1/2 w-4/5 md:h-1/3 md:w-1/3   -z-10  scale-[2] bottom-0 md:bottom-0 md:left-0 absolute"
        alt=""
      />
      <Image
        src="/wedocurvesmall.png"
        width={500}
        height={500}
        className="-z-0 -top-5 scale-75 -right-12 md:top-0 md:right-0 absolute"
        alt=""
      />
      <section className="flex items-center gap-6 md:gap-12 w-full md:w-full flex-col md:flex-row">
        <div className="left h-[35vh] md:h-[70vh] overflow-hidden w-full md:w-1/2">
          <Image
            ref={currentImg}
            src={services[current].image}
            width={1500}
            height={1500}
            className=" object-cover object-center  w-full h-full after:w-full after:h-full relative after:bg-black after:absolute after:top-2 after:right-2 after:-z-0 "
            alt=""
          />
        </div>
        <div className="right w-full  md:w-1/2">
          <ul>
            {shownService.map(({ name }, index) => (
              <li
                className={`flex flex-col duration-300 text-[#808080] ${
                  index === currentIndexRef.current &&
                  "text-applift-blue font-bold pl-3"
                }`}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>

          <article className="w-full  my-4">
            <div className="flex border-t border-t-applift-blue border-b border-b-applift-blue w-full">
              <h2 className="bg-applift-blue after:w-full  w-full after:h-[70px] after:absolute after:top-2 after:left-2 after:-z-10 my-5 after:bg-black relative text-white  text-3xl h-[70px] flex items-center px-4">
                <span ref={currentHead}>
                  {services[currentIndexRef.current].name}
                </span>
              </h2>
            </div>

            <article>
              <p ref={currentDesc}>{services[currentIndexRef.current].desc}</p>
            </article>
          </article>
          <ul>
            {notShown.map(({ name }, index) => (
              <li
                className={`flex flex-col duration-300 text-[#808080] ${
                  index === currentIndexRef.current && ""
                }`}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
