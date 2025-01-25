import { useOutletContext } from "react-router-dom";
export default function Checkout() {
  const { products, categories, addItemToCart, addItemToLiked, likedItems, removeItemFromLiked } = useOutletContext();
  return (
    <div className="flex-grow border-2 border-black">

    </div>
  );
}
