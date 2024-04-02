import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Productos } from "./pages/Productos";
import { ItemDetailsContainer } from "./Components/Details/ItemDetailsContainer";
import { Navbar } from "./Components/layout/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalles/:id" element={<ItemDetailsContainer/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
