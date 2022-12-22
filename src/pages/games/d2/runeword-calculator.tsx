import React, { useCallback } from "react";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import D2Layout from "./layout/D2Layout";
import { useItems, useRunes } from "./store/store";
import { Rune } from "./components/rune/Rune";
import styled, { css } from "styled-components";
import { useStorage } from "@site/src/hooks/useStorage";
import { Item } from "./components/item/Item";
import { RuneName } from "./components/item-tooltip/ItemTooltip";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  gap: 24px;
`;

const RunesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, auto));
  align-content: start;
  gap: 2px;
`;

const RuneItem = styled.div<{ active: boolean }>`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 4px;

  ${(p) =>
    p.active &&
    css`
      ${Rune} {
        filter: drop-shadow(1px 0 0 ${p.theme.orange})
          drop-shadow(0 1px 0 ${p.theme.orange})
          drop-shadow(-1px 0 0 ${p.theme.orange})
          drop-shadow(0 -1px 0 ${p.theme.orange});
      }
    `}

  &:hover {
    cursor: pointer;
  }

  > ${Rune} {
    transition: ease filter 0.2s;
  }

  > ${RuneName} {
    font-weight: bold;
  }
`;

const ItemsList = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
`;

const RunewordCalculator = () => {
  const [runes, setRune] = useRunes();
  const items = useItems();

  return (
    <Container>
      <RunesList>
        {runes.map((rune) => (
          <RuneItem
            key={rune.id}
            active={rune.active}
            onClick={() => setRune(rune, !rune.active)}
          >
            <Rune {...rune} />
            <RuneName>{rune.name}</RuneName>
          </RuneItem>
        ))}
      </RunesList>
      <ItemsList>
        {items.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </ItemsList>
    </Container>
  );
};

const RunewordCalculatorPage = () => {
  return (
    <D2Layout>
      <MDXContent>
        <Heading as="h1">Runeword Calculator</Heading>
        <BrowserOnly>{() => <RunewordCalculator />}</BrowserOnly>
      </MDXContent>
    </D2Layout>
  );
};

export default RunewordCalculatorPage;
