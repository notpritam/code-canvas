import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Sidebar() {
  return (
    <div className="px-4 py-4 border-l-[1px] w-full gap-4 h-full max-w-[400px] flex flex-col">
      <Button>Post a Question</Button>
      {/*  {navLinks.map((item, index) => (
        <>
          <div key={index} className="flex cursor-pointer gap-2 px-4 py-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
        </>
      ))} */}

      <Card className="">
        <CardHeader>Popular Communities</CardHeader>
        <CardContent className="gap-4 flex flex-col">
          {Array.from({ length: 4 }).map((item, index) => (
            <div className="flex gap-2" key={index}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex items-start flex-col">
                <span>s/JAVALearner</span>
                <span className="text-[12px] text-foreground">
                  71,560 members
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
