import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { Moon, Sun } from "lucide-react";

function Header() {
  return (
    <header className="w-full flex justify-between border-b-[1px]  items-center h-[60px] fixed top-0 left-0 right-0 px-8 py-2">
      <Link href={"/"} className="flex gap-1 items-center">
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
      </Link>
      <div className="flex gap-4 items-center">
        <Input
          className="min-w-[400px]"
          placeholder="Search a community or post"
        />
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        <Sun size={32} strokeWidth={0.75} />
        <Moon size={32} strokeWidth={0.75} />
      </div>
    </header>
  );
}

export default Header;
