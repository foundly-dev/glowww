import { ExternalLink, Globe, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import Github from "@/components/icons/github-icon";
import X from "@/components/icons/x-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Item } from "@/content/schema";

import { ItemFavourite } from "./item-favourite";

export interface ItemDrawerProps {
  item: Item;
  /**
   * The content that should trigger the drawer to open.
   */
  children: ReactNode;
}

export const ItemDrawer = ({ item, children }: ItemDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col px-4 md:max-w-2xl md:flex-row">
          <DrawerHeader className="w-full px-0">
            <Card className="relative aspect-3/2 w-full overflow-hidden p-0 md:max-w-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="zobject-cover blur-xs"
              />
              <Image
                src={item?.image}
                alt={item?.title}
                fill
                className="object-contain"
              />
            </Card>
          </DrawerHeader>

          <div className="flex w-full flex-col gap-4 py-4">
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <DrawerTitle>
                  {item?.title}
                  <div className="text-muted-foreground text-xs">
                    <Link href={item.author.href ?? ""} target="_blank">
                      {item.author.name}
                    </Link>
                  </div>
                </DrawerTitle>
                <ItemFavourite item={item} />
              </div>

              <DrawerDescription>{item?.description}</DrawerDescription>
            </div>
            <div className="flex items-center justify-end gap-2">
              {item.socials?.website && (
                <Link href={item.socials.website} target="_blank">
                  <Button variant="ghost" size="icon">
                    <Globe />
                  </Button>
                </Link>
              )}
              {item.socials?.x && (
                <Link href={item.socials.x} target="_blank">
                  <Button variant="ghost" size="icon">
                    <X />
                  </Button>
                </Link>
              )}
              {item.socials?.npm && (
                <Link href={item.socials.npm} target="_blank">
                  <Button variant="ghost" size="icon">
                    <Package />
                  </Button>
                </Link>
              )}
              {item.socials?.github && (
                <Link href={item.socials.github} target="_blank">
                  <Button variant="ghost" size="icon">
                    <Github />
                  </Button>
                </Link>
              )}
              <Link href={item.href} target="_blank" className="self-end">
                <Button>
                  Visit
                  <ExternalLink />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
