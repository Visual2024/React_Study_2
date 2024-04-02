export const ItemDetail = ({ product }) => {
  const { title, imagen, precio, stock, descripcion } = product;

  return (
    <div className="flex flex-row mt-2 w-[60%] h-[65%] border-solid  ">
        <img src={imagen} alt={title} className=" object-contain w-[50%]" />
      <div className="ml-6 w-[80%]">
        <h1 className="font-bold text-[2rem] w-auto">{title}</h1>
        <p className="w-[70%]">{descripcion}</p>
        <p className="font-bold text-[2rem] mt-3 w-[50%]">Precio: ${precio}</p>
        <p className="font-bold text-[1rem] w-auto">Cantidad: {stock}</p>
        <button className="border-collapse bg-red-400 rounded mt-[2.5rem] px-5 py-2">
          Comprar
        </button>
      </div>
    </div>
  );
};
