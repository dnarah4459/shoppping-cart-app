/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductInfo from "../components/ProductInfo";
import { useCallback } from "react";
import { useState } from "react";

export default function Shop() {
  const { products, categories, addItemToCart, addItemToLiked, likedItems, removeItemFromLiked } = useOutletContext();
  let [productsListDOM, setProductsListDOM] = useState(products);

  const handleSelection = useCallback((userSelection) => {
    let newProductsListDOM = [];
    if (userSelection == "all") {
      setProductsListDOM(products);
    } else {
      newProductsListDOM = products.filter(
        (product) => product.category === userSelection
      );
      setProductsListDOM(newProductsListDOM);
    }
  }, []);

  return (
    <div className="flex-grow border-2 border-black flex flex-col">
      <div className="p-3 flex bg-gray-200 justify-center gap-8">
        <button
          className="text-purple-700 font-[650] tracking-wider cursor-pointer hover:bg-purple-200 hover:p-[9px] transition-all duration-300"
          onClick={() => handleSelection("all")}
        >
          All
        </button>
        <button
          className="text-purple-700 font-[650] tracking-wider cursor-pointer hover:bg-purple-200 hover:p-[9px] transition-all duration-300"
          onClick={() => handleSelection("electronics")}
        >
          Electronics
        </button>
        <button
          className="text-purple-700 font-[650] tracking-wider cursor-pointer hover:bg-purple-200 hover:p-[9px] transition-all duration-300"
          onClick={() => handleSelection("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="text-purple-700 font-[650] tracking-wider cursor-pointer hover:bg-purple-200 hover:p-[9px] transition-all duration-300"
          onClick={() => handleSelection("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="text-purple-700 font-[650] tracking-wider cursor-pointer hover:bg-purple-200 hover:p-[9px] transition-all duration-300"
          onClick={() => handleSelection("women's clothing")}
        >
          Women's Clothing
        </button>
      </div>
      <div className="flex-grow border-2 border-l-0 border-r-0 border-b-0
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                      gap-4 p-4 overflow-auto"
      >
        {productsListDOM.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addItemToLiked={addItemToLiked}
              likedItems={likedItems}
              removeItemFromLiked={removeItemFromLiked}
              addItemToCart = {addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
