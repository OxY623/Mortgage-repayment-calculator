import "@/app/style/styles.css";
import Layout from "@/shared/ui/Layout/Layout";
import Loader from "@/shared/ui/Loader/Loader";
import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("@/app/App"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="loader_container">
          <Loader />
        </div>
      }
    >
      <Layout>
        <App />
      </Layout>
    </Suspense>
  </StrictMode>
);
