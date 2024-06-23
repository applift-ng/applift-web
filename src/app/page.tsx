import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
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
      height={50}
      width={100}
      ></Image>
    </main> 
  );
}
