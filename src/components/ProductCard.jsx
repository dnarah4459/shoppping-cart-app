/* eslint-disable no-unused-vars */
import heartEmpty from "../assets/heart_empty.svg";
import heartFilled from "../assets/heart_filled.svg";

// eslint-disable-next-line react/prop-types
export default function ProductCard({ imgURL, title, price, likedItem }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 gap-3">
      <div className="relative w-full h-48 flex items-center justify-center">
        <img
          src={imgURL}
          alt={title}
          className="max-h-full object-contain"
        />
        <button className="absolute top-2 right-2 cursor-pointer">
            {likedItem ? (
                <img src={heartEmpty} alt="heart icon" className="w-[25px]"/>
            ) : (
                <img src={heartFilled} alt="heart icon" className="w-[25px]"/>           
            )}
        </button>
      </div>

      <div className="flex flex-col text-center">
        <h1 className="font-semibold text-lg truncate">
          {title}
        </h1>
        <span className="text-gray-500 mt-1">${price}</span>
      </div>

      <button className="mt-auto p-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
}
