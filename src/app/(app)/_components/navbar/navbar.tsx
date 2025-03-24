import { Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { ItemFavourites } from "./item-favourites";
import { ItemSearch } from "./item-search";
import { ItemSort } from "./item-sort";
import { ItemTagsFilter } from "./item-tags-filter";

export const Navbar = () => {
  return (
    <div className="border-border bg-background/50 fixed bottom-4 left-1/2 z-10 mx-auto flex -translate-x-1/2 items-center justify-between gap-2 rounded-xl border p-2 backdrop-blur-sm">
      <Link href="/">
        <Button variant="ghost" size="icon">
          <Home className="text-muted-foreground size-4" />
        </Button>
      </Link>
      <div className="bg-border flex h-6 w-[1px]" />
      <ItemSearch />
      <ItemTagsFilter />
      <ItemSort />
      <ItemFavourites />
      <div className="bg-border flex h-6 w-[1px]" />
      <ModeToggle />
    </div>
  );
};
