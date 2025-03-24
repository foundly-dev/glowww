"use client";

import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { useItemSearch } from "../store/item-search.provider";

export const ItemFavourites = () => {
  const { filterFavourites, setFilterFavourites } = useItemSearch();

  const onToggle = () => {
    setFilterFavourites(!filterFavourites);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <Bookmark
            className={cn(
              "text-muted-foreground",
              filterFavourites && "text-amber-500",
            )}
            fill={filterFavourites ? "currentColor" : "none"}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle Bookmarks</p>
      </TooltipContent>
    </Tooltip>
  );
};
