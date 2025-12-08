import { MortgageForm } from "./MortgageForm";

export const MortgageFormContainer = () => {
  const [amount, setAmount] = useState(0);
  const handleSubmit = () => {
    /* расчёт логики */
  };

  return (
    <MortgageForm
      amount={amount}
      onAmountChange={setAmount}
      onSubmit={handleSubmit}
    />
  );
};
