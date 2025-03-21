import { Navbar } from "@/app/(app)/_components/navbar";
import { ItemSearchProvider } from "@/components/providers/item-search.provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <ItemSearchProvider>
        <Navbar />
        {children}
      </ItemSearchProvider>
    </div>
  );
}
