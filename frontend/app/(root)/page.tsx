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

import ProductCard from "../../components/ProductCard";

interface navLinksProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function Home() {
  return (
    <div className="w-full h-full flex overflow-hidden">
      <div className="w-full bg-red-50 p-8 flex flex-col gap-8 hs overflow-hidden overflow-y-auto">
        {Array.from({ length: 10 }).map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
}
