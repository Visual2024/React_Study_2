import { Link } from "react-router-dom";

export const Item = ({ producto, itemid }) => {
  return (
    <div className="bg-black text-white m-4 w-[80%] rounded-lg flex flex-col flex-wrap items-center ">
      <h1 className="my-4">{producto.title}</h1>
      <img src={producto.imagen} alt="" className="w-[10rem] mt-2 pb-10" />
      <Link to={producto.id } target="_blank">
        <button>Ir a otro sitio</button>
      </Link>
    </div>
  );
};
