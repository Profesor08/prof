import React, { useCallback, useEffect } from "react";
import styles from "./eyes.module.css";

export const Eye = () => {
  const w = 10;
  const h = 14;
  const s = 1;

  return (
    <svg
      className={styles.eye}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={w / 2}
        cy={h / 2}
        rx={w / 2 - s / 2}
        ry={h / 2 - s / 2}
        stroke="var(--eye-border)"
        strokeWidth={s}
        fill="var(--eye-background)"
      />
      <circle cx={w / 2} cy={h / 2 + 1} r={3} fill="var(--eye-dot)" />
    </svg>
  );
};

const dist = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

export const Eyes = () => {
  const onMouseMove = useCallback((event: MouseEvent) => {
    // dist(0, 0, event.clientX, event.clientY)
    // event.clientX
    // event.clientY
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className={styles.eyes}>
      <Eye />
      <Eye />
    </div>
  );
};

export const Char = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.char}>{children}</div>;
};

export const TypeScript = () => {
  return (
    <div className={styles.ts}>
      <Char>Ts</Char>
      <Eyes />
    </div>
  );
};

export const JavaScript = () => {
  return (
    <div className={styles.js}>
      <Char>Js</Char>
      <Eyes />
    </div>
  );
};

export const Css = () => {
  return (
    <div className={styles.css}>
      <Char>Css</Char>
      <Eyes />
    </div>
  );
};
