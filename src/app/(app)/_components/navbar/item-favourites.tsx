"use client";

import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useItemSearch } from "../store/item-search.provider";

export const ItemFavourites = () => {
  const { filterFavourites, setFilterFavourites } = useItemSearch();

  const onToggle = () => {
    setFilterFavourites(!filterFavourites);
  };

  return (
    <Button variant="ghost" size="icon" onClick={onToggle}>
      <Star
        className="text-muted-foreground"
        fill={filterFavourites ? "currentColor" : "none"}
      />
    </Button>
  );
};
