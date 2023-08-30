import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import { ThemeClassNames, useColorMode } from "@docusaurus/theme-common";
import {
  ThemeOptions as MaterialThemeOptions,
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from "@mui/material/styles";
import ThemeLayout from "@theme/Layout";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { Atom } from "../../../components/Atom";
import {
  GamesContext,
  gamesConfig,
  useGamesContext,
} from "../context/GamesContext";
import { GamesBreadcrumbs } from "./GamesBreadcrumbs";
import { SideBar } from "./Sidebar";

// --ifm-color-primary: #3578e5;
// --ifm-color-secondary: #ebedf0;
// --ifm-color-success: #00a400;
// --ifm-color-info: #54c7ec;
// --ifm-color-warning: #ffba00;
// --ifm-color-danger: #fa383e;

const materialThemeLight: MaterialThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3578e5",
    },
    secondary: {
      main: "#ebedf0",
    },
  },
};

const materialThemeDark: MaterialThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3578e5",
    },
    secondary: {
      main: "#ebedf0",
    },
  },
};

const LogoAtom = () => {
  const [navbar, setNavbar] = useState<Element | null>(null);

  useEffect(() => {
    setNavbar(document.querySelector(".navbar__logo"));
  }, []);

  if (navbar !== null) {
    return ReactDOM.createPortal(<Atom size={32} />, navbar);
  }

  return null;
};

const Content: Component = ({ children }) => {
  const { colorMode } = useColorMode();
  const materialTheme = useMemo(() => {
    if (colorMode === "light") {
      return createTheme(materialThemeLight);
    }

    return createTheme(materialThemeDark);
  }, [colorMode]);

  return (
    <MaterialThemeProvider theme={materialTheme}>
      <LogoAtom />
      <div className={DocPageStyles.docPage}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer
          )}
        >
          <SideBar />
        </aside>
        <main className={clsx(MainStyles.docMainContainer)}>
          <div
            className={clsx(
              "container",
              "padding-top--md",
              "padding-bottom--lg"
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
                        "markdown"
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
    </MaterialThemeProvider>
  );
};

const Layout: Component = ({ children }) => {
  const { title } = useGamesContext();

  return (
    <ThemeLayout title={title}>
      <Content>{children}</Content>
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
