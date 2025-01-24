import { Link } from "react-router-dom"
import '../styles/other_styles.css'

export default function HomePage() {
  return (
      <div className="flex-grow flex items-center justify-center border-2 border-black home-page-main">
        <div className="border-4 flex flex-col gap-10 p-[50px] bg-gray-500 opacity-80">
          <h1 className="text-[25px] font-bold ">Welcome to Jaquette</h1>
          <Link className="p-3 bg-purple-600 self-center font-[650] cursor-pointer opacity-100" to = "shop">Shop Now</Link>
        </div>
      </div>
  )
}