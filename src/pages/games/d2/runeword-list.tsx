import React from "react";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import D2Layout from "./layout/D2Layout";
import { useRunes } from "./store/store";
import { Rune } from "./components/rune/Rune";

const RunewordList = () => {
  const [runes] = useRunes();

  return (
    <>
      {runes.map((rune) => (
        <Rune key={rune.id} {...rune} />
      ))}
    </>
  );
};

const RunewordListPage = () => {
  return (
    <D2Layout>
      <MDXContent>
        <Heading as="h1">Runeword List</Heading>
        <RunewordList />
      </MDXContent>
    </D2Layout>
  );
};

export default RunewordListPage;
