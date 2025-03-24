import { ItemFavourites } from "./item-favourites";
import { ItemSearch } from "./item-search";
import { ItemSort } from "./item-sort";
import { ItemTagsFilter } from "./item-tags-filter";

export const Navbar = () => {
  return (
    <div className="border-border bg-background fixed bottom-4 left-1/2 z-10 mx-auto flex -translate-x-1/2 items-center justify-between gap-2 rounded-xl border p-2 backdrop-blur-sm">
      <ItemSearch />
      <ItemTagsFilter />
      <ItemSort />
      <ItemFavourites />
    </div>
  );
};
