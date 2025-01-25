import { useOutletContext } from "react-router-dom";
export default function Likes() {
    const { products, categories, addItemToCart, addItemToLiked, likedItems, removeItemFromLiked } = useOutletContext();

    return(
        <div className="border-2 border-black flex-grow">

        </div>
    )
}