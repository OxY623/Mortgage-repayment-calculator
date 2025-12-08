import type { JSX, ReactNode } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
} & JSX.IntrinsicElements["button"];

export const Button = ({ children, onClick }: Props) => (
  <button className="Button" onClick={onClick}>
    {children}
  </button>
);
