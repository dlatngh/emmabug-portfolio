import Gallery from "@/components/Gallery";

// export default async function Home() {
//   const previews = await fetchArtPreviews();

//   console.log(previews);
//   return (
//     <div className="gallery flex flex-wrap gap-4 xl:justify-start px-10 sm:px-12 lg:px-48">
//       {previews.map((item: Preview) => (
//         <Link
//           href={`/art/${item._id}`}
//           key={item._id}
//           className="flex-shrink-0 h-96 m-auto sm:m-0 flex items-center hover:opacity-50 transition-opacity hover:cursor-pointer"
//         >
//           <Image
//             src={item.previewImgUrl}
//             className="object-cover h-full w-auto"
//             width={300}
//             height={256}
//             alt={`erm this is supposed to be ${item._id}`}
//           />
//         </Link>
//       ))}
//     </div>
//   );
// }

/**
 * Instagram feed look
 */

export default async function Home() {
  return (
    <>
      <Gallery />
    </>
  );
}
