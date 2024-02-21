import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bookmark,
  ChevronLeft,
  FlagTriangleLeft,
  MessageCircleMore,
  MessageCircleWarning,
  Share,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ReplyCard() {
  const index = 1;
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-start flex-col">
            <span className="text-[12px] text-foreground">@notpritam</span>
            <span>Pritam Sharma</span>
          </div>
        </div>

        <div className="flex gap-2 ">
          {/* Badge */}
          {/* <Badge variant="outline">s/JavaCode</Badge>
          <Badge variant="outline">Community Verified</Badge> */}
          <Badge variant={"outline"} className="cursor-pointer">
            <MessageCircleWarning size={16} strokeWidth={0.75} />
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
        {/* <CardTitle>
          <Link href={`/post/${index}`}>
            How to disable error highlighting for Java code in VS Code?
          </Link>
        </CardTitle> */}
        <CardDescription>
          I to disable in java VS Code. VS Codo tries to a Groovy tile its is
          Java
        </CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        <div className="flex gap-2 rounded-full border items-center px-4 py-2">
          <ThumbsUp size={16} strokeWidth={0.75} />
          <span className="text-[.85rem]">2.3k</span>
          <ThumbsDown size={16} strokeWidth={0.75} />
        </div>
        <Link
          href={`/post/${index}`}
          key={index}
          className="flex gap-2 rounded-full border items-center px-4 py-2"
        >
          <MessageCircleMore size={16} strokeWidth={0.75} />
          <span className="text-[.85rem]">1.3k Comments</span>
        </Link>
        <div className="flex gap-2 rounded-full border items-center px-4 py-2">
          <Share size={16} strokeWidth={0.75} />
          <span className="text-[.85rem]">Share</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ReplyCard;
