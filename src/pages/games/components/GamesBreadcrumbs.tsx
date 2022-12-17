import React from "react";
import DocBreadcrumbsStyle from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css";
import { useLocation } from "@docusaurus/router";
import { useGamesContext } from "../context/GamesContext";
import { clsx } from "clsx";

const useBreadcrumbs = () => {
  const { games } = useGamesContext();
  const location = useLocation();
  const breadcrumbs = games.map((game) => [game, ...(game.pages ?? [])]).flat();

  return (
    location.pathname.startsWith("/")
      ? location.pathname.substring(1)
      : location.pathname
  )
    .split("/")
    .reduce<{ base: string; items: typeof breadcrumbs }>(
      ({ base, items }, segment) => {
        const path = `${base}/${segment}`;

        const item = breadcrumbs.find((breadcrumb) => breadcrumb.path === path);

        if (item !== undefined) {
          return {
            base: path,
            items: [...items, item],
          };
        }

        return {
          base: path,
          items: items,
        };
      },
      {
        base: "",
        items: [],
      },
    ).items;
};

const Item: Component<{
  active: boolean;
}> = ({ active, children }) => {
  return (
    <li
      className={clsx("breadcrumbs__item", {
        "breadcrumbs__item--active": active,
      })}
    >
      {children}
    </li>
  );
};

const Home = () => {
  return (
    <Item active={false}>
      <a aria-label="Home page" className="breadcrumbs__link" href="/">
        <svg
          viewBox="0 0 24 24"
          className={DocBreadcrumbsStyle.breadcrumbHomeIcon}
        >
          <path
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </Item>
  );
};

const Link: Component<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <Item active={false}>
      <a aria-label="Home page" className="breadcrumbs__link" href={href}>
        <span>{title}</span>
      </a>
    </Item>
  );
};

const Current: Component<{
  title: string;
}> = ({ title }) => {
  return (
    <Item active={true}>
      <span className="breadcrumbs__link">{title}</span>
    </Item>
  );
};

export const GamesBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className={DocBreadcrumbsStyle.breadcrumbsContainer}>
      <ul className="breadcrumbs">
        <Home />
        {breadcrumbs.map((breadcrumb, index) => {
          if (index < breadcrumbs.length - 1) {
            return (
              <Link
                key={index}
                title={breadcrumb.title}
                href={breadcrumb.path}
              />
            );
          } else {
            return <Current key={index} title={breadcrumb.title} />;
          }
        })}
      </ul>
    </nav>
  );
};
