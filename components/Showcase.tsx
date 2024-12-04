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
        <div className="text-black m-auto text-center lowercase flex flex-col space-y-5 pb-5 px-5">
          <h1 className="text-2xl font-extrabold">{art.title}</h1>
          <div className="flex flex-col m-auto lg:flex-row space-x-20">
            <div className="flex flex-row lg:flex-col space-y-2">
              <Image
                src={getObjectUrl(art.title, art.img)}
                alt={art.title}
                width={1000}
                height={600}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h3 className="hidden text-sm lg:text-md lg:text-left lg:block">
                {convertISOToLocalDate(art.dateCreated)}
              </h3>
            </div>
            <h3 className="text-right text-xs pb-4 lg:text-lg lg:hidden">
              published {convertISOToLocalDate(art.dateCreated)}
            </h3>
            <div className="flex-col flex space-y-2 text-middle lg:text-left">
              <h3
                className={`w-full lg:w-72 text-sm md:text-md lg:text-lg m-auto `}
              >
                description: Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem
              </h3>
            </div>
          </div>

          {art.additionalImages !== undefined && (
            <div className="flex flex-col space-y-2 m-auto">
              <h2 className="text-lg p-2">(˶˃ ᵕ ˂˶) more: (˶˃ ᵕ ˂˶)</h2>
              <div className="flex gap-2 h-96 overflow-x-auto">
                {art.additionalImages.map((url, index) => (
                  <div key={index} className="relative h-full flex-shrink-0">
                    <Image
                      className="object-cover h-full w-auto"
                      src={getObjectUrl(art.title, url)}
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
