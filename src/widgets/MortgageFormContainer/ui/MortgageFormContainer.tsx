import { MortgageForm } from "@/features/mortgageCalculator";
import { type FormEventHandler } from "react";
import "./MortgageFormContainer.css";
type Props = {
  values: {};
  onChange: (field: string, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const MortgageFormContainer = ({
  values,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <div className="MortgageFormContainer">
      <h2>Калькулятор ипотечных выплат</h2>
      <MortgageForm values={values} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
};
