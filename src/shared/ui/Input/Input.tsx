import type { ChangeEvent, JSX } from "react";
import "./Input.css";

type Props = {
  label: string;
  suffix?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & JSX.IntrinsicElements["input"];

export const Input = ({ label, suffix, error, ...rest }: Props) => (
  <label className="input-wrapper">
    <span className="input-label">{label}</span>
    <div className="input-field">
      <input type="number" {...rest} min={1} max={10000000} step={0.01} />
      {suffix && <span className="input-suffix">{suffix}</span>}
    </div>
    {error && <span className="input-error">{error}</span>}
  </label>
);
