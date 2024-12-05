"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getObjectUrl } from "@/utils/aws/s3";

interface Preview {
  _id: string;
  preview: string;
  artName: string;
}

/**
 * Instagram feed look
 */
export default function Gallery() {
  const [previews, setPreviews] = useState<Preview[]>([]);

  useEffect(() => {
    fetch("/api/art")
      .then((response) => response.json())
      .then((data) => setPreviews(data));
  }, []);

  return (
    <div className="max-w-screen-sm lg:max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-10 sm:px-6 lg:px-40">
      {previews &&
        previews.map((item: Preview) => (
          <Link
            href={`/art/${item._id}`}
            key={item._id}
            className="w-full h-auto aspect-square flex justify-center items-center hover:opacity-50 transition-opacity hover:cursor-pointer"
          >
            <Image
              src={getObjectUrl(item.artName, item.preview)}
              className="object-cover h-full w-full text-black"
              width={1000}
              height={1000}
              alt={`this is supposed to be ${item._id}`}
            />
          </Link>
        ))}
    </div>
  );
}
