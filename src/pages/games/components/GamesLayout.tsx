import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ThemeLayout from "@theme/Layout";
import { ThemeClassNames } from "@docusaurus/theme-common";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import { SideBar } from "./Sidebar";
import { GamesBreadcrumbs } from "./GamesBreadcrumbs";
import clsx from "clsx";
import {
  gamesConfig,
  GamesContext,
  useGamesContext,
} from "../context/GamesContext";
import {
  Atom,
  Core,
  Electron1,
  Electron2,
  Electron3,
} from "../../../components/Atom";

const LogoAtom = () => {
  const [navbar, setNavbar] = useState<Element | null>(null);
  const size = 32;

  useEffect(() => {
    setNavbar(document.querySelector(".navbar__logo"));
  }, []);

  if (navbar !== null) {
    return ReactDOM.createPortal(
      <Atom size={size}>
        <Core size={size * 0.2} />
        <Electron1
          size={size * 0.128}
          orbital={{ size: size * 0.857, weight: size * 0.05 }}
        />
        <Electron2
          size={size * 0.128}
          orbital={{ size: size * 0.857, weight: size * 0.05 }}
        />
        <Electron3
          size={size * 0.128}
          orbital={{ size: size * 0.857, weight: size * 0.05 }}
        />
      </Atom>,
      navbar,
    );
  }

  return null;
};

const Layout: Component = ({ children }) => {
  const { title } = useGamesContext();

  return (
    <ThemeLayout title={title}>
      <LogoAtom />
      <div className={DocPageStyles.docPage}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer,
          )}
        >
          <SideBar />
        </aside>
        <main className={clsx(MainStyles.docMainContainer)}>
          <div
            className={clsx(
              "container",
              "padding-top--md",
              "padding-bottom--lg",
            )}
          >
            <div className="row">
              <div className={clsx("col", DocItemColStyles.docItemCol)}>
                <div className={DocItemStyles.docItemContainer}>
                  <article>
                    <GamesBreadcrumbs />
                    <div
                      className={clsx(
                        ThemeClassNames.docs.docMarkdown,
                        "markdown",
                      )}
                    >
                      {children}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeLayout>
  );
};

export const GamesLayout: Component = ({ children }) => {
  return (
    <GamesContext.Provider value={gamesConfig}>
      <Layout>{children}</Layout>
    </GamesContext.Provider>
  );
};
