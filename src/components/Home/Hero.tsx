import DarkBgLink from "../DarkBgLink";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row pt-6 items-center justify-center gap-20">
      <section className="flex flex-col gap-3 px-3 w-full md:w-2/5">
        <h1 className="md:text-5xl text-3xl font-orelega-one font-medium">
          Your Partner in Digital Transformation and Innovation
        </h1>
        <article>
          At Applift, we harness the power of technology to deliver bespoke
          software solutions that drive business growth and operational
          excellence. Let us help you navigate the complexities of the digital
          landscape with confidence and success
        </article>
        <DarkBgLink path="/">Contact Us</DarkBgLink>
      </section>
      <Image src={"/heroman.png"} width={450} height={450} alt="" />
    </div>
  );
};

export default Hero;
