import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Importa el archivo CSS aquí
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
