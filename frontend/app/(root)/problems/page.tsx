import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Page = async () => {
  return (
    <div className="w-full p-8 bg-purple-50 flex flex-col gap-4">
      <div className="flex gap-8 flex-nowrap overflow-hidden  hide overflow-x-auto ">
        {Array.from({ length: 5 }).map((_, index) => (
          <>
            <Image
              key={index}
              className="rounded-lg"
              alt="ideas"
              src="/bg.jpg"
              width={250}
              height={250}
            />
          </>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-[1.25rem]">Study Plan</span>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <>
              <Card key={index}>
                <div className="px-4 py-2 flex gap-4">
                  <Image
                    className="rounded-lg"
                    alt="ideas"
                    src="/bg.jpg"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">Title</span>
                    <span className="text-foreground">Description Here</span>
                  </div>
                </div>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
