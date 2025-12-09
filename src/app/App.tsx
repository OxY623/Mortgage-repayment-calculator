import Container from "@/shared/ui/Container/Container";
import Loader from "@/shared/ui/Loader/Loader";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary/ErrorBoundary";
import { lazy, Suspense } from "react";
import "./app.css";

const CalculatorPage = lazy(() => import("@/pages/calculator/"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loader_container">
          <Loader />
        </div>
      }
    >
      <ErrorBoundary
        title="Не удалось загрузить страницу"
        message="Попробуйте обновить или повторить попытку позже."
      >
        <Container>
          <CalculatorPage />
        </Container>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
