import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Divider from "@/components/Divider";

const comicSans = Comic_Neue({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "bugs portfolio",
  description: "emma bugs art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicSans.className} flex flex-col space-y-5 pt-14 antialiased bg-pink-100`}
      >
        <div className="title text-black m-auto lowercase border-pink-200 border-2 p-6 text-lg lg:text-2xl">
          ✨ ٩꒰ ˘ ³˘꒱۶ Anahi's Art Portfolio or something! ٩꒰ ˘ ³˘꒱۶ ✨
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
