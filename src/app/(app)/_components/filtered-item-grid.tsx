"use client";

import { useItemSearch } from "@/app/(app)/_components/item-search.provider";
import { items } from "@/content/items";
import { Item } from "@/content/schema";

import { ItemGrid } from "./item-grid";

export const FilteredItemGrid = () => {
  const { tags, search, sort } = useItemSearch();

  const sortItems = (items: Item[]) => {
    if (sort.value === "newest") {
      return items.sort(
        (a, b) => b.dateAdded.getTime() - a.dateAdded.getTime(),
      );
    }

    if (sort.value === "alphabetical") {
      return items.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort.value === "reverse-alphabetical") {
      return items.sort((a, b) => b.title.localeCompare(a.title));
    }

    return items;
  };

  const filteredItems = items.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(search.toLowerCase());
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(search.toLowerCase());
    const contentMatch =
      search?.length > 0 ? titleMatch || descriptionMatch : true;

    const tagsMatch =
      tags.length > 0 ? tags.some((tag) => item.tags.includes(tag)) : true;

    return contentMatch && tagsMatch;
  });

  const sortedItems = sortItems(filteredItems);

  if (sortedItems.length === 0) {
    if (search.length > 0) {
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <p>
            No items found for search{" "}
            <span className="font-bold">&quot;{search}&quot;</span>
          </p>
        </div>
      );
    }

    return (
      <div className="flex h-full flex-col items-center justify-center">
        <p>No items found</p>
      </div>
    );
  }

  return <ItemGrid items={filteredItems} />;
};
