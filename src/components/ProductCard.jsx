/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import heartEmpty from "../assets/heart_empty.svg";
import heartFilled from "../assets/heart_filled.svg";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
// eslint-disable-next-line react/prop-types
export default function ProductCard({ product, addItemToLiked, likedItems, removeItemFromLiked, addItemToCart}) { 
  let [showProductInfo, setShowProductInfo] = useState(false); 

  const handleItemSelectionLiked = () => {
    if(likedItems.includes(product)) {
      removeItemFromLiked(product);
    } else {
      addItemToLiked(product)
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 gap-3">
      <div className="relative w-full h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain cursor-pointer"
          onClick={() => {
            setShowProductInfo(true); 
          }}
        />
        <button className="absolute top-2 right-2 cursor-pointer" onClick={handleItemSelectionLiked}>
            {likedItems.includes(product) ? (
                <img src={heartFilled} alt="heart icon" className="w-[25px]"/>
            ) : (
                <img src={heartEmpty} alt="heart icon" className="w-[25px]"/>           
            )}
        </button>
      </div>
           
      {showProductInfo && (
  <div 
    className="
      fixed 
      inset-0 
      z-50
      flex 
      items-center 
      justify-center 
      bg-black/30 
      backdrop-blur-sm
    "
    onClick={() => setShowProductInfo(false)}
  >
    <div onClick={(e) => e.stopPropagation()}>
      <ProductInfo
        product={product}
        addItemToLiked={addItemToLiked}
        likedItems={likedItems}
        removeItemFromLiked={removeItemFromLiked}
        addItemToCart={addItemToCart}
        setShowProductInfo={setShowProductInfo}
      />
    </div>
  </div>
)}



      <div className="flex flex-col text-center">
        <h1 className="font-semibold text-lg truncate">
          {product.title}
        </h1>
        <span className="text-gray-500 mt-1">${product.price}</span>
      </div>

      <button className="mt-auto p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors cursor-pointer" onClick={() => {addItemToCart(product)}}>
        Add to Cart
      </button>
    </div>
  );
}
