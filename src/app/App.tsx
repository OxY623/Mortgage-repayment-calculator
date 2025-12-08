import Container from "@/shared/ui/Container/Container";
import Loader from "@/shared/ui/Loader/Loader";
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
      <Container>
        <CalculatorPage />
      </Container>
    </Suspense>
  );
}

export default App;
