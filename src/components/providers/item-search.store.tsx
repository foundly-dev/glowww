import { createStore } from "zustand/vanilla";

export interface ItemSearchStore {
  search: string;
  setSearch: (search: string) => void;
}

export const createItemSearchStore = (initialState: ItemSearchStore) => {
  return createStore<ItemSearchStore>((set) => ({
    ...initialState,
    setSearch: (search) => set({ search }),
  }));
};
