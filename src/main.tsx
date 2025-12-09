import "@/app/style/styles.css";
import Layout from "@/shared/ui/Layout/Layout";
import Loader from "@/shared/ui/Loader/Loader";
import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/shared/ui/ErrorComponent/ErrorComponent";
const App = lazy(() => import("@/app/App"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="loader_container">
          <Loader />
        </div>
      }
    ><ErrorBoundary fallbackRender={() => <><ErrorComponent title="Ошибка" message="Что-то пошло не так. Попробуйте еще раз." actionLabel="Попробовать снова" onAction={() => {
      window.location.reload();
    }} /></>}>
      <Layout>
        <App />
      </Layout>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>
);
