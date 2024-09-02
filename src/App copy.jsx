import "./App.css";
import ExampleContextApi from "./components/ExampleContextApi";
import { ProvaContextProvider } from "./stores/provaContext";
import Content from "./components/Content";  // Crea un nuovo componente che usi il contesto

function App() {
  

  return (
    <ProvaContextProvider>
      <ExampleContextApi />
      <Content /> {/* Sposta la logica del contesto in un componente figlio */}
    </ProvaContextProvider>
  );
}

export default App;
