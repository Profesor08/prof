import React from "react";
import D2Layout from "./layout/D2Layout";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";

export const D2 = () => {
  return (
    <D2Layout>
      <MDXContent>
        <Heading as="h1">Diablo 2</Heading>
      </MDXContent>
    </D2Layout>
  );
};

export default D2;
