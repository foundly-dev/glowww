"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@/content/schema";
import { cn } from "@/lib/utils";

import { ItemDrawer } from "./item-drawer";

export interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <ItemDrawer item={item}>
      <Card className="max-size-[300px] group relative aspect-square h-full w-full cursor-pointer justify-end overflow-hidden p-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="z-[1] object-cover transition-all duration-200 group-hover:scale-110 group-hover:blur"
        />

        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 to-transparent" />

        <CardHeader className="z-[3] py-6">
          <CardTitle className="text-white drop-shadow-md">
            {item.title}
          </CardTitle>
          <div
            className={cn(
              "h-0 opacity-0 transition-all duration-200",
              "group-hover:h-[80px] group-hover:opacity-100",
            )}
          >
            <CardDescription className={cn("line-clamp-2 text-white/80")}>
              {item.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </ItemDrawer>
  );
};
