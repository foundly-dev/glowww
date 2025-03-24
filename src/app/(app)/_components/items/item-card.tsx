"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@/content/schema";
import { cn } from "@/lib/utils";

import { ItemDrawer } from "./item-drawer";
import { ItemFavourite } from "./item-favourite";
import { ItemTagIcon } from "./item-tag-icon";

export interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <ItemDrawer item={item}>
      <div className="group flex cursor-pointer flex-col gap-2">
        <Card className="max-size-[300px] relative aspect-6/4 h-full w-full justify-end overflow-hidden p-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="z-[1] object-cover transition-all duration-200 group-hover:scale-110 group-hover:blur"
          />

          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 to-transparent" />

          <CardHeader className="z-[3] p-4 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {item.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-sm">
                    <ItemTagIcon tag={tag} className="size-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
              {item.source && (
                <Image
                  src={item.source.image}
                  alt={item.source.title}
                  className="size-4"
                  width={16}
                  height={16}
                />
              )}
            </div>

            <div
              className={cn(
                "h-0 opacity-0 transition-all duration-200",
                "group-hover:h-[70px] group-hover:opacity-100",
              )}
            >
              <CardDescription className={cn("line-clamp-3 text-white/80")}>
                {item.description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <div className="flex items-center justify-between p-1">
          <CardTitle className="">{item.title}</CardTitle>
          <ItemFavourite item={item} className="size-4 cursor-pointer" />
        </div>
      </div>
    </ItemDrawer>
  );
};
