import { useState, useEffect, useRef } from "react";

export function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    if (Object.is(prevValue.current, value)) return;

    const timer = setTimeout(() => {
      setDebounced(value);
      prevValue.current = value;
    }, delayMs);

    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}
