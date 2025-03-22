"use client";
import { useItemSearch } from "@/app/(app)/_components/item-search.provider";
import { items } from "@/content/items";

import { ItemGrid } from "./item-grid";

export const FilteredItemGrid = () => {
  const { tags, search } = useItemSearch();

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

  if (filteredItems.length === 0) {
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
