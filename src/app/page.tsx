import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <section className="bg-applift-grey w-full flex flex-col gap-20  px-3 py-3 md:py-20 md:px-20 relative md:h-[90vh]">
        <Image
          src="/lines.png"
          width={500}
          height={500}
          className="md:w-2/5 w-full md:h-full h-[80vh] -left-[60%] -z-0 top-20 md:top-0 md:left-0 absolute"
          alt=""
        />
        <article className="text-white flex w-full">
          <section className="flex justify-end  w-full">
            <h2 className="font-orelega-one w-[90%] md:w-2/5 text-right self-end justify-end font-medium text-3xl md:text-4xl">
              Transform Your Vision into Reality with Applift's Expert Solutions
            </h2>
          </section>
        </article>

        <section className="flex flex-col md:flex-row gap-10 rounded-xl md:justify-end pt-[180px] md:pt-5 md:pl-[400px] p-5 bg-[#4D4D4D] md:h-[240px] text-white relative z-10">
          <Image
            src="/proudman.png"
            width={1000}
            height={1000}
            className="md:w-[340px] md:h-[400px] md:scale-100 scale-[0.70] absolute  -top-1/4 md:top-auto left-5 md:bottom-0 "
            alt=""
          />
          <section className="flex z-20 flex-col gap-5 rounded-xl bg-[#686868]  w-full lg:w-[300px] p-3">
            <h3 className="text-xl py-2 border-b border-b-applift-green">
              Our Vision
            </h3>
            <p className="">
              We strive to be at the forefront of digital transformation,
              delivering custom software that meets the unique needs of our
              clients.
            </p>
          </section>
          <section className="flex flex-col md:h-full overflow-hidden relative gap-3 cut-box w-full lg:w-[400px] ">
            <div className="bg-[#4D4D4D] md:pt-0  flex justify-end pt-[8.2rem] h-full ">
              <div className="absolute rotate-[10deg] top-5 -left-2  z-0 bg-white">
                <Marquee>
                  <span className="flex gap-4">
                    Our Mission
                    <Image
                      width={20}
                      height={40}
                      src="/WIPStar.png"
                      alt={"Star"}
                    />
                  </span>
                </Marquee>
              </div>
              <div className="absolute -rotate-[20deg] top-0 -left-5  z-0 bg-white">
                <Marquee>
                  <span className="flex gap-4">
                    Our Mission
                    <Image
                      width={20}
                      height={40}
                      src="/WIPStar.png"
                      alt={"Star"}
                    />
                  </span>
                </Marquee>
              </div>
              <article className="bg-[#4D4D4D] -mt-5  h-full flex items-end p-3">
                Our mission is to empower businesses with innovative technology
                solutions that drive growth and operational efficiency.
              </article>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
