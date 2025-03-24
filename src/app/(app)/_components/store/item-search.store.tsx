import { CalendarPlus, SortAscIcon, SortDescIcon } from "lucide-react";
import { persist, createJSONStorage } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

import { Tag } from "@/content/schema";

export const sortOptions = [
  { label: "Sort A-Z", value: "alphabetical", icon: <SortAscIcon /> },
  {
    label: "Sort Z-A",
    value: "reverse-alphabetical",
    icon: <SortDescIcon />,
  },
  { label: "Newest", value: "newest", icon: <CalendarPlus /> },
] as const;
export type SortOption = (typeof sortOptions)[number];

export interface ItemSearchStore {
  search: string;
  setSearch: (search: string) => void;
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  filterFavourites: boolean;
  setFilterFavourites: (filterFavourites: boolean) => void;
  favourites: string[];
  setFavourites: (favourites: string[]) => void;
  addFavourite: (favourite: string) => void;
  removeFavourite: (favourite: string) => void;
}

export const createItemSearchStore = (initialState: ItemSearchStore) => {
  return createStore<ItemSearchStore>()(
    persist(
      (set) => ({
        ...initialState,
        setSearch: (search) => set({ search }),
        setTags: (tags) => set({ tags }),
        setSort: (sort) => set({ sort }),
        setFilterFavourites: (filterFavourites) => set({ filterFavourites }),
        setFavourites: (favourites) => set({ favourites }),
        addFavourite: (favourite) =>
          set((state) => ({ favourites: [...state.favourites, favourite] })),
        removeFavourite: (favourite) =>
          set((state) => ({
            favourites: state.favourites.filter((f) => f !== favourite),
          })),
      }),
      {
        name: "item-search-favourites",
        storage: createJSONStorage(() => localStorage),
        // Only persist the favourites field
        partialize: (state) => ({ favourites: state.favourites }),
      },
    ),
  );
};
