import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface linksProps {
  name: string;
  link: string;
}

const links: linksProps[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Questions", link: "/questions" },
  { name: "Roadmap", link: "/roadmap" },
  { name: "Blog", link: "/blog" },
];

const Page = async () => {
  return (
    <div className="w-screen relative h-screen max-h-screen overflow-hidden max-w-screen flex">
      <Image
        src={"/bg.jpg"}
        fill
        alt="Background"
        className="h-screen z-0 absolute  top-0 left-0 object-cover"
      />
      <div className="flex relative z-[1] flex-col justify-between h-screen flex-[6] w-full p-32 backdrop-blur-md text-white ">
        <Image
          className="absolute top-8 left-32 z-[10]"
          src="/code.png"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="lg:text-[5rem]  z-[1] font-semibold  mt-8 justify-center flex flex-col gap-2 items-start">
          <span>Learn to code.</span>
          <span>Interactively.</span>
          <span>For free.</span>

          {/* <Button className="mt-4 min-w-[300px] bg-green-700">
            Get Started
          </Button> */}
        </div>

        <div className="flex gap-6">
          {links.map((link) => (
            <>
              <Link
                key={link.name}
                className="text-white text-6"
                href={link.link}
              >
                {link.name}
              </Link>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col z-[1] text-white backdrop-blur-md bg-green-600 flex-[4] w-full h-full p-32 pl-12 gap-4">
        <span className="lg:text-[2.5rem] font-medium">
          Join over 20 million learners around the globe
        </span>
        <span className="opacity-65">
          Welcome to CodeCanvas! Sign in to access a vibrant community of
          student programmers and coding enthusiasts. Connect, collaborate, and
          code with us.
        </span>
        <Button>
          <Github /> Login with Github
        </Button>
      </div>
    </div>
  );
};

export default Page;
