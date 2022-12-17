import React, { useMemo } from "react";
import DocSidebar from "@theme/DocSidebar";
import { useGamesContext } from "../context/GamesContext";
import { useLocation } from "@docusaurus/router";

export const SideBar = () => {
  const { games } = useGamesContext();
  const location = useLocation();

  const items = useMemo<
    React.ComponentProps<typeof DocSidebar>["sidebar"]
  >(() => {
    return games.map((game) => {
      if (game.pages !== undefined && game.pages.length > 0) {
        return {
          type: "category",
          href: game.path,
          label: game.title,
          collapsed: false,
          collapsible: true,
          items: game.pages.map((page) => ({
            type: "link",
            href: page.path,
            label: page.title,
          })),
        };
      } else {
        return {
          type: "link",
          href: game.path,
          label: game.title,
        };
      }
    });
  }, []);

  return (
    <DocSidebar
      sidebar={items}
      path={location.pathname}
      onCollapse={() => {}}
      isHidden={false}
    ></DocSidebar>
  );
};
