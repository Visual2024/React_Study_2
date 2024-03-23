import "./App.css";
import { Card } from "./Components/Card/Card";
import { Usuario } from "./Components/Usuario/Usuario";

function App() {
  return (
    <>
      <Usuario nombre='Facundo' edad={19} nacionalidad='Argentina'/>
      <Card />
    </>
  );
}



export default App;
