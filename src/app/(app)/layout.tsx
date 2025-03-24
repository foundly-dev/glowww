import { Suspense } from "react";

import { Navbar } from "./_components/navbar/navbar";
import { ItemSearchProvider } from "./_components/store/item-search.provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <Suspense>
        <ItemSearchProvider>
          <Navbar />
          {children}
        </ItemSearchProvider>
      </Suspense>
    </div>
  );
}
