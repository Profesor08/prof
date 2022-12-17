import React from "react";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import { GamesLayout } from "./components/GamesLayout";

export const Games = () => {
  return (
    <GamesLayout>
      <MDXContent>
        <Heading as="h1">Games</Heading>
      </MDXContent>
    </GamesLayout>
  );
};

export default Games;
