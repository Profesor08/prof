import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useStorage = <T>(
  key: string,
  initialState: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [savedKey] = useState(key);

  const [state, setState] = useState<T>(() => {
    const data = localStorage.getItem(savedKey);

    if (data !== null) {
      return JSON.parse(data);
    }

    localStorage.setItem(savedKey, JSON.stringify(initialState));

    return initialState;
  });

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.key === savedKey && event.newValue !== null) {
        setState(JSON.parse(event.newValue));
      }
    });
  }, [savedKey]);

  useEffect(() => {
    localStorage.setItem(savedKey, JSON.stringify(state));
  }, [savedKey, state]);

  return [state, setState];
};

export const getStorage = <T>(key: string, initialState: T): T => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return initialState;
};
