/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useQueryStoreSync = <T extends unknown>(
  key: string,
  get: T,
  set: ((val: T) => void) | ((val: string) => void),
) => {
  const isReady = true;
  const [isFetched, setIsFetched] = useState(false);
  const params = useSearchParams();
  const value = params.get(key);

  const getSearchUrl = () =>
    new URLSearchParams(window.location.search.slice(1));

  useEffect(() => {
    if (!isReady || isFetched || !value || value === "[]") return;
    setIsFetched(true);
    try {
      set(JSON.parse(value));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      console.error("Failed to parse query params for", key, "given", value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should only call once when router is ready
  }, [isReady]);

  useEffect(() => {
    if (!isReady || get === undefined) return;
    const searchParams = getSearchUrl();
    searchParams.set(key, JSON.stringify(get));
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- should only call once when get value changes
  }, [get]);
};
