import { FilteredItemGrid } from "./_components/items/filtered-item-grid";
import { Header } from "./_components/landing/header";
import { ItemTags } from "./_components/landing/item-tags";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div>
        <div className="flex flex-col gap-4 p-4 pb-24">
          <ItemTags />
          <FilteredItemGrid />
        </div>
      </div>
    </main>
  );
}
