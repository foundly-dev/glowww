"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createItemSearchStore } from "./item-search.store";

export type ItemSearchStoreApi = ReturnType<typeof createItemSearchStore>;

export const ItemSearchStoreContext = createContext<ItemSearchStoreApi | null>(
  null,
);

export const ItemSearchProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<ItemSearchStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createItemSearchStore({
      search: "",
      tags: [],
      setSearch: () => {},
      setTags: () => {},
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
