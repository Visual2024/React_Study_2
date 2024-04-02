import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-teal-500">
      <nav className="flex flex-row flex-wrap justify-between content-center items-center ">
        <div className="flex ml-3">
          <Link to="/">
            <h4>Logo</h4>
          </Link>
        </div>
        <ul className="flex flex-row flex-wrap">
          <Link to="/"><li className="m-2">Inicio</li></Link>
          <Link to="/nosotros">
            <li className="m-2">Nosotros</li>
          </Link>
          <Link to="/producto">
            <li className="m-2">Producto</li>
          </Link>
          <Link to="/contacto">
            <li className="m-2">Contacto</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
