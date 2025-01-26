import heartEmpty from "../assets/heart_empty.svg";
import checkout from "../assets/checkout_svg.svg"; 
import coatSVG from "../assets/coat_svg.svg"
import { Link } from "react-router-dom";

export default function Header({numItemsInCart}) {
    return (
        <div className="flex items-center justify-between p-3 pl-5 border-2 border-b-0">
            <div className="flex items-center gap-6">
                <Link to = "/">
                    <img src={coatSVG} alt="" className="w-[31px]"/>
                </Link>
                <Link to = "/" className="text-[18px] font-[650] cursor-pointer">Home</Link>
                <Link to = "/shop" className="text-[18px] font-[650] cursor-pointer">Shop</Link>
            </div>

            <div className="flex items-center gap-6 p-3">
                <Link to = "/likes" className="cursor-pointer">
                    <img src={heartEmpty} alt="" className="w-[24px]"/>
                </Link>
                <Link to = "/checkout" className="cursor-pointer relative">
                    <h1 className="absolute bottom-3 left-6 text-[15px]">{numItemsInCart}</h1>
                    <img src={checkout} alt="" className="w-[28px]"/>
                </Link>
            </div>
        </div>
    )
}