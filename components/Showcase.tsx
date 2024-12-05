"use client";

import { getObjectUrl } from "@/utils/aws/s3";
import { ArtDocument, convertISOToLocalDate } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ShowcaseProps {
  id: string;
}

export default function Showcase(props: ShowcaseProps) {
  const [art, setArt] = useState<ArtDocument>();

  useEffect(() => {
    fetch(`/api/art/${props.id}`)
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);

  return (
    <>
      {art && (
        <div className="text-black text-center lowercase flex flex-col space-y-5 pb-5 px-5">
          <h1 className="text-2xl font-extrabold">{art.title}</h1>
          <div className="flex flex-col mx-auto lg:flex-row space-x-20">
            <div className="flex flex-row lg:flex-col space-y-2 lg:my-auto">
              <Image
                src={getObjectUrl(art.artName, art.img)}
                alt={art.title}
                width={1000}
                height={600}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="text-sm hidden lg:text-md lg:flex lg:flex-row lg:justify-between lg:space-x-2">
                <p className="lg:mr-auto">medium: {art.medium}</p>
                <p className="lg:ml-auto">
                  {convertISOToLocalDate(art.dateCreated)}
                </p>
              </div>
            </div>
            <div className="flex flex-row text-xs text-start mx-auto !m-0 space-x-2 text-nowrap justify-between pb-4 lg:hidden">
              <p>medium: {art.medium}</p>
              <p>published {convertISOToLocalDate(art.dateCreated)}</p>
            </div>
            <div className="flex flex-col space-y-4 lg:w-96 text-start mx-auto !m-0 lg:pl-10 text-sm md:text-md lg:text-lg">
              <div className="flex flex-col">
                <h3 className="font-bold">description: </h3>
                <p> {art.description}</p>
              </div>
              {art.context !== undefined && (
                <div className="flex flex-col">
                  <h3 className="font-bold">context: </h3>
                  <p>{art.context}</p>
                </div>
              )}
            </div>
          </div>
          {art.additionalImages !== undefined &&
            art.additionalImages.length !== 0 && (
              <div className="flex flex-col space-y-2 m-auto">
                <h2 className="text-lg p-2">(˶˃ ᵕ ˂˶) more: (˶˃ ᵕ ˂˶)</h2>
                <div className="flex gap-4 h-96 overflow-x-auto ">
                  {art.additionalImages.map((url, index) => (
                    <div
                      key={index}
                      className="relative h-full flex-shrink-0 border-pink-300 border-4"
                    >
                      <Image
                        className="object-cover h-full w-auto"
                        src={getObjectUrl(art.artName, url)}
                        alt={`Image ${index + 1}`}
                        width={400}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      )}
    </>
  );
}
