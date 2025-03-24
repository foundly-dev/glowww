"use client";

import { useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import { useQueryStoreSync } from "@/components/hooks/use-query-store-sync";
import { Tag } from "@/content/schema";

import { createItemSearchStore, sortOptions } from "./item-search.store";

export type ItemSearchStoreApi = ReturnType<typeof createItemSearchStore>;

export const ItemSearchStoreContext = createContext<ItemSearchStoreApi | null>(
  null,
);

export const ItemSearchProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<ItemSearchStoreApi | null>(null);
  const params = useSearchParams();
  const search = params.get("search") || "";
  const tags = (params.get("tags")?.split(",") || []) as Tag[];

  if (!storeRef.current) {
    storeRef.current = createItemSearchStore({
      search,
      setSearch: () => {},
      tags,
      setTags: () => {},
      sort: sortOptions[0],
      setSort: () => {},
      filterFavourites: false,
      setFilterFavourites: () => {},
      favourites: [],
      setFavourites: () => {},
      addFavourite: () => {},
      removeFavourite: () => {},
    });
  }

  return (
    <ItemSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ItemSearchStoreContext.Provider>
  );
};

export const useItemSearch = () => {
  const store = useContext(ItemSearchStoreContext);

  if (!store) {
    throw new Error("useItemSearch must be used within an ItemSearchProvider");
  }
  return useStore(store);
};

export const ItemSearchSync = () => {
  const { search, tags, setSearch, setTags } = useItemSearch();
  useQueryStoreSync("search", search, setSearch);
  useQueryStoreSync("tags", tags, setTags);

  return null;
};
