import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCallback } from "react";

export default function Checkout() {
  const {
    addItemToCart,
    removeItemFromCart,
    cartItems,
    removeItemFromCartCompletely,
  } = useOutletContext();

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((obj) => obj.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="border-2 border-black flex-grow flex flex-col">
      <div className="flex p-3 justify-between">
        <h1 className="text-[22px] font-[700]">Checkout Items</h1>
        <p className="p-1 font-[650] text-[17px]">Price: ${totalPrice}</p>
      </div>
      <div className="flex-grow flex flex-col gap-3">
        {groupedItems.map((product) => {
          return (
            <div
              key={product.id}
              className="flex m-3 border-2 shadow-xl gap-3 p-3"
            >
              <div>
                <img src={product.image} alt="" className="w-[60px]" />
              </div>
              <div className="flex-grow flex flex-col gap-2">
                <h1 className="p-1 font-[650] text-[16px]">{product.title}</h1>
                <div className="flex justify-between">
                  <div className="flex flex-col text-[14px] font-[550] pl-1">
                    <h1>${product.price}</h1>
                    <p>Quantity: {product.quantity}</p>
                  </div>

                  <div className="flex items-center gap-2 self-end">
                    <div className="bg-purple-500 text-center w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white font-[650]" onClick={() => {removeItemFromCart(product)}}>
                      -
                    </div>
                    <div className="bg-purple-500 text-center w-6 h-6 rounded-full flex items-center justify-center cursor-pointer text-white font-[650]" onClick={() => {addItemToCart(product)}}>
                      +
                    </div>
                  </div>
                </div>
                <button className="self-end text-[15px] underline cursor-pointer" onClick={() => {removeItemFromCartCompletely(product)}}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="p-3 bg-purple-500 m-2 self-start rounded-lg ml-5 mb-4">
        Checkout
      </button>
    </div>
  );
}
