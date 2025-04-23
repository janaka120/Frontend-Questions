import { useEffect, useState, useMemo, useCallback } from "react";

const cache = new Map<string, any>();

export function useFetchWithCache<T = any>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    if (cache.has(url)) {
      setData(cache.get(url));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      cache.set(url, result);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return useMemo(() => ({ data, loading, error }), [data, loading, error]);
}
