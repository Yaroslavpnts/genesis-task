import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  let value = defaultValue;

  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      value = JSON.parse(saved);
    }
  } catch (error) {
    console.log(error);
    value = defaultValue;
  }

  return value;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
