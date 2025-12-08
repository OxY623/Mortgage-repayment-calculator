import type { JSX } from "react";
import "./Input.css";

type Props = {
  label: string;
  suffix?: string;
  error?: string;
} & JSX.IntrinsicElements["input"];

export const Input = ({ label, suffix, error, ...rest }: Props) => (
  <label className="input-wrapper">
    <span className="input-label">{label}</span>
    <div className="input-field">
      <input {...rest} />
      {suffix && <span className="input-suffix">{suffix}</span>}
    </div>
    {error && <span className="input-error">{error}</span>}
  </label>
);
