import { useState, useEffect } from "react";

function getStorageValue(key: any, defaultValue: any) {
    if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key) as string;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
    }
}

export const useLocalStorage = (key: any, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};