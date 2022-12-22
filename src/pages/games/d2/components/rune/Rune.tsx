import React, { useState } from "react";
import {
  flip,
  offset,
  shift,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import {
  ItemText,
  ItemTooltip,
  RuneName,
  Group,
} from "../item-tooltip/ItemTooltip";
import styled from "styled-components";
import { IRune } from "../../data/runes";

export const RuneImage = styled.img.attrs({
  width: 40,
  height: 40,
})``;

export const Rune = styled<Styled<IRune>>(
  ({ id, name, image, level, stats, ...props }) => {
    const [open, setOpen] = useState(false);
    const { x, y, reference, floating, strategy, context, placement } =
      useFloating({
        strategy: "fixed",
        placement: "bottom",
        middleware: [offset(10), flip(), shift()],
        open,
        onOpenChange: setOpen,
      });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useHover(context),
      useFocus(context),
    ]);

    return (
      <>
        <RuneImage
          ref={reference}
          src={image}
          {...getReferenceProps()}
          {...props}
        />
        {open && (
          <ItemTooltip
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            placement={placement}
            {...getFloatingProps()}
          >
            <Group>
              <RuneName>{name} Rune</RuneName>
            </Group>
            <Group>
              {stats.map(({ slots, attributes }) =>
                slots.map((slot) =>
                  attributes.map((attribute, index) => (
                    <ItemText key={`${slot.toString()}-${index}`}>
                      {index === 0 && <>{slot.toString()}: </>}
                      {attribute}
                      {index !== attributes.length - 1 && <>,</>}
                    </ItemText>
                  )),
                ),
              )}
            </Group>
            <Group>
              <ItemText>Required level: {level}</ItemText>
            </Group>
          </ItemTooltip>
        )}
      </>
    );
  },
)``;
