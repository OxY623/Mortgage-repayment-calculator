export function calculateRepayment({
  amount,
  rate,
  term,
}: {
  amount: number;
  rate: number;
  term: number;
}) {
  const monthlyRate = rate / 100 / 12;
  const payments = term * 12;
  const monthly =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  const total = monthly * payments;

  return {
    monthly: monthly.toFixed(2),
    total: total.toFixed(2),
  };
}
