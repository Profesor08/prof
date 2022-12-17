import React from "react";
import { ThemeProvider } from "styled-components";
import { GamesLayout } from "../../components/GamesLayout";
import { theme } from "../theme/theme";

export const D2Layout: Component = ({ children }) => {
  return (
    <GamesLayout>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GamesLayout>
  );
};

export default D2Layout;
