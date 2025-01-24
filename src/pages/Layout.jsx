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
      <Header />
      {products.length > 0 ? (
        <Outlet
          context={{
            products,
            categories,
            addItemToCart,
            addItemToLiked,
          }}
        />
      ) : (
        <h1 className="flex-grow flex justify-center p-3 font-[650] text-[20px] border-2 border-black">Loading...</h1>
      )}
      <Footer />
    </div>
  );
}
