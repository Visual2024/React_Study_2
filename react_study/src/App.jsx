import "./App.css";

function App() {
  const nombre = <h1>Facundo</h1>
  const edad = <h2>19</h2>
  
  const usurio = <div>
    {nombre}{edad}
  </div>

  return <>
    <div>
      <MostrarNombreComponente />
      <MostrarNombreComponente />
      <MostrarNombreComponente />
    </div>

  </>;
}



export const MostrarNombreComponente =()=>{
  return <h1>Hola Facundo</h1>
}




export default App;
