import { SortAscIcon, SortDescIcon, Star } from "lucide-react";
import { createStore } from "zustand/vanilla";

import { Tag } from "@/content/schema";

export const sortOptions = [
  { label: "Sort A-Z", value: "alphabetical", icon: <SortAscIcon /> },
  {
    label: "Sort Z-A",
    value: "reverse-alphabetical",
    icon: <SortDescIcon />,
  },
  { label: "Newest", value: "newest", icon: <Star /> },
] as const;
export type SortOption = (typeof sortOptions)[number];

export interface ItemSearchStore {
  search: string;
  setSearch: (search: string) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  sort: SortOption;
  setSort: (sort: SortOption) => void;
}

export const createItemSearchStore = (initialState: ItemSearchStore) => {
  return createStore<ItemSearchStore>((set) => ({
    ...initialState,
    setSearch: (search) => set({ search }),
    setTags: (tags) => set({ tags }),
    setSort: (sort) => set({ sort }),
  }));
};
