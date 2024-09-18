import Image from "next/image";
import Project from "./Project";
import { HiOutlineArrowUp } from "react-icons/hi";

const OurProjects = () => {
  return (
    <section className="w-full relative flex flex-col p-20 bg-[#212121] text-white">
      <h1 className="text-4xl font-orelega-one">Our Projects</h1>
      <Image
        src="/gridy.png"
        width={1000}
        height={1000}
        className="w-full top-0 left-0 h-full absolute"
        alt=""
      />
      <section className="w-full my-6 gap-10 projects grid">
        <Project
          theme="#136BF0"
          img="/catura.png"
          className="catura"
          name="Catura"
        />
        <Project
          theme="#866ECE"
          img="/edutech.png"
          className="edutech"
          name="Edutech"
        />
        <Project
          theme="#CE7231"
          img="/logistics.png"
          className="logistics"
          name="Logistics"
        />
        <Project
          theme="#39EE26"
          img="/finburg.png"
          className="finburg"
          name="Finburg"
        />
        <section className="w-[120px] justify-self-end flex justify-center items-center flex-col  z-10 hexagon-clip bg-applift-green text-black h-[100px]">
          <span className="rotate-[45deg]">
            <HiOutlineArrowUp size={40} />
          </span>
          See More
        </section>
      </section>
    </section>
  );
};

export default OurProjects;
