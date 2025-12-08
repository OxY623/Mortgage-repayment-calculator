import App from "@/app/App";
import "@/app/style/styles.css";
import Layout from "@/shared/ui/Layout/Layout";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
