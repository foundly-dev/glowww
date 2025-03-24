"use client";

import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useItemSearch } from "../store/item-search.provider";

export const ItemFavourites = () => {
  const { filterFavourites, setFilterFavourites } = useItemSearch();

  const onToggle = () => {
    setFilterFavourites(!filterFavourites);
  };

  return (
    <Button variant="ghost" size="icon" onClick={onToggle}>
      <Star
        className={cn(
          "text-muted-foreground",
          filterFavourites && "text-amber-500",
        )}
        fill={filterFavourites ? "currentColor" : "none"}
      />
    </Button>
  );
};
