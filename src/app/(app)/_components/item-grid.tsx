import { Item } from "@/content/schema";

import { ItemCard } from "./item-card";

export interface ItemGridProps {
  items: Item[];
}

export const ItemGrid = ({ items }: ItemGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
