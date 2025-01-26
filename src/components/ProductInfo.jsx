/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import heartEmpty from "../assets/heart_empty.svg";
import heartFilled from "../assets/heart_filled.svg";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ProductInfo({ product, addItemToLiked, likedItems, removeItemFromLiked, addItemToCart, setShowProductInfo}) { 
   let [count, setCount] = useState(1); 

  const handleItemSelectionLiked = () => {
    if(likedItems.includes(product)) {
      removeItemFromLiked(product);
    } else {
      addItemToLiked(product)
    }
  }

  const handleMinusButton = () => {
    if(count == 1) {
        return;
    } else {
        setCount(count - 1)
    }
  }


  const handleItemToCart = () => {
    for(let i = 0; i < count; i++) {
        addItemToCart(product);
    }
    setShowProductInfo(false);
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 gap-3 relative max-w-[90vw]">      <div className="relative w-full h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain cursor-pointer"
        />
        <button className="absolute top-2 right-2 cursor-pointer" onClick={handleItemSelectionLiked}>
            {likedItems.includes(product) ? (
                <img src={heartFilled} alt="heart icon" className="w-[25px]"/>
            ) : (
                <img src={heartEmpty} alt="heart icon" className="w-[25px]"/>           
            )}
        </button>
      </div>

      <div className="flex flex-col text-center">
      <span className="text-gray-500 mt-1">${product.price}</span>
        <h1 className="font-semibold text-lg truncate">
          {product.title}
        </h1>
      </div>

      <div>
        {product.description}
      </div>

        <div className="flex border-2 items-center self-start">
            <button className="bg-purple-500 text-[20px] font-[650] px-3 cursor-pointer text-white" onClick={handleMinusButton}>
                -
            </button>
            <div className="px-4">
                {count}
            </div>
            <button className="bg-purple-500 text-[20px] font-[650] px-3 cursor-pointer text-white" onClick={() => {setCount(count + 1)}}>
                +
            </button>
        </div>
      <button className="mt-auto p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors cursor-pointer self-start" onClick={handleItemToCart}>
        Add to Cart
      </button>
    </div>
  );
}
