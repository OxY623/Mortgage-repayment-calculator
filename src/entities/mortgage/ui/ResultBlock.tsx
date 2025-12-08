export const ResultBlock = ({
  monthly,
  total,
}: {
  monthly: string;
  total: string;
}) => (
  <div className="results">
    <h2>Your results</h2>
    <p>
      Your monthly repayments: <strong>£{monthly}</strong>
    </p>
    <p>
      Total you'll repay over the term: <strong>£{total}</strong>
    </p>
  </div>
);
