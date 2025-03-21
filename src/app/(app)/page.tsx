import { FilteredItemGrid } from "./_components/filtered-item-grid";
import { ItemTags } from "./_components/item-tags";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <ItemTags />
      <FilteredItemGrid />
    </main>
  );
}
