declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

type Component<
  T extends {} = {},
  K extends keyof JSX.IntrinsicElements = "div",
  S = JSX.IntrinsicElements[K],
> = React.FunctionComponent<S & T>;

type ImgComponent<T = {}> = Component<T, "img">;

// buttons
type BtnProps = {
  text?: string;
  icon?: string;
  size?: "large";
  stretch?: boolean;
};

type BtnComponent<T extends BtnProps = BtnProps> = Component<T, "a">;

// tables
type TableComponent<T = {}> = Component<T, "table">;
type TBodyComponent<T = {}> = Component<T, "tbody">;
type THeadComponent<T = {}> = Component<T, "thead">;
type TrComponent<T = {}> = Component<T, "tr">;
type ThComponent<T = {}> = Component<T, "th">;
type TdComponent<T = {}> = Component<T, "td">;

// list
type ListComponent<T = {}> = Component<T, "ul">;
type ListItemComponent<T = {}> = Component<T, "li">;

// links
type LinkComponent<T = {}> = Component<T, "a">;
