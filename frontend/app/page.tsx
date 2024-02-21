import { Button } from "@/components/ui/button";
import { BookText, Bookmark, LucideHome, UsersRound } from "lucide-react";
import Image from "next/image";
import React from "react";

interface navLinksProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function Home() {
  const navLinks: navLinksProps[] = [
    {
      name: "Home",
      link: "/",
      icon: <LucideHome strokeWidth={0.75} />,
    },
    {
      name: "Questions",
      link: "/questions",
      icon: <BookText strokeWidth={0.75} />,
    },
    {
      name: "Collabarative Space",
      link: "/collabrative-space",
      icon: <UsersRound strokeWidth={0.75} />,
    },
    {
      name: "Saved",
      link: "/saved",
      icon: <Bookmark strokeWidth={0.75} />,
    },
  ];
  return (
    <main className="flex min-h-screen h-screen w-screen flex-col  ">
      <header className="w-full flex justify-between border-b-[1px]  items-center h-[60px] fixed top-0 left-0 right-0 px-8 py-2">
        <div className="flex gap-1 items-center">
          <Image
            src="/code.png"
            alt="CodeCanvas"
            className="object-contain"
            width={48}
            height={48}
          />{" "}
          <span className="uppercase text-[1.25rem] font-semibold">
            CodeCanvas
          </span>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </header>

      <div className="w-full h-full flex overflow-hidden mt-[60px]">
        <div className="px-2 py-4 border-r-[1px] gap-4 h-full w-full max-w-[300px] flex flex-col">
          {navLinks.map((item) => (
            <>
              <div className="flex cursor-pointer gap-2 px-4 py-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </>
          ))}
        </div>
        <div className="w-full bg-red-50 p-8 flex flex-col overflow-hidden overflow-y-auto">
          {Array.from({ length: 10 }).map((item, index) => (
            <>
              <div></div>
            </>
          ))}
        </div>
        <div className="px-2 py-4 border-l-[1px] w-full gap-4 h-full max-w-[400px] flex flex-col">
          {navLinks.map((item) => (
            <>
              <div className="flex cursor-pointer gap-2 px-4 py-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
