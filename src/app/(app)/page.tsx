import { FilteredItemGrid } from "./_components/items/filtered-item-grid";
import { Hero } from "./_components/landing/hero";
import { ItemTags } from "./_components/landing/item-tags";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div>
        <div className="flex flex-col gap-4 p-4 pb-24 md:p-8">
          <ItemTags />
          <FilteredItemGrid />
        </div>
      </div>
    </main>
  );
}
