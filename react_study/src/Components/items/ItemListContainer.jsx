import { useEffect, useState } from "react";
import date from "../../utils/MockAsyns.json";
import { Item } from "./Item";

export const ItemListContainer = () => {

  const [product, setProduct] = useState([]);

  const pedirProducto = () => {
    return new Promise((resolve, reject) => {
      resolve(date);
    });
  };

  useEffect(() => {
    pedirProducto()
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error("Error 404" + error);
      });
  }, []);

  return (
    <div>{product.length > 0 &&

        product.map((producto) =>  {
            return <div key={producto.id}>
                 <Item producto={producto} />
            </div>
        })}
    </div>
  )
};
