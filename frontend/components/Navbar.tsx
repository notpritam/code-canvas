import {
  BookText,
  Bookmark,
  LucideHome,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface navLinksProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const Navbar = async () => {
  const navLinks: navLinksProps[] = [
    {
      name: "Home",
      link: "/",
      icon: <LucideHome strokeWidth={0.75} />,
    },
    {
      name: "Problems",
      link: "/problems",
      icon: <BookText strokeWidth={0.75} />,
    },
    {
      name: "Collabarative Space",
      link: "/collabrative-space",
      icon: <UsersRound strokeWidth={0.75} />,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <MessageCircle strokeWidth={0.75} />,
    },
    {
      name: "Saved",
      link: "/saved",
      icon: <Bookmark strokeWidth={0.75} />,
    },
  ];
  return (
    <div className="h-full max-w-[300px] w-full px-2 py-4 border-r-[1px] flex flex-col gap-4 ">
      <div className="gap-4  w-full  flex flex-col">
        {navLinks.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="flex cursor-pointer gap-2 px-4 py-2"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <Separator />

      <div className="px-2">
        <span className="text-[1.5rem] font-semibold">Topic</span>
      </div>
      <div className="gap-2  w-full  flex flex-col">
        {navLinks.map((item, index) => (
          <>
            <div key={index} className="flex cursor-pointer gap-2 px-4 py-2">
              <span>{item.name}</span>
            </div>
          </>
        ))}
      </div>

      <Separator />

      <div className="px-2">
        <span className="text-[1.5rem] font-semibold">Resources</span>
      </div>
      <div className="gap-2  w-full  flex flex-col">
        {navLinks.map((item, index) => (
          <>
            <div key={index} className="flex cursor-pointer gap-2 px-4 py-2">
              <span>{item.name}</span>
            </div>
          </>
        ))}
      </div>
      <Separator />

      <div className="flex flex-wrap">
        {navLinks.map((item, index) => (
          <>
            <div
              key={index}
              className="flex text-[12px] cursor-pointer gap-2 px-4 py-2"
            >
              <span>{item.name}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
