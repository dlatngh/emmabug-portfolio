import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    src: "/insta-icon.webp",
    href: "https://www.instagram.com/bugcuti3/",
  },
  {
    name: "TikTok",
    src: "/tiktok-icon.webp",
    href: "https://www.tiktok.com/@bugcuti3",
  },
  {
    name: "Email",
    src: "/email-icon.webp",
    href: "mailto:emmalemke1234@gmail.com",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-row m-auto justify-evenly w-full lg:space-x-12 pb-10">
      {socials.map((social, id) => (
        <Link href={social.href} key={id}>
          <Image src={social.src} alt={social.name} width={100} height={100} />
        </Link>
      ))}
    </div>
  );
}
