import { createStore } from "zustand/vanilla";

import { Tag } from "@/content/schema";

export interface ItemSearchStore {
  search: string;
  setSearch: (search: string) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
}

export const createItemSearchStore = (initialState: ItemSearchStore) => {
  return createStore<ItemSearchStore>((set) => ({
    ...initialState,
    setSearch: (search) => set({ search }),
    setTags: (tags) => set({ tags }),
  }));
};
