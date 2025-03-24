import { Separator } from "@/components/ui/separator";

import { FilteredItemGrid } from "./_components/items/filtered-item-grid";
import { Hero } from "./_components/landing/hero";
import { ItemTags } from "./_components/landing/item-tags";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Separator />

      <div className="mt-27 flex flex-col gap-4 p-4 md:mt-38 md:p-8">
        <ItemTags />
        <FilteredItemGrid />
      </div>
    </main>
  );
}
