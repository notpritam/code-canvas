import { Button } from "@/components/ui/button";
import {
  BookText,
  Bookmark,
  LucideHome,
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
        <div className="w-full bg-red-50 p-8 flex flex-col gap-8 hs overflow-hidden overflow-y-auto">
          {Array.from({ length: 10 }).map((item, index) => (
            <>
              <Card>
                <CardHeader className="flex justify-between flex-row">
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex items-start flex-col">
                      <span className="text-[12px] text-foreground">
                        @notpritam
                      </span>
                      <span>Pritam Sharma</span>
                    </div>
                  </div>

                  <div className="flex gap-2 ">
                    {/* Badge */}
                    <Badge variant="outline">s/JavaCode</Badge>
                    <Badge variant="outline">Community Verified</Badge>
                    <Badge variant={"outline"} className="cursor-pointer">
                      <Bookmark size={16} strokeWidth={0.75} />
                    </Badge>
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVerticalIcon strokeWidth={0.75} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Save</DropdownMenuItem>

                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <CardTitle>
                    How to disable error highlighting for Java code in VS Code?
                  </CardTitle>
                  <CardDescription>
                    I to disable in java VS Code. VS Codo tries to a Groovy tile
                    its is Java
                  </CardDescription>
                  <div className="flex gap-2">
                    <Image
                      src={"/bg.jpg"}
                      className="rounded-md"
                      height={300}
                      width={400}
                      alt="Image"
                    />
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <div className="flex gap-2 rounded-full border items-center px-4 py-2">
                    <ThumbsUp size={16} strokeWidth={0.75} />
                    <span className="text-[.85rem]">2.3k</span>
                    <ThumbsDown size={16} strokeWidth={0.75} />
                  </div>
                  <div className="flex gap-2 rounded-full border items-center px-4 py-2">
                    <MessageCircleMore size={16} strokeWidth={0.75} />
                    <span className="text-[.85rem]">1.3k Comments</span>
                  </div>
                  <div className="flex gap-2 rounded-full border items-center px-4 py-2">
                    <Share size={16} strokeWidth={0.75} />
                    <span className="text-[.85rem]">Share</span>
                  </div>
                </CardFooter>
              </Card>
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
