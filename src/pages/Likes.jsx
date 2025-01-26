import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
export default function Likes() {
  const {
    products,
    categories,
    addItemToCart,
    addItemToLiked,
    likedItems,
    removeItemFromLiked,
  } = useOutletContext();

  return (
    <div className="border-2 border-black flex-grow flex flex-col">
      <h1 className="text-[22px] font-[700] p-3">Your Saved Items</h1>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-auto">
        {likedItems.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addItemToLiked={addItemToLiked}
              likedItems={likedItems}
              removeItemFromLiked={removeItemFromLiked}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
