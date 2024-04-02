import { useEffect, useState } from "react";
import date from "../../Data/date.json";
import { ItemDetailContainer } from "./ItemDetailContainer";

export const ItemListContainer = () => {
  const [producto, setProduct] = useState([]);

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
    <div >
      <ItemDetailContainer producto={producto} />
    </div>
  );
};
