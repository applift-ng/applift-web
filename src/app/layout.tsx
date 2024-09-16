// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build Your Dreams with Applift",
  description:
    "Next generation software development and cutting edge engineering.",
  other: {
    "facebook-domain-verification": "g2ev8eizsnddpsoizac3j7px7u3zkj",
    "google-site-verification": "DgrP9wg6NhrVCjT99JhgCtbyCYekGgL1oePflPJ_Lsg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
