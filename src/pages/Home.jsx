import React from "react";
import Navbar from "../Componenents/Navbar";
import CategoryMenu from "../Componenents/CategoryMenu";
import FoodItems from "../Componenents/FoodItems";
import Cart from "../Componenents/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Home;