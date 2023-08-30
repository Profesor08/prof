import React from "react";
import styled from "styled-components";

const MatchWord = styled.span`
  color: ${(p) => p.theme.yellow};
`;

export const Match: React.VFC<{
  value: string;
  children: string;
}> = ({ children, value }) => {
  if (value.trim().length > 0) {
    const matches = children.matchAll(new RegExp(`${value}`, "gi"));

    const match = matches.next().value;

    if (match !== undefined) {
      const start = children.substring(0, match.index);
      const end = children.substring(match.index + match[0].length);

      return (
        <span>
          <span>{start}</span>
          <MatchWord>{match[0]}</MatchWord>
          <span>{end}</span>
        </span>
      );
    }
  }

  return <span>{children}</span>;
};
