"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import DarkBgLink from "./DarkBgLink";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(pathname);
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "Who we are" },
    { path: "/team", name: "Our People" },
    { path: "/blog", name: "Our Blog" },
  ];
  return (
    <div className="flex px-4 items-center border-b border-black md:mx-16 justify-between ">
      <Image src="/appliftlogo.jpg" alt="Applift Logo" width={80} height={80} />
      <span className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <BiMenu size={30} />
      </span>
      <nav
        className={`flex flex-col md:flex-row text-white md:h-auto  md:relative duration-300 gap-8 items-center w-2/3 md:w-fit h-screen md:bg-transparent md:text-black bg-black md:pt-0  pt-10 fixed top-0  ${
          isMenuOpen ? "right-0" : "-right-full md:right-0  "
        }`}
      >
        {navLinks.map((link) => (
          <Link
            href={link.path}
            className={`
          ${pathname == link.path ? "" : ""}
          `}
            key={link.path}
          >
            {link.name}
          </Link>
        ))}
        <span
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-5 md:hidden top-5"
        >
          <BiX size={25} />
        </span>
        <DarkBgLink path="/">Build with Us</DarkBgLink>
      </nav>
    </div>
  );
};

export default Navbar;
