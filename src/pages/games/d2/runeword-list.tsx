import React from "react";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import D2Layout from "./layout/D2Layout";
import { runes } from "./store/runes";
import { Rune } from "./components/rune/Rune";

export const RunewordCalculator = () => {
  return (
    <D2Layout>
      <MDXContent>
        <Heading as="h1">Runeword List</Heading>
        {Array.from(runes).map(([type, rune]) => (
          <Rune key={type} {...rune} />
        ))}
      </MDXContent>
    </D2Layout>
  );
};

export default RunewordCalculator;
