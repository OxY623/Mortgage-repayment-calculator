import "./ErrorComponent.css";

type Props = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorComponent({
  title = "Ошибка",
  message = "Что-то пошло не так. Попробуйте еще раз.",
  actionLabel,
  onAction,
}: Props) {
  return (
    <div className="error-card" role="alert">
      <div className="error-icon" aria-hidden="true">
        !
      </div>
      <div className="error-content">
        <h3 className="error-title">{title}</h3>
        <p className="error-message">{message}</p>
        {onAction && actionLabel ? (
          <button className="error-action" type="button" onClick={onAction}>
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

