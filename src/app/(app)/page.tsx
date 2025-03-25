import { FilteredItemGrid } from "./_components/items/filtered-item-grid";
import { Header } from "./_components/landing/header";
import { Navbar } from "./_components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Navbar className="flex md:hidden" />
      <div className="flex flex-col gap-4 p-4 pb-20 md:pb-4">
        <FilteredItemGrid />
      </div>
    </main>
  );
}
