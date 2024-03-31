import { Item } from "./Item";

export const ItemList = ({product}) => {
  return (
    <div className="">
      {product.length > 0 &&
        product.map((producto) => {
          return (
            <div key={producto.id}>
              <Item producto={producto} />
            </div>
          );
        })}
    </div>
  );
};
