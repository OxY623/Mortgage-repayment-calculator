import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { RadioGroup } from "@/shared/ui/RadioGroup/RadioGroup";
import type { ChangeEvent } from "react";
import { FormEventHandler } from "react";
import './MortgageForm.css';

type Props = {
  values: { [key: string]: string };
  onChange: (field: string, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const MortgageForm = ({ values, onChange, onSubmit }: Props) => (
  <form onSubmit={onSubmit}>
    <div>
      <button type="button">Очистть форму</button>
    </div>
    <Input
      label="Mortgage Amount"
      suffix="£"
      value={values.amount}
      onChange={(e) => onChange("amount", e.target.value)}
      required
    />
    <Input
      label="Mortgage Term"
      suffix="years"
      value={values.term}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange("term", e.target.value)
      }
      required
    />
    <Input
      label="Interest Rate"
      suffix="%"
      value={values.rate}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange("rate", e.target.value)
      }
      required
    />
    <RadioGroup
      label="Mortgage Type"
      options={["Repayment", "Interest Only"]}
      selected={values.type}
      onChange={(value) => onChange("type", value)}
    />
    <Button type="submit" icon="calculator">
      Рассчитать выплаты
    </Button>
  </form>
);
