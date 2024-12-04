import type { Metadata } from "next";
import { Delius } from "next/font/google";
import NavBar from "@/components/NavBar";
import Divider from "@/components/Divider";
import React from "react";
import Image from "next/image";
import { getObjectUrl } from "@/utils/aws/s3";
import Link from "next/link";
import "./globals.css";


const font = Delius({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "bugs portfolio",
  description: "emma bugs art",
};
const websiteBanner: string = getObjectUrl("", "websitebanner.png");
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex flex-col space-y-5 pt-10 antialiased bg-pink-50`}
      >
        <div className="title text-black m-auto lowercase text-sm sm:text-lg lg:text-2xl">
          <Link href="/">
            <Image
              src={websiteBanner}
              alt="website banner"
              width={550}
              height={400}
            />
          </Link>
        </div>
        <div className="navbar text-black m-auto lowercase">
          <NavBar />
        </div>
        <Divider />
        {children}
      </body>
    </html>
  );
}
