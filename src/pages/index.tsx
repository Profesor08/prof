import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { Css, JavaScript, TypeScript } from "../components/eyes/Eyes";

function angle(cx: number, cy: number, ex: number, ey: number) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const eyesRef = useRef<HTMLDivElement>(null);
  const [deg, setDeg] = useState(0);

  const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    if (eyesRef.current !== null) {
      const rect = eyesRef.current.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height / 2;
      const deg = angle(clientX, clientY, anchorX, anchorY);

      setDeg(deg + 90);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
        <div ref={eyesRef} className={styles.eyes}>
          <div
            className={styles.eye}
            style={{ transform: `rotate(${deg}deg)` }}
          ></div>
          <div
            className={styles.eye}
            style={{ transform: `rotate(${deg}deg)` }}
          ></div>
        </div>
        <TypeScript />
        <JavaScript />
        <Css />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
