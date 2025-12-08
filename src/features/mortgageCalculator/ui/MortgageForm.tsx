import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { RadioGroup } from "@/shared/ui/RadioGroup";

export const MortgageForm = ({ values, onChange, onSubmit }: Props) => (
  <form onSubmit={onSubmit}>
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
      onChange={(e) => onChange("term", e.target.value)}
      required
    />
    <Input
      label="Interest Rate"
      suffix="%"
      value={values.rate}
      onChange={(e) => onChange("rate", e.target.value)}
      required
    />
    <RadioGroup
      label="Mortgage Type"
      options={["Repayment", "Interest Only"]}
      selected={values.type}
      onChange={(value) => onChange("type", value)}
    />
    <Button type="submit" icon="calculator">
      Calculate Repayments
    </Button>
  </form>
);
