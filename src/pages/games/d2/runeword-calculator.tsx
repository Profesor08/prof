import React, { useCallback, useEffect, useRef, useState } from "react";
import MDXContent from "@theme/MDXContent";
import Heading from "@theme/MDXComponents/Heading";
import D2Layout from "./layout/D2Layout";
import {
  useFiltersActive,
  useItems,
  useName,
  useRunes,
  useSockets,
  useSorting,
} from "./store/store";
import { Rune } from "./components/rune/Rune";
import styled, { css } from "styled-components";
import { Item } from "./components/item/Item";
import { RuneName } from "./components/item-tooltip/ItemTooltip";
import BrowserOnly from "@docusaurus/BrowserOnly";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
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
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: 8px 24px;

  @media (min-width: 997px) and (max-width: 1199.98px), (max-width: 649.98px) {
    grid-template-columns: 1fr;
  }
`;

function useFormReset<T, E extends Element = Element>(
  ref: React.RefObject<E>,
  resetValue: T,
  handler: (value: T) => void,
) {
  useEffect(() => {
    // find closest form and reset selected value on form reset
    const form = ref.current?.closest("form");
    const onReset = () => {
      handler(resetValue);
    };

    form?.addEventListener("reset", onReset);

    return () => form?.removeEventListener("reset", onReset);
  }, [resetValue, handler]);
}

const NameFilter = styled(({ ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useName();

  useFormReset(ref, "", setValue);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  return (
    <TextField
      ref={ref}
      value={value}
      label="Name"
      variant="outlined"
      size="small"
      type="search"
      onChange={handleChange}
      {...props}
    />
  );
})``;

const SocketsFilter = styled(({ ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useSockets();

  useFormReset(ref, "", setValue);

  const handleChange = useCallback((event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value as typeof value);
  }, []);

  return (
    <FormControl ref={ref} size="small" variant="outlined" {...props}>
      <InputLabel>Sockets</InputLabel>
      <Select<typeof value>
        value={value}
        onChange={handleChange}
        onReset={console.log}
        label="Sockets"
      >
        <MenuItem value="">
          <em>Any</em>
        </MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
  );
})``;

const SortingFilter = styled(({ ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useSorting();

  useFormReset(ref, "", setValue);

  const handleChange = useCallback((event: SelectChangeEvent<typeof value>) => {
    setValue(event.target.value as typeof value);
  }, []);

  return (
    <FormControl ref={ref} size="small" variant="outlined" {...props}>
      <InputLabel>Sorting</InputLabel>
      <Select<typeof value>
        value={value}
        onChange={handleChange}
        onReset={console.log}
        label="Sorting"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"nameAsc"}>Name (Ascending)</MenuItem>
        <MenuItem value={"nameDesc"}>Name (Descending)</MenuItem>
        <MenuItem value={"levelAsc"}>Level (Ascending)</MenuItem>
        <MenuItem value={"levelDesc"}>Level (Descending)</MenuItem>
      </Select>
    </FormControl>
  );
})``;

const FiltersReset = styled(({ ...props }) => {
  const active = useFiltersActive();

  return (
    <IconButton
      color="secondary"
      type="reset"
      size="small"
      title="Reset"
      disabled={active === false}
      {...props}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
})``;

const FiltersList = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px 200px 34px;
  grid-template-areas: "name sockets sorting reset";
  align-content: start;
  align-items: center;
  gap: 8px;

  @media (min-width: 997px) and (max-width: 1199.98px), (max-width: 649.98px) {
    grid-template-columns: 1fr 1fr 34px;
    grid-template-areas: "name name name" "sockets sorting reset";
  }

  ${NameFilter} {
    grid-area: name;
  }

  ${SocketsFilter} {
    grid-area: sockets;
  }

  ${SortingFilter} {
    grid-area: sorting;
  }

  ${FiltersReset} {
    grid-area: reset;
  }
`;

const FiltersForm = () => {
  return (
    <FiltersList>
      <NameFilter />
      <SocketsFilter />
      <SortingFilter />
      <FiltersReset />
    </FiltersList>
  );
};

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
      <FiltersForm />
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
