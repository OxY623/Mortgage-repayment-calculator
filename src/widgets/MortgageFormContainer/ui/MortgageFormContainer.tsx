import { MortgageForm } from "@/features/mortgageCalculator";
import { type FormEventHandler } from "react";
import "./MortgageFormContainer.css";
type Props = {
  values: {};
  onChange: (field: string, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClear: () => void;
};

export const MortgageFormContainer = ({
  values,
  onChange,
  onSubmit,
  onClear,
}: Props) => {
  return (
    <div className="MortgageFormContainer">
      <div className="MortgageFormContainer_wrap">
        <h1 className="MortgageFormContainer_title">
          Калькулятор ипотечных выплат
        </h1>

        <button type="button" onClick={onClear}>
          Очисть форму
        </button>
      </div>

      <MortgageForm
        values={values}
        onChange={onChange}
        onSubmit={onSubmit}
        // onClear={onClear}
      />
    </div>
  );
};
