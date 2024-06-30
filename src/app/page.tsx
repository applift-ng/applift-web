import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pt-10 items-center w-[100vw] h-[100vh] overflow-hidden">

      <Image
        src="/appliftlogo.png"
        alt="Applift"
        height={100}
        width={100}
        className="dark:invert"
      ></Image>
      <Image
        src="/software-illustration.png"
        alt="Illustrate"
        height={100}
        width={200}
      ></Image>
        <div className="text-white my-10">
        We are under construction
      </div>
      <div className="w-[100vw] flex flex-row justify-center -z-50">
      <div className="box1 rotate-45"></div>
      </div>
    
    </main>
  );
}
