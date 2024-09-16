import Link from "next/link";
import React from "react";

const DarkBgLink = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className="bg-black text-white  px-5 rounded-md py-2 w-fit"
      href={path}
    >
      {children}
    </Link>
  );
};

export default DarkBgLink;
