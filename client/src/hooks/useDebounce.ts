import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number): string | null {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearTimeout(t);
    }
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
