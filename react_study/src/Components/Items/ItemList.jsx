import { Item } from "./Item";

export const ItemList = ({productos}) => {
  return (
    <div>
      <h1>Gatitos</h1>
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
           <Item key={producto.id} producto={producto}/>
          );
        })}
    </div>
  );
};
