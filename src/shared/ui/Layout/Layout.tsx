import type { JSX, ReactNode } from "react";
import "./Layout.css";

export type ILayoutProps = {
  children?: ReactNode;
} & JSX.IntrinsicElements["div"];

const Layout = ({ children, ...props }: ILayoutProps) => {
  return (
    <div className="layout" {...props}>
      {children}
    </div>
  );
};

export default Layout;
