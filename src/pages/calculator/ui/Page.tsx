import { calculateRepayment } from "@/entities/mortgage/model/calculate";
import { ResultBlock } from "@/entities/mortgage/ui/ResultBlock";
import { MortgageFormContainer } from "@/widgets/MortgageFormContainer";
import { useState } from "react";
import "./Page.css";

const CalculatorPage = () => {
  const [values, setValues] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "Repayment",
  });

  const [results, setResults] = useState<{
    monthly: string;
    total: string;
  } | null>(null);

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear=()=>{
    setValues({
      amount: "",
      term: "",
      rate: "",
      type: "Repayment",
    });
    setResults(null);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { amount, term, rate } = values;
    if (!amount || !term || !rate) return;

    const res = calculateRepayment({
      amount: Number(amount),
      term: Number(term),
      rate: Number(rate),
    });
    setResults(res);
  };

  return (
    <div className="calculator-page">
      <MortgageFormContainer
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />

      <ResultBlock
        monthly={results ? results.monthly : null}
        total={results ? results.total : null}
      />
    </div>
  );
};

export default CalculatorPage;
