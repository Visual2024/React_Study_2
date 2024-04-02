import React from "react";
import { Navbar } from "../layout/Navbar";
import { ItemListContainer } from "../items/ItemListContainer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
};
