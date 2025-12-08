import imgCalc from "@/shared/assets/images/illustration-empty.svg";
import "./ResultBlock.css";

export const ResultBlock = ({
  monthly,
  total,
}: {
  monthly?: string | null;
  total?: string | null;
}) => {
  if (monthly && total) {
    return (
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
  } else {
    return (
      <div className="results">
        <img
          src={imgCalc}
          alt="Иконка калькулятора"
          width={"12rem"}
          height={"auto"}
          className="results_img"
        />
        <h2 className="results_title">Результаты будут показаны здесь</h2>
        <p className="results_p">
          Запоните форму и нажмите кнопку "Рассчитать выплаты" чтобы увидеть
          ваши ежемесячные результаты расчета.
        </p>
      </div>
    );
  }
};
