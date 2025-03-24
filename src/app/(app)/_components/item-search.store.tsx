import { createStore } from "zustand/vanilla";

import { Item, Tag } from "@/content/schema";

export interface ItemSearchStore {
  search: string;
  setSearch: (search: string) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  selected: Item | null;
  setSelected: (selected: Item | null) => void;
}

export const createItemSearchStore = (initialState: ItemSearchStore) => {
  return createStore<ItemSearchStore>((set) => ({
    ...initialState,
    setSearch: (search) => set({ search }),
    setTags: (tags) => set({ tags }),
    setSelected: (selected) => set({ selected }),
  }));
};
