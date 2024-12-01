export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <div className="text-black">My Post: {slug}</div>;
}
