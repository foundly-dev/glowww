import { FilteredItemGrid } from "./_components/items/filtered-item-grid";
import { ItemTags } from "./_components/landing/item-tags";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <ItemTags />
      <FilteredItemGrid />
    </main>
  );
}
