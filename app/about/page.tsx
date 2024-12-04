import Divider from "@/components/Divider";
import Image from "next/image";

export default function About() {
  return (
    <div className="text-black m-auto text-2xl flex flex-col space-y-12">
      <div className="flex flex-col lg:flex-row space-x-4 -mb-12">
        <div className="relative h-full flex-shrink-0 m-auto">
          <Image
            className="object-cover h-full w-auto"
            src={"/about-me-id.webp"}
            alt="id"
            width={550}
            height={550}
          />
        </div>
        <div className="flex flex-col justify-center -mt-5 max-w-[100%] lg:max-w-[32rem] px-5">
          <h1 className="text-xl text-start pb-2">About me</h1>
          <p className="text-base flex flex-col text-wrap">
            <span>
              Hi! I’m Emma Lemke, a 19-year-old aspiring character concept
              artist based in San Francisco, California.
            </span>
            <span>
              Originally from the small town of Proberta, I’ve had a passion for
              art for as long as I can remember.
            </span>
            <span>
              It’s been a constant in my life, and I can’t recall a time when I
              wasn’t fascinated by creativity in all its forms.
            </span>
            <span>
              Outside of creating art, I’m reading, listening to music, or, of
              course, playing video games! These hobbies continually inspire and
              fuel my creative process.
            </span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 z-20 -top-5 drop-shadow-xl">
          <Image
            src={"/little-me-1.webp"}
            alt="Little me 1"
            width={150}
            height={100}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col lg:flex-row space-x-4">
        <div className="flex flex-col justify-center max-w-[100%] lg:max-w-[32rem] px-10">
          <h1 className="text-xl text-start pb-2">Why I do art</h1>
          <p className="text-base flex flex-col text-wrap ">
            <span>
              Art is my true passion, and I’ve always been captivated by
              animated shows and video games
            </span>
            <span>
              As I grew, this love evolved into a deep desire to pursue a career
              in character concept art.
            </span>
            <span>
              I specialize in creating vibrant, pink, cute, and girly
              designs—art that reflects my love for these aesthetics while also
              making a statement:{" "}
              <span className="italic font-bold">
                fun girly art is important too!
              </span>
            </span>
            <span>
              I believe that women and girls have a l space in both the art
              world and the video game industry. This passion for empowering
              women has been a guiding force in my work. In high school, much of
              my art focused on women’s rights, which continues to influence my
              cute and pink art style today!
            </span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-20 -top-8 drop-shadow-xl">
          <Image
            src={"/little-me-2.webp"}
            alt="Little me 2"
            width={150}
            height={100}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col lg:flex-row space-x-4">
        <div className="flex flex-col justify-center max-w-[100%] lg:max-w-[32rem] px-10 lg:ml-auto">
          <h1 className="text-xl text-end pb-2">Mission Statement</h1>
          <p className="text-base flex flex-col text-wrap ">
            <span>
              I am dedicated to bringing characters and worlds to life through
              art.
            </span>
            <span>
              My goal is always to use personality, soul, and vibrancy in my
              work and characters.
            </span>
            <span>
              I’m excited to break into the video game and animation industries,
              where I can collaborate with others and contribute to creating
              engaging, imaginative experiences.
            </span>
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-0 z-20 -top-10 drop-shadow-xl">
          <Image
            src={"/little-me-3.webp"}
            alt="Little me 3"
            width={150}
            height={100}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col lg:flex-row space-x-4">
        <div className="flex flex-col justify-center  max-w-[100%] lg:max-w-[32rem] px-10">
          <h1 className="text-xl text-start pb-2">Contact Me!</h1>
          <p className="text-base flex flex-col text-wrap ">
            <span>
              I’m currently open to freelance work, commissions, and
              collaborations. Please take a look at my work and portfolio and
              contact me with any questions!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
