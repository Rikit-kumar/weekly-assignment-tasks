import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvider, MyStore } from "./context/QuestionContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider store={MyStore}>
    <AppRoutes />
  </ContextProvider>,
);
