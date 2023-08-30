import { createContext, useContext } from "react";

type GamePage = {
  title: string;
  path: string;
  pages?: GamePage[];
};

type Context = {
  title: string;
  games: GamePage[];
};

export const gamesConfig: Context = {
  title: "Games",

  games: [
    { title: "Games", path: "/games" },
    {
      title: "Diablo 2",
      path: "/games/d2",
      pages: [
        { title: "Runeword Calculator", path: "/games/d2/runeword-calculator" },
        { title: "Runeword List", path: "/games/d2/runeword-list" },
      ],
    },
    {
      title: "Mu Online",
      path: "/games/mu-online",
      pages: [{ title: "Item Drop", path: "/games/mu-online/item-drop" }],
    },
  ],
};

export const GamesContext = createContext<Context>(gamesConfig);

export const useGamesContext = () => useContext(GamesContext);
