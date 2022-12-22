import React, { useMemo } from "react";
import styled from "styled-components";
import { IItem } from "../../data/rune-words";
import {
  Tooltip,
  ItemText,
  Group,
  ItemName,
  ItemType,
  ItemAttribute,
} from "../item-tooltip/ItemTooltip";

export const Item = styled<Styled<IItem>>(
  ({ name, attributes, level, itemTypes, runes, ladderOnly }) => {
    const typesText = useMemo(() => {
      return itemTypes.map((type) => type.toString()).join(", ");
    }, [itemTypes]);
    const runesText = useMemo(() => {
      return runes.map((rune) => rune.toString()).join("");
    }, [runes]);

    return (
      <Tooltip>
        <Group>
          <ItemName>{name}</ItemName>
        </Group>
        <Group>
          <ItemType>
            ({runes.length}) Socket {typesText}
          </ItemType>
        </Group>
        <Group>
          <ItemName>'{runesText}'</ItemName>
        </Group>
        <Group>
          <ItemText>Required level: {level}</ItemText>
        </Group>
        <Group>
          {attributes.map((attribute, index) => (
            <ItemAttribute key={index}>{attribute}</ItemAttribute>
          ))}
        </Group>
        {ladderOnly === true && (
          <Group>
            <ItemText>Ladder Only</ItemText>
          </Group>
        )}
      </Tooltip>
    );
  },
)``;
