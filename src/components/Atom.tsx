import styled, { keyframes } from "styled-components";

namespace IAtom {
  export type Atom = {
    size: number;
  };

  export type Core = {
    size: number;
  };

  export type Electron = {
    size: number;
  };

  export type Orbital = {
    size: number;
    weight: number;
  };
}

const atomRotation = keyframes`
  from {
    transform: rotateY(0turn);
  }

  to {
    transform: rotateY(1turn);
  }
`;

const getElectronRotation = (x: number, y: number, z: number) => keyframes`
  from {
    transform: rotateX(${x}turn) rotateY(${y}turn) rotateZ(${z}turn);
  }

  to {
    transform: rotateX(${x}turn) rotateY(${y}turn) rotateZ(${z + 1}turn);
  }
`;

const Electron = styled.div<IAtom.Electron & { orbital: IAtom.Orbital }>`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  width: ${(p) => p.orbital.size}px;
  height: ${(p) => p.orbital.size}px;
  border-radius: 50%;
  border: ${(p) => p.orbital.weight}px solid var(--ifm-font-color-base);
  transform-origin: 50% 50%;
  border-top-color: transparent;

  &:before {
    content: "";
    position: absolute;
    top: ${(p) => -p.orbital.weight / 2}px;
    left: ${(p) => -p.orbital.weight / 2}px;
    transform: translate(50%, 50%);
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;
    border-radius: 50%;
    background-color: var(--ifm-font-color-base);
  }
`;

export const Electron1 = styled(Electron)`
  transform: rotateX(0turn) rotateY(0.125turn);
  animation: ${getElectronRotation(0, 0.125, 0)} 1s linear infinite;
`;

export const Electron2 = styled(Electron)`
  transform: rotateX(0.125turn) rotateY(0.0625turn);
  animation: ${getElectronRotation(0.125, 0.0625, 0.35)} 1s linear infinite;
`;

export const Electron3 = styled(Electron)`
  transform: rotateX(0.125turn) rotateY(-0.0625turn);
  animation: ${getElectronRotation(0.125, -0.0625, 0.75)} 1s linear infinite;
`;

export const Core = styled.div<IAtom.Core>`
  grid-column: 1;
  grid-row: 1;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  background-color: var(--ifm-font-color-base);
  animation: ${atomRotation} 9s linear infinite reverse;
`;

export const Atom = styled.div<IAtom.Atom>`
  display: grid;
  justify-items: center;
  align-items: center;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  animation: ${atomRotation} 9s linear infinite;
`;
