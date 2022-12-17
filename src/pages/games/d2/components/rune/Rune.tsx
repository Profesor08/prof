import React, { useState } from "react";
import {
  flip,
  limitShift,
  offset,
  shift,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { motion } from "framer-motion";
import {
  Text,
  ItemTooltip,
  RuneName,
  Group,
} from "../item-tooltip/ItemTooltip";
import { IRune } from "../../store/runes";
import styled from "styled-components";

export const RuneImage = styled.img.attrs({
  width: 40,
  height: 40,
})``;

export const Rune: Component<IRune.Rune> = ({
  id,
  name,
  image,
  level,
  stats,
}) => {
  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy, context, placement } =
    useFloating({
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
      <RuneImage ref={reference} src={image} {...getReferenceProps()} />
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
                  <Text key={`${slot.toString()}-${index}`}>
                    {index === 0 && <>{slot.toString()}: </>}
                    {attribute}
                    {index !== attributes.length - 1 && <>,</>}
                  </Text>
                )),
              ),
            )}
          </Group>
          <Group>
            <Text>Required level: {level}</Text>
          </Group>
        </ItemTooltip>
      )}
    </>
  );
};
