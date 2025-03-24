"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useStore } from "zustand";

import { Tag } from "@/content/schema";

import { createItemSearchStore } from "./item-search.store";

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
      tags,
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

export const ItemSearchSync = () => {
  const router = useRouter();
  const { search, tags } = useItemSearch();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (tags.length) params.set("tags", tags.join(","));
    return params.toString();
  }, [search, tags]);

  useEffect(() => {
    const queryString = createQueryString();
    window.history.replaceState({}, "", queryString ? `?${queryString}` : "");
  }, [search, tags, router, createQueryString]);

  return null;
};
