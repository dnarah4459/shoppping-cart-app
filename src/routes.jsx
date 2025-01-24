import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Layout from "./pages/Layout";
import Likes from "./pages/Likes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/", 
        element: <Layout />,
        children: [
            {index: true, element: <HomePage/>}, 
            {path: "shop", element: <Shop/>}, 
            {path: "checkout", element: <Checkout/>}, 
            {path: "likes", element: <Likes/>}, 
        ]
    },
])


export default router