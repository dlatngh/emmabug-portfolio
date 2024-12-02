import Link from "next/link";
import Image from "next/image";

interface preview {
  previewImgUrl: string
  _id: string
}

export const generateMetadata = async () => {
  return {
    title: "Art Portfolio",
    description: "Explore stunning art pieces.",
  };
};

async function fetchArtPreviews() {
  const res = await fetch(`${process.env.NEXT_URL}/api/art`);
  if (!res.ok) throw new Error("Failed to fetch art previews");
  return res.json();
}

export default async function Home() {
  const previews = await fetchArtPreviews();

  console.log(previews);
  return (
    <div className="gallery flex flex-wrap gap-4 xl:justify-start px-10 sm:px-12 lg:px-48">
      {previews.map((item: preview) => (
        <Link
          href={`/art/${item._id}`}
          key={item._id}
          className="flex-shrink-0 h-96 m-auto sm:m-0 flex items-center hover:opacity-50 transition-opacity hover:cursor-pointer"
        >
          <Image
            src={item.previewImgUrl}
            className="object-cover h-full w-auto"
            width={300}
            height={256}
            alt={`erm this is supposed to be ${item._id}`}
          />
        </Link>
      ))}
    </div>
  );
}

/**
 * Instagram feed look
 */

// export default async function Home() {
//     const previews = await fetchArtPreviews();
//
//     console.log(previews);
//     return (
//         <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 sm:px-28 lg:px-48">
//             {previews.map((item: preview) => (
//                 <Link
//                     href={`/art/${item._id}`}
//                     key={item._id}
//                     className="w-full h-auto aspect-square flex justify-center items-center hover:opacity-50 transition-opacity hover:cursor-pointer"
//                 >
//                     <Image
//                         src={item.previewImgUrl}
//                         className="object-cover h-full w-full text-black"
//                         width={200}
//                         height={200}
//                         alt={`this is supposed to be ${item._id}`}
//                     />
//                 </Link>
//             ))}
//         </div>
//     );
// }

