//Componentes
import { Route } from "wouter";
import Home from "./Pages/Home";
import DetailPage from "./Pages/DetailPage";
import Nav from "./Components/Nav";


//Hooks
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="w-full flex flex-col items-center">
      <Nav handleTheme={toggleTheme} theme={theme} />
      <Route path="/" component={Home} />
      <Route path="/Detail/:name" component={DetailPage} />
    </main>
  );
}

export default App;
