import { Item } from "./Item";

export const ItemList = ({producto}) => {
  return (
    <div className="flex flex-row flex-wrap">
      {producto.length > 0 &&
        producto.map((producto) => {
          return (
            <div key={producto.id} className="flex flex-row flex-wrap w-[20%]">
              <Item producto={producto} />
            </div>
          );
        })}
    </div>
  );
};
