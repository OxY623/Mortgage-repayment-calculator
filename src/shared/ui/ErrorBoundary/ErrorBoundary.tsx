import { Component, ReactNode } from "react";
import { ErrorComponent } from "@/shared/ui/ErrorComponent/ErrorComponent";

type Props = {
  children: ReactNode;
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("UI error:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    this.props.onAction?.();
  };

  render() {
    const { hasError } = this.state;
    const { children, title, message, actionLabel } = this.props;

    if (hasError) {
      return (
        <ErrorComponent
          title={title}
          message={message}
          actionLabel={actionLabel ?? "Повторить"}
          onAction={this.handleReset}
        />
      );
    }

    return children;
  }
}

export { ErrorBoundary };

