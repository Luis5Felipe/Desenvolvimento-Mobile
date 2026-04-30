import logo from "./logo.svg";
import "./App.css";
import Titulo from "./Titulo";
import Saida from "./Saida";
import Controle from "./controle";
import Start from "./Start";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Saida />
        <Controle />
        <Start />
      </header>
    </div>
  );
}

export default App;
