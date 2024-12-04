import Showcase from "@/components/Showcase";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  return (
    <>
      <Showcase id={id} />
    </>
  );
}
