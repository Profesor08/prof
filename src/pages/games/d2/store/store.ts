import { getStorage, useStorage } from "@site/src/hooks/useStorage";
import { useCallback, useMemo } from "react";
import { atom, SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
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

const runesStore = atom<IRunesStore>({
  key: "runesStore",
  default: Object.entries(runes).reduce((runes, [key, rune]) => {
    const active = storage.runes.some(
      ([k, active]) => k === key && active === true,
    );

    runes[rune.id] = {
      ...rune,
      active: active,
    };

    return runes;
  }, {} as IRunesStore),
});

const itemsStore = atom({
  key: "itemsStore",
  default: items,
});

const filterNameStore = atom<string>({
  key: "filterNameStore",
  default: "",
});

export const useName = () => {
  return useRecoilState(filterNameStore);
};

const filterSocketsStore = atom<number | "">({
  key: "filterSocketsStore",
  default: "",
});

export const useSockets = () => {
  return useRecoilState(filterSocketsStore);
};

const filterSortingStore = atom<
  "" | "nameAsc" | "nameDesc" | "levelAsc" | "levelDesc"
>({
  key: "filterSortingStore",
  default: "",
});

export const useSorting = () => {
  return useRecoilState(filterSortingStore);
};

export const useFiltersActive = () => {
  const [name] = useName();
  const [sockets] = useSockets();
  const [sorting] = useSorting();

  return name.length > 0 || sockets !== "" || sorting !== "";
};

export const useRunes = (): [
  IRuneWithState[],
  (rune: IRune, active: boolean) => void,
  SetterOrUpdater<IRunesStore>,
] => {
  const [state, setState] = useRecoilState(runesStore);
  const [store, setStore] = useStorage<IRunewordCalculatorStorage>(
    "runeword-calculator",
    {
      runes: [],
    },
  );

  const setRune = useCallback(
    (rune: IRune, active: boolean) => {
      const newState = {
        ...state,
      };

      newState[rune.id] = {
        ...state[rune.id],
        active: active,
      };

      setState(newState);
      setStore({
        runes: Object.entries(newState).map(([key, rune]) => [
          key,
          rune.active,
        ]),
      });
    },
    [state, setState],
  );

  const runes = useMemo(() => {
    return Object.entries(state).map(([key, rune]) => rune);
  }, [state]);

  return [runes, setRune, setState];
};

export const useSelectedRunes = () => {
  const [runes] = useRunes();

  return runes.filter((rune) => rune.active === true);
};

export const useItems = () => {
  const items = useRecoilValue(itemsStore);
  const runes = useSelectedRunes();
  const [name] = useName();
  const [sockets] = useSockets();
  const [sorting] = useSorting();

  return items
    .filter((item) => {
      const isRuneMatch = item.runes.every((itemRune) =>
        runes.some((r) => r.id === itemRune),
      );
      const isNameMatch =
        name.length === 0
          ? true
          : item.name.toLowerCase().includes(name.toLowerCase());
      const isSocketsMatch =
        sockets === "" ? true : item.runes.length === sockets;

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
