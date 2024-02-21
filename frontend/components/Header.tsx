import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
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
  );
}

export default Header;
