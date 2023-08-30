import { getStorage, useStorage } from "@site/src/hooks/useStorage";
import { useCallback, useMemo } from "react";
import { create } from "zustand";
import { items } from "../data/rune-words";
import { IRune, Rune, runes } from "../data/runes";

type IRuneWithState = IRune & {
  active: boolean;
};

type IRunesStore = {
  [key in Rune]: IRuneWithState;
};

type IRunewordCalculatorStorage = { runes: [string, boolean][] };

const storage = getStorage<IRunewordCalculatorStorage>("runeword-calculator", {
  runes: [],
});

const useRunesStore = create<{
  runes: IRunesStore;
  setRunes: (runes: IRunesStore) => void;
}>((set) => ({
  runes: Object.entries(runes).reduce((runes, [key, rune]) => {
    const active = storage.runes.some(
      ([k, active]) => k === key && active === true
    );

    runes[rune.id] = {
      ...rune,
      active: active,
    };

    return runes;
  }, {} as IRunesStore),

  setRunes: (runes) => {
    set({ runes });
  },
}));

const useItemsStore = create(() => ({
  items,
}));

export const useName = create<{
  name: string;
  setName: (sockets: string) => void;
}>((set) => ({
  name: "",
  setName: (name) => {
    set({ name });
  },
}));

export const useSockets = create<{
  sockets: string;
  setSockets: (sockets: string) => void;
}>((set) => ({
  sockets: "",
  setSockets: (sockets) => {
    set({ sockets });
  },
}));

type Sorting = "" | "nameAsc" | "nameDesc" | "levelAsc" | "levelDesc";

export const useSorting = create<{
  sorting: Sorting;
  setSorting: (soring: Sorting) => void;
}>((set) => ({
  sorting: "",
  setSorting: (sorting) => {
    set({ sorting });
  },
}));

export const useFiltersActive = () => {
  const name = useName((state) => state.name);
  const sockets = useSockets((state) => state.sockets);
  const sorting = useSorting((state) => state.sorting);

  return name.length > 0 || sockets !== "" || sorting !== "";
};

export const useRunes = (): [
  IRuneWithState[],
  (rune: IRune, active: boolean) => void,
  (runes: IRunesStore) => void
] => {
  const storeRunes = useRunesStore((state) => state.runes);
  const setRunes = useRunesStore((state) => state.setRunes);
  const [store, setStore] = useStorage<IRunewordCalculatorStorage>(
    "runeword-calculator",
    {
      runes: [],
    }
  );

  const setRune = useCallback(
    (rune: IRune, active: boolean) => {
      const newState = {
        ...storeRunes,
      };

      newState[rune.id] = {
        ...storeRunes[rune.id],
        active: active,
      };

      setRunes(newState);
      setStore({
        runes: Object.entries(newState).map(([key, rune]) => [
          key,
          rune.active,
        ]),
      });
    },
    [storeRunes, setRunes]
  );

  const runes = useMemo(() => {
    return Object.entries(storeRunes).map(([key, rune]) => rune);
  }, [storeRunes]);

  return [runes, setRune, setRunes];
};

export const useSelectedRunes = () => {
  const [runes] = useRunes();

  return runes.filter((rune) => rune.active === true);
};

export const useItems = () => {
  const items = useItemsStore((state) => state.items);
  const runes = useSelectedRunes();
  const name = useName((state) => state.name);
  const sockets = useSockets((state) => state.sockets);
  const sorting = useSorting((state) => state.sorting);

  return items
    .filter((item) => {
      const isRuneMatch = item.runes.every((itemRune) =>
        runes.some((r) => r.id === itemRune)
      );

      const isNameMatch =
        name.length === 0
          ? true
          : item.name.toLowerCase().includes(name.toLowerCase());

      const isSocketsMatch =
        sockets === "" ? true : item.runes.length.toString() === sockets;

      return isRuneMatch && isNameMatch && isSocketsMatch;
    })
    .sort((a, b) => {
      switch (sorting) {
        case "":
          return 1;
        case "nameAsc": {
          if (a.name > b.name) {
            return 1;
          }

          if (a.name < b.name) {
            return -1;
          }

          return 0;
        }
        case "nameDesc": {
          if (a.name > b.name) {
            return -1;
          }

          if (a.name < b.name) {
            return 1;
          }

          return 0;
        }
        case "levelAsc": {
          if (a.level > b.level) {
            return 1;
          }

          if (a.level < b.level) {
            return -1;
          }

          return 0;
        }
        case "levelDesc": {
          if (a.level > b.level) {
            return -1;
          }

          if (a.level < b.level) {
            return 1;
          }

          return 0;
        }
      }
    });
};
