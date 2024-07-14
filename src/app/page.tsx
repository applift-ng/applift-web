import Image from "next/image";
import { WIP } from "./components/WIP";

export default function Home() {
  return (
    <main className="flex flex-col pt-10 items-center w-[100vw] h-[100vh] overflow-hidden">
      <Image
        src="/appliftlogo.png"
        alt="Applift"
        height={100}
        width={100}
        className="dark:invert mb-5"
      ></Image>
      <Image
        src="/software-illustration.png"
        alt="Illustrate"
        height={100}
        width={200}
      ></Image>
      <section className="w-full text-white px-5 text-center relative">
        <h1 className="text-2xl mt-5">
          We're Under <br></br>Construction
        </h1>
        <p className="text-md">
          Our new site is on the way!<br></br> In the meantime, you can reach us
          at <span className="text-[#86C7FE]">hello@applift.xyz</span>.{" "}
          <br></br> Thanks for your patience.
        </p>
        <div className="dcr_line">
          <div className="w-full overflow-hidden flex flex-row items-center">
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>

          </div>
        </div>
        <div className="dcr_line2">
        <div className="w-full overflow-hidden flex flex-row items-center ">
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>
            <WIP></WIP>

          </div>
        </div>
      </section>
      <div className="sm:hidden w-[100vw] relative -top-[4.5rem] flex flex-col justify-center items-center -z-50">
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className=" w-auto relative  flex flex-row justify-center items-center -z-50">
        <div className="box3 "></div>
        <div className="box4"></div>
      </div>
    </main>
  );
}
