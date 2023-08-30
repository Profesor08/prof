import React, { useMemo } from "react";
import styled from "styled-components";
import { Match } from "../../../components/Match";
import { IItemWithMatches } from "../../data/rune-words";
import {
  Group,
  ItemAttribute,
  ItemName,
  ItemText,
  ItemType,
  Tooltip,
} from "../item-tooltip/ItemTooltip";

export const Item = styled<Styled<IItemWithMatches>>(
  ({ name, attributes, level, itemTypes, runes, ladderOnly, match }) => {
    const typesText = useMemo(() => {
      return itemTypes.map((type) => type.toString()).join(", ");
    }, [itemTypes]);
    const runesText = useMemo(() => {
      return runes.map((rune) => rune.toString()).join("");
    }, [runes]);

    return (
      <Tooltip>
        <Group>
          <ItemName>
            <Match value={match.name}>{name}</Match>
          </ItemName>
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
            <ItemAttribute key={index}>
              <Match value={match.attributeName}>{attribute}</Match>
            </ItemAttribute>
          ))}
        </Group>
        {ladderOnly === true && (
          <Group>
            <ItemText>Ladder Only</ItemText>
          </Group>
        )}
      </Tooltip>
    );
  }
)``;
