import { Button } from "@/components/ui/button";
import {
  BookText,
  Bookmark,
  LucideHome,
  LucideImage,
  MessageCircleMore,
  MoreVerticalIcon,
  Share,
  ThumbsDown,
  ThumbsUp,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProductCard from "../../components/ProductCard";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface navLinksProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function Home() {
  return (
    <div className="w-full bg-purple-50 h-full flex flex-col gap-4 overflow-hidden ">
      <div className="w-full   flex flex-col gap-8 hs overflow-hidden overflow-y-auto p-8">
        <div className="">
          <Card>
            <CardContent className="flex gap-4 mt-8 justify-between flex-row">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* <div className="flex items-start flex-col">
                  <span className="text-[12px] text-foreground">
                    @notpritam
                  </span>
                  <span>Pritam Sharma</span>
                </div> */}
              </div>
              <div className="flex w-full flex-col gap-2">
                <Input placeholder="Title" className="border-none" />
                <Textarea
                  placeholder="Enter description here"
                  className="border-none"
                />
              </div>

              {/* <div className="flex gap-2 ">
                Badge
                <Badge variant="outline">s/JavaCode</Badge>
                <Badge variant="outline">Community Verified</Badge>
                <Badge variant={"outline"} className="cursor-pointer">
                  <Bookmark size={16} strokeWidth={0.75} />
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVerticalIcon strokeWidth={0.75} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Save</DropdownMenuItem>

                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <LucideImage strokeWidth={0.75} /> <Button>Post</Button>
            </CardFooter>
          </Card>
        </div>
        {Array.from({ length: 10 }).map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
