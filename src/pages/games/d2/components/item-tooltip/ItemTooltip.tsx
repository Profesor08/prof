import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import type { Placement } from "@floating-ui/react";
import styled from "styled-components";

export const Tooltip = styled(motion.div)`
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 6px 10px;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ItemText = styled(motion.div)`
  font-family: exocet;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${(p) => p.theme.white};
`;

export const ItemType = styled(ItemText)`
  color: ${(p) => p.theme.grey};
`;

export const Group = styled.div`
  display: grid;
  align-content: start;
`;

export const RuneName = styled(ItemText)`
  display: grid;
  align-content: start;
  color: ${(p) => p.theme.orange};
`;

export const ItemName = styled(ItemText)`
  display: grid;
  align-content: start;
  color: ${(p) => p.theme.gold};
`;

export const ItemAttribute = styled(ItemText)`
  color: ${(p) => p.theme.blue};
`;

export const ItemTooltip = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> & {
    placement?: Placement;
  }
>(({ children, placement, ...props }, ref) => {
  const direction = placement === "top" ? -1 : 1;
  const y = -10 * direction;

  return (
    <Tooltip
      ref={ref}
      animate={{ opacity: [0, 1], y: [y, 0] }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </Tooltip>
  );
});
