import ProductCard from "@/components/ProductCard";
import ReplyCard from "@/components/ReplyCard";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className=" w-full relative h-full flex flex-col hs overflow-hidden overflow-y-auto  bg-purple-50">
      <div className="w-full border-b-[1px] z-[10] px-8 flex gap-8 items-center backdrop-blur-lg min-h-[60px] sticky top-0">
        <Link href={"/"}>
          <ChevronLeft
            className="cursor-pointer"
            size={32}
            strokeWidth={0.75}
          />
        </Link>

        <span className="font-medium filter backdrop-invert">POST</span>
      </div>
      <div className="flex gap-8 flex-col p-8">
        {Array.from({ length: 1 }).map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="flex gap-3 flex-col p-8 pt-0 pl-16">
        {Array.from({ length: 10 }).map((item, index) => (
          <ReplyCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Page;
