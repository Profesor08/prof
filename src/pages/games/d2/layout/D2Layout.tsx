import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GamesLayout } from "../../components/GamesLayout";
import { theme } from "../theme/theme";

export const D2Layout: Component = ({ children }) => {
  return (
    <GamesLayout>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </GamesLayout>
  );
};

export default D2Layout;
