import { useEffect, useState } from "react";
import date from "../../utils/MockAsyns.json";
import { ItemList } from "./ItemList";

export const ItemsListContainer = () => {
  const [productos, setProductos] = useState([]);

  const pedirProdct = () => {
    return new Promise((resolve, reject) => {
      resolve(date);
      reject("Lo siento Producto no Encontrado")
    });
  };

  useEffect(() => {
    pedirProdct().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
        <ItemList productos={productos} />
    </div>
  );
};
