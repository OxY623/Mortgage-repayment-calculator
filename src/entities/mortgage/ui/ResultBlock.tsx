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
      <div className="results results_filled">
        <h2 className="results_title">Ваши результаты</h2>
        <p className="results_p">
          Ваши результаты отображаются ниже на основе предоставленной вами
          информации. Чтобы скорректировать результаты, отредактируйте форму и
          снова нажмите «Рассчитать выплаты».
        </p>
        <div className="resultsCard">
          <div className="resultsItem">
            <p className="label">Ваши ежемесячные выплаты</p>
            <p className="value">{monthly} руб.</p>
          </div>

          <div className="divider"></div>

          <div className="resultsItem">
            <p className="label">Общая сумма выплат за срок</p>
            <p className="value">{total} руб.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="results results_empty">
        <div className="results_container">
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
      </div>
    );
  }
};
