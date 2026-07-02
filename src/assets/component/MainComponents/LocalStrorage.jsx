import { useState, useEffect } from "react";

export default function useLocalStorageState(key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) return [];

    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
