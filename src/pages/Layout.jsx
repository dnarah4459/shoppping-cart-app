/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const fetchRequests = [
  fetch("https://fakestoreapi.com/products"),
  fetch("https://fakestoreapi.com/products/categories"),
];

export default function Layout() {
  let [likedItems, setLikedItems] = useState([]);
  let [cartItems, setCartItems] = useState([]);
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
  };

  const addItemToLiked = (item) => {
    setLikedItems((prevLikedItems) => [...prevLikedItems, item]);
  };

  const removeItemFromLiked = (item) => {
    let likedItemsDuplicate = [...likedItems]
    if(likedItemsDuplicate.includes(item)) {
      const index = likedItemsDuplicate.indexOf(item);
      likedItemsDuplicate.splice(index, 1); 
      setLikedItems(likedItemsDuplicate)
    }
  }

  const removeItemFromCart = (item) => {
    setCartItems((prevCartItems) => {
      // Find the index of the first instance of the item
      const itemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (itemIndex !== -1) {
        // If the item exists, create a new array without that specific item
        const updatedItems = [...prevCartItems];
        updatedItems.splice(itemIndex, 1);  // Removes only the first occurrence of the item
        return updatedItems;
      }
  
      return prevCartItems;
    });
  };
  

  const removeItemFromCartCompletely = (product) => {
  setCartItems(prevCartItems => 
    prevCartItems.filter(cartItem => cartItem.id !== product.id)
  );
};
  

  const numItemsInCart = cartItems.length; 

  useEffect(() => {
    Promise.all(fetchRequests)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setProducts(data[0]);
        setCategories(data[1]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Header numItemsInCart={numItemsInCart}/>
      {products.length > 0 ? (
        <Outlet
          context={{
            products,
            categories,
            likedItems, 
            cartItems,
            addItemToCart,
            addItemToLiked,
            removeItemFromLiked, 
            removeItemFromCart,
            removeItemFromCartCompletely
          }}
        />
      ) : (
        <h1 className="flex-grow flex justify-center p-3 font-[650] text-[18px] border-2 border-black">Loading...</h1>
      )}
      <Footer />
    </div>
  );
}
