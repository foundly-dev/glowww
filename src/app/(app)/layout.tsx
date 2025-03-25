import { Suspense } from "react";

import { ItemSearchProvider } from "./_components/store/item-search.provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <ItemSearchProvider>{children}</ItemSearchProvider>
      </Suspense>
    </div>
  );
}
