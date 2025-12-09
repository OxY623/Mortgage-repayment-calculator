import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { RadioGroup } from "@/shared/ui/RadioGroup/RadioGroup";
import type { ChangeEvent } from "react";
import { FormEventHandler } from "react";
import "./MortgageForm.css";

type Props = {
  values: { [key: string]: string };
  onChange: (field: string, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClear?: () => void;
};

export const MortgageForm = ({
  values,
  onChange,
  onSubmit,
  onClear,
}: Props) => (
  <form onSubmit={onSubmit}>
    <Input
      label="Сумма ипотеки"
      suffix="руб."
      value={values.amount}
      onChange={(e) => onChange("amount", e.target.value)}
      required
    />
    <div className="input-group">
      <Input
        label="Срок ипотенки"
        suffix="years"
        value={values.term}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange("term", e.target.value)
        }
        required
      />
      <Input
        label="Процентная ставка"
        suffix="%"
        value={values.rate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange("rate", e.target.value)
        }
        required
      />
    </div>
    <RadioGroup
      label="Тип ипотеки"
      options={["Аннуитетный", "Дифференцированный"]}
      selected={values.type}
      onChange={(value) => onChange("type", value)}
    />
    <Button type="submit" icon="calculator">
      Рассчитать выплаты
    </Button>
  </form>
);
