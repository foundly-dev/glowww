"use client";

import { useItemSearch } from "@/components/providers/item-search.provider";
import { items } from "@/content/items";

import { ItemGrid } from "./item-grid";

export const FilteredItemGrid = () => {
  const { search } = useItemSearch();

  // TODO: improve search algorithm
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return <ItemGrid items={filteredItems} />;
};
