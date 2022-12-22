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

const filterStore = atom({
  key: "filterStore",
  default: {},
});

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

  return items.filter((item) =>
    item.runes.every((itemRune) => runes.some((r) => r.id === itemRune)),
  );
};
