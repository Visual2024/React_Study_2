import { useEffect, useState } from "react";
import date from "../../Data/date.json";
import { ItemList } from "./ItemList";


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
   <ItemList product={product}/>
  )
};
