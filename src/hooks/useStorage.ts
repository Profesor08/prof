import { useState, useEffect, Dispatch, SetStateAction } from "react";

function getItem<T>(key: string, initial: T): T;
function getItem<T>(key: string): T | null;
function getItem<T>(key: string, initial?: T): T | null {
  try {
    const data = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (err) {}

  if (initial !== undefined) {
    return initial;
  }

  return null;
}

function setItem<T>(key: string, data: T) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {}
}

export const useStorage = <T>(
  key: string,
  initialState: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [savedKey] = useState(key);

  const [state, setState] = useState<T>(() => {
    const data = getItem<T>(savedKey);

    if (data !== null) {
      return data;
    }

    setItem(savedKey, initialState);

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
    try {
      localStorage.setItem(savedKey, JSON.stringify(state));
    } catch (err) {}
  }, [savedKey, state]);

  return [state, setState];
};

export const getStorage = <T>(key: string, initialState: T): T => {
  const data = getItem<T>(key);

  if (data !== null) {
    return data;
  }

  return initialState;
};
