import type { Metadata } from "next";
import { Delius } from "next/font/google";
import NavBar from "@/components/NavBar";
import Divider from "@/components/Divider";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Delius({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "bugs portfolio",
  description: "emma bugs art",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex flex-col space-y-5 pt-10 antialiased bg-pink-50`}
      >
        <div className="title text-black m-auto lowercase text-sm sm:text-lg lg:text-2xl px-5">
          <Link href="/">
            <Image
              src={"/website-banner.webp"}
              alt="website banner"
              width={550}
              height={400}
            />
          </Link>
        </div>
        <div className="navbar text-black m-auto lowercase ">
          <NavBar />
        </div>
        <Divider />
        {children}
        <div className="flex flex-col space-y-10 py-10">
          <Divider />
          <Footer />
        </div>
      </body>
    </html>
  );
}
