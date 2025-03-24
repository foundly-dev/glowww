import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Item } from "@/content/schema";
import { cn } from "@/lib/utils";

import { useItemSearch } from "../store/item-search.provider";

export interface ItemFavouriteProps {
  item: Item;
  className?: string;
}

export const ItemFavourite = ({ item, className }: ItemFavouriteProps) => {
  const { favourites, addFavourite, removeFavourite } = useItemSearch();
  const isFavourite = favourites.includes(item.id);

  const onFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isFavourite) {
      removeFavourite(item.id);
    } else {
      addFavourite(item.id);
    }
  };

  return (
    <Button
      onClick={onFavourite}
      variant="ghost"
      size="icon"
      className={cn(className)}
    >
      <Star
        fill={isFavourite ? "currentColor" : "none"}
        className={cn(
          isFavourite && "text-yellow-500",
          "transition-all duration-200",
        )}
      />
    </Button>
  );
};
