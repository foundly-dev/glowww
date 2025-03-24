import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
        <div className="mx-auto flex w-full max-w-sm flex-col md:max-w-2xl md:flex-row">
          <DrawerHeader>
            <Card className="relative aspect-square h-full w-full overflow-hidden p-0">
              <Image
                src={item?.image}
                alt={item?.title}
                width={300}
                height={300}
              />
            </Card>
          </DrawerHeader>

          <div className="flex w-full flex-col gap-4 py-4">
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <DrawerTitle>{item?.title}</DrawerTitle>
                <ItemFavourite item={item} />
              </div>
              <DrawerDescription>{item?.description}</DrawerDescription>
            </div>
            <Link href={item.href} target="_blank" className="self-end">
              <Button>
                Visit
                <ExternalLink />
              </Button>
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
