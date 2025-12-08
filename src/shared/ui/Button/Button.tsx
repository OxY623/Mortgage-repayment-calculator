//import iconImg from "@/shared/assets/images/icon-calculator.svg";
import iconImg from "@/shared/assets/images/icon-calculator.svg";
import type { JSX, ReactNode } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  icon?: string;
} & JSX.IntrinsicElements["button"];

export const Button = ({ children, onClick, icon }: Props) => (
  <button className="Button" onClick={onClick}>
    {icon ? <img src={iconImg} alt="Calculator" /> : null}
    {children}
  </button>
);
