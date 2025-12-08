import type { JSX, ReactNode } from "react";
import "./Container.css";

type Props = { children: ReactNode } & JSX.IntrinsicElements["div"];

function Container({ children }: Props) {
  return <div className="Container">{children}</div>;
}

export default Container;
