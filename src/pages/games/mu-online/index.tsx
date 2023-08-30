import React from "react";
import { GamesLayout } from "../components/GamesLayout";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";

export const D2 = () => {
  return (
    <GamesLayout>
      <MDXContent>
        <Heading as="h1">Mu Online</Heading>
      </MDXContent>
    </GamesLayout>
  );
};

export default D2;
