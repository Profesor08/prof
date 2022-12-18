import React, { useEffect, useRef } from "react";
import styled from "styled-components";

namespace IAtom {
  export type Atom = {
    size: number;
    rotate?: boolean;
  };

  export type Core = {
    size: number;
  };

  export type Electron = {
    size: number;
    diameter: number;
    weight: number;
  };
}

const Electron = styled.div<IAtom.Electron>`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  border-radius: 50%;
  border: ${(p) => p.weight}px solid var(--ifm-font-color-base);
  transform-origin: 50% 50%;
  border-top-color: transparent;

  &:before {
    content: "";
    position: absolute;
    top: ${(p) => -p.weight / 2}px;
    left: ${(p) => -p.weight / 2}px;
    transform: translate(50%, 50%);
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;
    border-radius: 50%;
    background-color: var(--ifm-font-color-base);
  }
`;

const Core = styled.div<IAtom.Core>`
  grid-column: 1;
  grid-row: 1;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  background-color: var(--ifm-font-color-base);
`;

const AtomContainer = styled.div<Pick<IAtom.Atom, "size">>`
  display: grid;
  justify-items: center;
  align-items: center;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
`;

export const Atom = styled<Styled<IAtom.Atom>>(
  ({ size, rotate = true, ...props }) => {
    const atomRef = useRef<HTMLDivElement>(null);
    const coreRef = useRef<HTMLDivElement>(null);
    const electronRefs = [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
    ];

    useEffect(() => {
      if (atomRef.current !== null && rotate === true) {
        atomRef.current.animate(
          [
            {
              transform: "rotateY(0turn)",
            },
            {
              transform: "rotateY(1turn)",
            },
          ],
          {
            duration: 9000,
            easing: "linear",
            iterations: Infinity,
          },
        );
      }
    }, [rotate]);

    useEffect(() => {
      if (coreRef.current !== null && rotate === true) {
        coreRef.current.animate(
          [
            {
              transform: "rotateY(0turn)",
            },
            {
              transform: "rotateY(-1turn)",
            },
          ],
          {
            duration: 9000,
            easing: "linear",
            iterations: Infinity,
          },
        );
      }
    }, [rotate]);

    useEffect(() => {
      const turn = 0.19;

      const rotate = [
        [0, turn],
        [turn, turn / 2],
        [turn, -turn / 2],
      ];

      electronRefs.forEach((electronRef, index) => {
        const x = rotate[index][0];
        const y = rotate[index][1];
        const z = (1 / 3) * index;

        electronRef.current?.animate(
          [
            {
              transform: `rotateX(${x}turn) rotateY(${y}turn) rotateZ(${z}turn)`,
            },
            {
              transform: `rotateX(${x}turn) rotateY(${y}turn) rotateZ(${
                z + 1
              }turn)`,
            },
          ],
          {
            duration: 1000,
            easing: "linear",
            iterations: Infinity,
          },
        );
      });
    }, []);

    return (
      <AtomContainer ref={atomRef} size={size} {...props}>
        <Core ref={coreRef} size={size * 0.2} />
        {new Array(3).fill(0).map((n, index) => (
          <Electron
            key={index}
            ref={electronRefs[index]}
            size={size * 0.128}
            diameter={size * 0.857}
            weight={size * 0.05}
          />
        ))}
      </AtomContainer>
    );
  },
)``;
